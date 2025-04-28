import { handle } from 'hono/vercel';
import { OpenAPIHono } from '@hono/zod-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import { blogRoutes } from '../blogs';

const app = new OpenAPIHono().basePath('/api');

app.doc31('/doc', {
  openapi: '3.1.0',
  info: {
    version: '1.0.0',
    title: 'Seiichi Profile API',
  },
});

app.get(
  '/swagger',
  swaggerUI({
    url: '/api/doc',
  })
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route('/blogs', blogRoutes);
export type AppType = typeof routes;

export const GET = handle(app);
export const POST = handle(app);
