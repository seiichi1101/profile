'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BlogResponseType } from '../app/api/blogs';
import { rpc, RpcClient } from '../app/lib/client';

const getBlogs = async (client: RpcClient, page: number) => {
  const now = new Date();
  if (now.getSeconds() % 2 === 0) {
    console.log('Fetching blogs from the RPC (CSR)');
    const res = await client.api.blogs.$get({
      query: {
        page: page.toString(),
        size: '5',
      },
    });
    return res;
  } else {
    console.log('Fetching blogs from the API (CSR)');
    const res = await fetch(`/api/blogs?page=${page}&size=5`);
    return res;
  }
};

export default function LoadMoreBlogs({
  url,
  initialBlogs,
}: {
  url: string;
  initialBlogs: BlogResponseType[];
}) {
  const client = rpc(url).build();
  const [blogs, setBlogs] = useState(initialBlogs);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    const res = await getBlogs(client, page + 1);
    if (!res.ok) {
      console.error('Failed to load more blogs');
      return;
    }
    const newBlogs = await res.json();
    setBlogs((prev) => [...prev, ...newBlogs]);
    setPage((prev) => prev + 1);
  };

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <div className="bg-white rounded-lg shadow-md p-4 m-2 transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-700">{blog.title}</h3>
            </div>
          </div>
        </Link>
      ))}
      <div className="text-center mt-8">
        <button
          onClick={loadMore}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">
          View More
        </button>
      </div>
    </div>
  );
}
