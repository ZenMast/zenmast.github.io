import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });
  
  // Sort by date, newest first
  const sortedBlog = blog.sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date) : new Date(0);
    const dateB = b.data.date ? new Date(b.data.date) : new Date(0);
    return dateB - dateA;
  });

  return rss({
    title: "Ro Man's Blog",
    description: "Ro Man's blog",
    site: context.site,
    items: sortedBlog.map((post) => ({
      title: post.data.title,
      description: post.data.description || '',
      pubDate: post.data.date || new Date(),
      link: `/blog/${post.id}/`,
      categories: post.data.categories || [],
    })),
    customData: `<language>en-us</language>`,
  });
}
