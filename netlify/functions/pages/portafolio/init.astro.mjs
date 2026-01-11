import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from '../../chunks/astro/server_D7wE4XSf.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const html = () => "<p>##Este es un archivo de inicio para el portafolio.</p>\n<h2 id=\"la-idea-de-este-documento-es-determinara-el-fichero-donde-se-usara-y-se-guardan-las-paginas-la-documentacion-y-lo-referente-para-logica-para-llevar-un-conteo-de-portafolios\">La idea de este documento es determinara el fichero donde se usara y se guardan las paginas, la documentacion, y lo referente para logica para llevar un conteo de portafolios.</h2>";

				const frontmatter = {};
				const file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/portafolio/init.md";
				const url = "/portafolio/init";
				function rawContent() {
					return "##Este es un archivo de inicio para el portafolio.\r\n## La idea de este documento es determinara el fichero donde se usara y se guardan las paginas, la documentacion, y lo referente para logica para llevar un conteo de portafolios. ";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"la-idea-de-este-documento-es-determinara-el-fichero-donde-se-usara-y-se-guardan-las-paginas-la-documentacion-y-lo-referente-para-logica-para-llevar-un-conteo-de-portafolios","text":"La idea de este documento es determinara el fichero donde se usara y se guardan las paginas, la documentacion, y lo referente para logica para llevar un conteo de portafolios."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
