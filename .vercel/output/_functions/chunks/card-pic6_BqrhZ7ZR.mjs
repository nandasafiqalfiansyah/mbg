const p2 = new Proxy({"src":"/_astro/card-pic2.BeQ4x_k2.png","width":210,"height":148,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nanda/Documents/Hackaton/mgb/src/assets/pics/card-pic2.png";
							}
							
							return target[name];
						}
					});

const p3 = new Proxy({"src":"/_astro/card-pic3.D4d3JTsx.png","width":210,"height":210,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nanda/Documents/Hackaton/mgb/src/assets/pics/card-pic3.png";
							}
							
							return target[name];
						}
					});

const p4 = new Proxy({"src":"/_astro/card-pic4.CPZGvqT8.png","width":210,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nanda/Documents/Hackaton/mgb/src/assets/pics/card-pic4.png";
							}
							
							return target[name];
						}
					});

const p5 = new Proxy({"src":"/_astro/card-pic5.CqK5dBMJ.png","width":210,"height":196,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nanda/Documents/Hackaton/mgb/src/assets/pics/card-pic5.png";
							}
							
							return target[name];
						}
					});

const p6 = new Proxy({"src":"/_astro/card-pic6.CXJkFMY0.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nanda/Documents/Hackaton/mgb/src/assets/pics/card-pic6.png";
							}
							
							return target[name];
						}
					});

export { p3 as a, p4 as b, p5 as c, p6 as d, p2 as p };
