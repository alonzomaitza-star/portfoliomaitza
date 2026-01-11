const ImgSlider = new Proxy({"src":"/_astro/Insano Network-Slider 1.D1qmrY7L.jpg","width":3333,"height":5333,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/assets/SlideImages/Insano Network-Slider 1.jpg";
							}
							
							return target[name];
						}
					});

const ImgSlider2 = new Proxy({"src":"/_astro/Insano Network-Slider 2.Bn5Kfmgy.jpg","width":3333,"height":5333,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/assets/SlideImages/Insano Network-Slider 2.jpg";
							}
							
							return target[name];
						}
					});

export { ImgSlider as I, ImgSlider2 as a };
