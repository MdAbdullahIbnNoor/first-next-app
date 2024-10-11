"use client"
import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaUserGraduate, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-56 min-h-screen bg-gray-600 p-4">
      {/* Sidebar Title */}
      <h2 className="text-xl font-bold mb-4 text-center text-gray-100">Select Role</h2>

      {/* Home and Profile Links */}
      <ul className="mb-6">
        <li className="cursor-pointer text-center rounded-lg font-semibold text-white bg-blue-700 p-2 mb-2 flex items-center justify-center space-x-2">
          <FaHome />
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer text-center rounded-lg font-semibold text-white bg-blue-700 p-2 mb-4 flex items-center justify-center space-x-2">
          <FaUser />
          <Link href="/dashboard/profile">Profile</Link>
        </li>
      </ul>

      {/* Role-Based Links */}
      <ul>
        <li className="cursor-pointer text-center rounded-lg font-semibold text-white bg-blue-700 p-2 mb-2 flex items-center justify-center space-x-2">
          <FaUserGraduate />
          <Link href="/dashboard/student">Student</Link>
        </li>
        <li className="cursor-pointer text-center rounded-lg font-semibold text-white bg-blue-700 p-2 mb-2 flex items-center justify-center space-x-2">
          <FaChalkboardTeacher />
          <Link href="/dashboard/teacher">Teacher</Link>
        </li>
        <li className="cursor-pointer text-center rounded-lg font-semibold text-white bg-blue-700 p-2 mb-2 flex items-center justify-center space-x-2">
          <FaUserTie />
          <Link href="/dashboard/principal">Principal</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
