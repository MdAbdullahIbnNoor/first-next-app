'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch the blog data from the blogData.json file
  useEffect(() => {
    fetch('/blogData.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blog data:', error));
  }, []);

  return (
    <section className="container mx-auto py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">Our Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.slug} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-36 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-blue-600 text-sm mb-4">{blog.category}</p>
              <p className="text-gray-700 text-sm mb-4">{blog.description}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-blue-500 hover:text-blue-700 font-semibold "
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
