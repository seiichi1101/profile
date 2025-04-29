import { getCloudflareContext } from '@opennextjs/cloudflare';
import { drizzle } from 'drizzle-orm/d1';
import { Blog } from '@/db/schema';

// avoid SSG due to the fact that the database access is not available in Cloudflare Worker's build phase
export const dynamic = 'force-dynamic';

export default async function Page() {
  const db = drizzle((await getCloudflareContext({ async: true })).env.DB);
  const blogs = await db.select().from(Blog).all();

  return (
    <div>
      {blogs.map((blog) => (
        <div
          className="flex flex-col items-center justify-center mt-6 cursor-pointer"
          key={blog.id}>
          <p>{blog.title}</p>
        </div>
      ))}
    </div>
  );
}
