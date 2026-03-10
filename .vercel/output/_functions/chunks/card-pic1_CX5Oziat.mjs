const p1 = new Proxy({"src":"/_astro/card-pic1.LmmlwL7_.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nanda/Documents/Hackaton/mgb/src/assets/pics/card-pic1.png";
							}
							
							return target[name];
						}
					});

export { p1 as p };
