'use client'; // This is a client-side component

import React, { useEffect, useState } from 'react';
import { FaRegBookmark, FaRegCalendarAlt, FaCommentAlt, FaThumbsUp, FaThumbsDown, FaUser, FaSpinner } from 'react-icons/fa';

const BlogDetails = ({ params }) => {
  const { slug } = params;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog data
    fetch('/blog_data.json')
      .then((response) => response.json())
      .then((data) => {
        // Find the blog post that matches the slug
        const blogPost = data.find((blog) => blog.slugs === slug);
        setBlog(blogPost);
      })
      .catch((error) => console.error('Error fetching blog data:', error));
  }, [slug]);

  if (!blog) {
    return <span className="min-h-screen animate-spin text-center text-6xl flex items-center justify-center text-blue-600"><FaSpinner/></span>;
  }

  return (
    <section className="container mx-auto py-16 px-8">
      {/* Banner Image */}
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">{blog.title}</h1>
        </div>
      </div>

      {/* Blog Details */}
      <div className="container mx-auto bg-rose-50 shadow-lg rounded-lg mt-2 p-8">
        {/* Category, Date, Author */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-rose-600">
            <FaRegBookmark className="mr-2 text-xl" />
            <span className="text-lg font-semibold">{blog.category}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaRegCalendarAlt className="mr-2 text-xl" />
            <span className="text-lg">{new Date(blog.date).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Author Information */}
        <div className="flex items-center mb-8">
          <img
            src={blog.author_image}
            alt={blog.author}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{blog.author}</h3>
            <p className="text-gray-500 text-sm">Author</p>
          </div>
        </div>

        {/* Blog Content */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{blog.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {blog.tags.map((tag) => (
            <span key={tag} className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Likes, Dislikes, Reading Time and Comments */}
        <div className="flex justify-between items-center text-gray-500 text-sm mt-8">
          <div className="flex items-center">
            <FaThumbsUp className="mr-2 text-green-500" />
            <span>{blog.likes}</span>
            <FaThumbsDown className="ml-4 mr-2 text-red-500" />
            <span>{blog.dislikes}</span>
          </div>
          <span>{blog.reading_time} read</span>
          <div className="flex items-center">
            <FaCommentAlt className="mr-2" />
            <span>{blog.comments_count} comments</span>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Comments</h3>
          {blog.comments.map((comment, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg shadow">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <FaUser className="mr-2 text-gray-500" />
                  <span className="font-semibold">{comment.commenter}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <FaThumbsUp className="mr-2 text-green-500" />
                  <span>{comment.likes}</span>
                  <FaThumbsDown className="ml-4 mr-2 text-red-500" />
                  <span>{comment.dislikes}</span>
                </div>
              </div>
              <p className="text-gray-700">{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
