const ImgSlider = new Proxy({"src":"/_astro/elemento 3d.DNF35x2F.jpg","width":1920,"height":1920,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/assets/SlideImages/elemento 3d.jpg";
							}
							
							return target[name];
						}
					});

const ImgSlider2 = new Proxy({"src":"/_astro/Florero.DbTbDSjc.jpg","width":1813,"height":1920,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/assets/SlideImages/Florero.jpg";
							}
							
							return target[name];
						}
					});

const ImgSlider3 = new Proxy({"src":"/_astro/shellby.DcPa4khb.png","width":1920,"height":1179,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/assets/SlideImages/shellby.png";
							}
							
							return target[name];
						}
					});

export { ImgSlider as I, ImgSlider2 as a, ImgSlider3 as b };
