import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
import { Blog } from '../../../../db/schema';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { drizzle } from 'drizzle-orm/d1';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

const blog = new OpenAPIHono();

export const pagingQuery = z.object({
  page: z
    .string()
    .optional()
    .default('1')
    .transform((val) => Number.parseInt(val))
    .openapi({
      param: {
        name: 'page',
        in: 'query',
      },
    }),
  size: z
    .string()
    .optional()
    .default('5')
    .transform((val) => Number.parseInt(val))
    .openapi({
      param: {
        name: 'size',
        in: 'query',
      },
    }),
});

export const blogCreateSchema = createInsertSchema(Blog).omit({ id: true });
export const blogResponseSchema = createSelectSchema(Blog);
export type BlogResponseType = z.infer<typeof blogResponseSchema>;

const listBlogs = createRoute({
  method: 'get',
  path: '',
  tags: ['blogs'],
  summary: 'List all blogs',
  description: 'This endpoint returns a list of all blogs.',
  request: {
    query: pagingQuery,
  },
  responses: {
    200: {
      description: 'A list of blogs',
      content: {
        'application/json': {
          schema: z.array(blogResponseSchema),
        },
      },
    },
  },
});

const createBlog = createRoute({
  method: 'post',
  path: '',
  tags: ['blogs'],
  summary: 'Create a new blog',
  description: 'This endpoint creates a new blog.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: blogCreateSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Blog created successfully',
      content: {
        'application/json': {
          schema: blogResponseSchema,
        },
      },
    },
  },
});

export const blogRoutes = blog
  .openapi(listBlogs, async (c) => {
    const { page, size } = c.req.valid('query');
    const db = drizzle((await getCloudflareContext({ async: true })).env.DB);
    const blogs = await db
      .select()
      .from(Blog)
      .limit(size)
      .offset((page - 1) * size);
    return c.json(blogs);
  })
  .openapi(createBlog, async (c) => {
    // skip insertion for now
    // const { title, content, published } = c.req.valid('json');
    // const db = drizzle((await getCloudflareContext({ async: true })).env.DB);
    // const [newBlog] = await db.insert(Blog).values({ title, content, published }).returning();
    // return c.json(newBlog, 201);
    return c.json(
      {
        id: 1,
        title: 'test',
        content: 'test',
        published: 1,
      },
      201
    );
  });

export type UserAppType = typeof blogRoutes;
export { blog };
