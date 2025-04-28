import { getCloudflareContext } from '@opennextjs/cloudflare';
import { drizzle } from 'drizzle-orm/d1';
import { Blog } from '@/db/schema';

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
