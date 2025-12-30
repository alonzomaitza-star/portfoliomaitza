async function getMod() {
						return import('./regimenes-fiscales-para-nuevos-contribuyentes_CnfISAZC.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
