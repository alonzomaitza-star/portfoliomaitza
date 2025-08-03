import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../consts';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site || SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      customData: `
        <author>${post.data.author || SITE_TITLE}</author>
        <category>${post.data.category || 'General'}</category>
        ${post.data.tags ? post.data.tags.map(tag => `<category>${tag}</category>`).join('') : ''}
      `,
    })),
    customData: `
      <language>es</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <image>
        <url>${new URL('/images/logo.png', SITE_URL).href}</url>
        <title>${SITE_TITLE}</title>
        <link>${SITE_URL}</link>
      </image>
    `,
    stylesheet: '/rss-styles.xsl',
  });
}
