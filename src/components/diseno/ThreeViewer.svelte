<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import * as THREE from "three";
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
    import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
    import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

    export let modelColor: string = "#00ff00";
    export let modelType: "cube" | "sphere" | "cylinder" | "gltf" | "fbx" | "obj" = "cube";
    export let textureUrl: string | null = null;
    export let modelUrl: string | null = null; // [NEW] For external models

    // Texture transform props
    export let textureOffsetX: number = 0;
    export let textureOffsetY: number = 0;
    export let textureScale: number = 1;
    export let textureRotation: number = 0;

    // Interaction control props
    export let autoRotate: boolean = true;
    export let cameraPreset: "free" | "front" | "back" = "free";

    let container: HTMLDivElement;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let controls: OrbitControls;
    let mesh: THREE.Mesh | THREE.Group | THREE.Object3D | null = null; // [UPDATED]
    let pivot: THREE.Group;
    let textureLoader: THREE.TextureLoader;
    let gltfLoader: GLTFLoader;
    let fbxLoader: FBXLoader;
    let objLoader: OBJLoader;
    let currentTexture: THREE.Texture | null = null;
    let animationId: number;
    let isLoading = false;
    let prevModelUrl: string | null | undefined = undefined;
    let prevModelType: string | undefined = undefined;

    onMount(() => {
        init();
        animate();
        window.addEventListener("resize", onWindowResize);
    });

    onDestroy(() => {
        if (animationId) cancelAnimationFrame(animationId);
        window.removeEventListener("resize", onWindowResize);
        if (renderer) renderer.dispose();
        if (mesh) {
            if (mesh instanceof THREE.Mesh) {
                mesh.geometry.dispose();
                if (Array.isArray(mesh.material)) {
                    mesh.material.forEach((m) => {
                        if (m.map) m.map.dispose();
                        m.dispose();
                    });
                } else {
                    if (mesh.material.map) mesh.material.map.dispose();
                    mesh.material.dispose();
                }
            } else if (mesh instanceof THREE.Group) {
                mesh.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.geometry.dispose();
                        if (child.material) {
                            if (Array.isArray(child.material)) {
                                child.material.forEach((m) => m.dispose());
                            } else {
                                child.material.dispose();
                            }
                        }
                    }
                });
            }
        }
    });

    function init() {
        if (!container) return;

        // Scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf3f4f6); // Light gray background

        // Camera
        const aspect = container.clientWidth / container.clientHeight;
        camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
        camera.position.z = 2;

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // Helpers
        const gridHelper = new THREE.GridHelper(10, 10);
        scene.add(gridHelper);
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);

        // Pivot Group
        pivot = new THREE.Group();
        scene.add(pivot);

        // Controls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        // Initialize loaders
        textureLoader = new THREE.TextureLoader();
        gltfLoader = new GLTFLoader();
        fbxLoader = new FBXLoader();
        objLoader = new OBJLoader();

        // Load model based on type
        loadModel();
    }

    function loadModel() {
        isLoading = true;

        // Clean up previous model
        if (mesh && pivot) {
            pivot.remove(mesh);
            disposeModel(mesh);
            mesh = null;
        }

        // For basic geometry types or when no model URL is provided
        if (!modelUrl || modelType === "cube" || modelType === "sphere" || modelType === "cylinder") {
            loadBasicGeometry();
            isLoading = false;
            return;
        }

        switch (modelType) {
            case "gltf":
                gltfLoader.load(
                    modelUrl,
                    (gltf) => {
                        mesh = gltf.scene;
                        pivot.add(mesh);
                        centerModel();
                        updateTexture();
                        isLoading = false;
                    },
                    undefined,
                    (error) => {
                        console.error("Error loading GLTF model:", error);
                        loadBasicGeometry();
                        isLoading = false;
                    },
                );
                break;
            case "fbx":
                fbxLoader.load(
                    modelUrl,
                    (fbx) => {
                        mesh = fbx;
                        pivot.add(mesh);
                        centerModel();
                        updateTexture();
                        isLoading = false;
                    },
                    undefined,
                    (error) => {
                        console.error("Error loading FBX model:", error);
                        loadBasicGeometry();
                        isLoading = false;
                    },
                );
                break;
            case "obj":
                objLoader.load(
                    modelUrl,
                    (obj) => {
                        mesh = obj;
                        pivot.add(mesh);
                        centerModel();
                        updateTexture();
                        isLoading = false;
                    },
                    undefined,
                    (error) => {
                        console.error("Error loading OBJ model:", error);
                        loadBasicGeometry();
                        isLoading = false;
                    },
                );
                break;
            default:
                loadBasicGeometry();
                isLoading = false;
        }
    }

    function loadBasicGeometry() {
        let geometry;
        if (modelType === "sphere") {
            geometry = new THREE.SphereGeometry(0.7, 32, 32);
        } else if (modelType === "cylinder") {
            geometry = new THREE.CylinderGeometry(0.4, 0.4, 1.2, 32);
        } else {
            geometry = new THREE.BoxGeometry();
        }

        const material = new THREE.MeshStandardMaterial({
            color: textureUrl ? 0xffffff : modelColor,
            roughness: 0.3,
            metalness: 0.7,
        });
        mesh = new THREE.Mesh(geometry, material);
        pivot.add(mesh);
        updateTexture();
    }

    function disposeModel(model: THREE.Mesh | THREE.Group | THREE.Object3D) {
        if (model instanceof THREE.Mesh) {
            model.geometry.dispose();
            if (Array.isArray(model.material)) {
                model.material.forEach((m) => {
                    if (m.map) m.map.dispose();
                    m.dispose();
                });
            } else {
                if (model.material.map) model.material.map.dispose();
                model.material.dispose();
            }
        } else if (model instanceof THREE.Group) {
            model.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.geometry.dispose();
                    if (child.material) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach((m) => m.dispose());
                        } else {
                            child.material.dispose();
                        }
                    }
                }
            });
        }
    }

    function centerModel() {
        if (!mesh || !pivot) return;

        // Reset pivot rotation and position to defaults to compute bounds correctly
        const originalPivotRotation = pivot.rotation.y;
        pivot.rotation.set(0, 0, 0);
        pivot.position.set(0, 0, 0);

        // Reset mesh position and scale
        mesh.position.set(0, 0, 0);
        mesh.scale.set(1, 1, 1);
        mesh.updateMatrixWorld(true);

        const box = new THREE.Box3().setFromObject(mesh);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        
        let scale = 1.0;
        if (maxDim > 0) {
            // A scale factor of 1.3 fits nicely within the viewport with a camera z=2
            scale = 1.3 / maxDim;
            mesh.scale.set(scale, scale, scale);
        }
        mesh.updateMatrixWorld(true);

        // Recalculate bounding box of scaled model to center it relative to pivot origin
        const scaledBox = new THREE.Box3().setFromObject(mesh);
        const center = scaledBox.getCenter(new THREE.Vector3());
        
        // Offset the mesh position inside the pivot group so its geometric center is at (0, 0, 0)
        mesh.position.copy(center).multiplyScalar(-1);
        mesh.updateMatrixWorld(true);

        // Restore pivot rotation
        pivot.rotation.y = originalPivotRotation;
        pivot.updateMatrixWorld(true);

        console.log("Model Centered in Pivot:", {
            center,
            size,
            scale,
            meshPosition: mesh.position,
            pivotPosition: pivot.position,
        });
    }

    // Reactivity: Update model when modelUrl or modelType actually changes
    $: if (
        scene &&
        !isLoading &&
        (modelUrl !== prevModelUrl || modelType !== prevModelType)
    ) {
        prevModelUrl = modelUrl;
        prevModelType = modelType;
        loadModel();
    }

    // Reactivity: Update texture when textureUrl changes
    $: if (textureUrl !== undefined && mesh) {
        updateTexture();
    }

    // Reactivity: Update texture transforms when offset/scale/rotation change
    $: if (currentTexture && mesh) {
        applyTextureTransforms(textureOffsetX, textureOffsetY, textureScale, textureRotation);
    }

    function applyTextureTransforms(offX: number, offY: number, scale: number, rot: number) {
        if (!currentTexture) return;
        currentTexture.wrapS = THREE.RepeatWrapping;
        currentTexture.wrapT = THREE.RepeatWrapping;
        currentTexture.offset.set(offX, offY);
        const s = scale > 0 ? scale : 0.01;
        currentTexture.repeat.set(1 / s, 1 / s);
        currentTexture.center.set(0.5, 0.5);
        currentTexture.rotation = rot;
        currentTexture.needsUpdate = true;

        // Flag materials as needing update
        if (mesh instanceof THREE.Group) {
            mesh.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach((m) => { m.needsUpdate = true; });
                    } else {
                        child.material.needsUpdate = true;
                    }
                }
            });
        } else if (mesh instanceof THREE.Mesh) {
            (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
        }
    }

    function updateTexture() {
        if (!mesh || !textureLoader) return;

        if (textureUrl) {
            textureLoader.load(textureUrl, (texture) => {
                if (currentTexture) currentTexture.dispose();
                currentTexture = texture;
                applyTextureTransforms(textureOffsetX, textureOffsetY, textureScale, textureRotation);

                // Apply texture to all meshes in the model
                if (mesh instanceof THREE.Group) {
                    mesh.traverse((child) => {
                        if (child instanceof THREE.Mesh) {
                            if (Array.isArray(child.material)) {
                                child.material.forEach((m) => {
                                    m.map = texture;
                                    m.color.setHex(0xffffff);
                                    m.needsUpdate = true;
                                });
                            } else {
                                child.material.map = texture;
                                child.material.color.setHex(0xffffff);
                                child.material.needsUpdate = true;
                            }
                        }
                    });
                } else if (mesh instanceof THREE.Mesh) {
                    const material =
                        mesh.material as THREE.MeshStandardMaterial;
                    material.map = texture;
                    material.color.setHex(0xffffff);
                    material.needsUpdate = true;
                }
            });
        } else {
            // Remove texture if url is null
            if (currentTexture) {
                currentTexture.dispose();
                currentTexture = null;
            }

            if (mesh instanceof THREE.Group) {
                mesh.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach((m) => {
                                m.map = null;
                                m.color.set(modelColor);
                                m.needsUpdate = true;
                            });
                        } else {
                            child.material.map = null;
                            child.material.color.set(modelColor);
                            child.material.needsUpdate = true;
                        }
                    }
                });
            } else if (mesh instanceof THREE.Mesh) {
                const material = mesh.material as THREE.MeshStandardMaterial;
                material.map = null;
                material.color.set(modelColor);
                material.needsUpdate = true;
            }
        }
    }

    // Reactivity: Snap camera to front/back when cameraPreset changes
    $: if (camera && pivot && cameraPreset !== "free") {
        snapCameraToPreset(cameraPreset);
    }

    function snapCameraToPreset(preset: "front" | "back") {
        if (!camera || !pivot) return;
        // Reset pivot rotation so "front" and "back" are predictable
        pivot.rotation.y = 0;
        const distance = camera.position.length() || 2;
        if (preset === "front") {
            camera.position.set(0, 0, distance);
        } else {
            camera.position.set(0, 0, -distance);
        }
        camera.lookAt(0, 0, 0);
        if (controls) controls.update();
    }

    function animate() {
        animationId = requestAnimationFrame(animate);

        if (pivot && autoRotate) {
            pivot.rotation.y += 0.005;
        }

        if (controls) controls.update();

        if (renderer && scene && camera) {
            renderer.render(scene, camera);
        }
    }

    function onWindowResize() {
        if (!container || !camera || !renderer) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }
</script>

<div
    class="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-inner border border-gray-200"
    bind:this={container}
></div>
