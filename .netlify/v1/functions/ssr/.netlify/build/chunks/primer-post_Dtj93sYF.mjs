import { n as createVNode, B as Fragment, _ as __astro_tag_component__ } from './astro/server_D93YMnHd.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bienvenido a Nuestro Blog",
  "description": "Primer artículo de nuestro blog donde explicamos lo que encontrarás aquí.",
  "pubDate": "2025-07-20T00:00:00.000Z",
  "author": "Equipo de Contenido",
  "image": "/images/blog/welcome.jpg",
  "tags": ["bienvenida", "blog", "inicio"],
  "category": "General",
  "readingTime": 3
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "bienvenido-a-nuestro-blog",
    "text": "¡Bienvenido a Nuestro Blog!"
  }, {
    "depth": 2,
    "slug": "qué-encontrarás-aquí",
    "text": "¿Qué encontrarás aquí?"
  }, {
    "depth": 2,
    "slug": "empecemos",
    "text": "Empecemos"
  }, {
    "depth": 2,
    "slug": "sobre-el-autor",
    "text": "Sobre el Autor"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "bienvenido-a-nuestro-blog",
      children: "¡Bienvenido a Nuestro Blog!"
    }), "\n", createVNode(_components.p, {
      children: "¡Estamos emocionados de darte la bienvenida a nuestro nuevo blog! Este es el primer artículo de muchos que vendrán, donde compartiremos contenido valioso sobre desarrollo web, tecnología y más."
    }), "\n", createVNode(_components.h2, {
      id: "qué-encontrarás-aquí",
      children: "¿Qué encontrarás aquí?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Tutoriales paso a paso"
      }), "\n", createVNode(_components.li, {
        children: "Consejos y mejores prácticas"
      }), "\n", createVNode(_components.li, {
        children: "Actualizaciones de nuestras tecnologías favoritas"
      }), "\n", createVNode(_components.li, {
        children: "Proyectos interesantes"
      }), "\n", createVNode(_components.li, {
        children: "Y mucho más…"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "empecemos",
      children: "Empecemos"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'¡Hola, mundo del blog!'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Este es solo el comienzo. ¡Mantente atento para más contenido interesante!"
    }), "\n", createVNode(_components.h2, {
      id: "sobre-el-autor",
      children: "Sobre el Autor"
    }), "\n", createVNode(_components.p, {
      children: "Este artículo fue escrito por el equipo de contenido. ¡Gracias por leernos!"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/posts/primer-post.mdx";
const file = "C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/content/blog/posts/primer-post.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/content/blog/posts/primer-post.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
