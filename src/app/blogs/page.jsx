'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaCommentAlt, FaRegBookmark, FaRegCalendarAlt, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]); 

  // Fetch the blog data from the blogData.json file
  useEffect(() => {
    fetch('/blog_data.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blog data:', error));
  }, []);

  return (
    <section className="container mx-auto py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Our Latest Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog) => (
          <Link key={blog.slugs} href={`/blogs/${blog.slugs}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-96">
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                {/* Category and Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-rose-600">
                    <FaRegBookmark className="mr-2" />
                    <span className="text-sm">{blog.category}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FaRegCalendarAlt className="mr-2" />
                    <span className="text-sm">{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">{blog.title}</h2>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-justify">{blog.description.split(' ').slice(0, 10).join(' ')}</p>

                {/* Reading Time, Likes, Dislikes, and Comments */}
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>{blog.reading_time}</span>
                  <div className="flex items-center">
                    <FaThumbsUp className="mr-2 text-green-500" />
                    <span>{blog.likes}</span>
                    <FaThumbsDown className="ml-4 mr-2 text-red-500" />
                    <span>{blog.dislikes}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCommentAlt className="mr-2" />
                    <span>{blog.comments_count} comments</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
