import { sampleBlogsData } from '@/data/blog';

export default function Home() {
  const blogs = sampleBlogsData;
  return (
    <div>
      {blogs.map((blog) => (
        <div
          className="flex flex-col items-center justify-center mt-6 cursor-pointer"
          key={blog.id}></div>
      ))}
    </div>
  );
}
