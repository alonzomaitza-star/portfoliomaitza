import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string().max(100, 'El título no debe exceder los 100 caracteres'),
    description: z.string().max(200, 'La descripción no debe exceder los 200 caracteres'),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('general'),
    author: z.string().default('Equipo de Contenido'),
    readingTime: z.number().default(5),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
