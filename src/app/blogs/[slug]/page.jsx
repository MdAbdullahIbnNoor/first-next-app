'use client'; // This is a client-side component

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use this to get the dynamic route parameter

const BlogDetails = () => {
  const { slug } = useParams(); // Get the slug from the dynamic route
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog data
    fetch('/blogData.json')
      .then((response) => response.json())
      .then((data) => {
        // Find the blog post that matches the slug
        const blogPost = data.find((blog) => blog.slug === slug);
        setBlog(blogPost);
      })
      .catch((error) => console.error('Error fetching blog data:', error));
  }, [slug]);

  if (!blog) {
    return <p>Loading blog details...</p>;
  }

  return (
    <section className="container mx-auto py-16 px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600 text-lg mb-4">{blog.category}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{blog.description}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
