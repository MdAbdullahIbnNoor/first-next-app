import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';

const ManageTeachers = () => {
  const teachers = [
    { name: 'John Doe', subject: 'Mathematics', email: 'john@example.com' },
    { name: 'Jane Smith', subject: 'Science', email: 'jane@example.com' },
  ];

  return (
    <div className="p-6 bg-yellow-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaChalkboardTeacher className="mr-2" /> Manage Teachers
      </h2>
      <table className="w-full table-auto bg-white shadow-md">
        <thead className="bg-yellow-200">
          <tr>
            <th className="border px-4 py-2 text-yellow-700 font-semibold">Name</th>
            <th className="border px-4 py-2 text-yellow-700 font-semibold">Subject</th>
            <th className="border px-4 py-2 text-yellow-700 font-semibold">Email</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-gray-700">{teacher.name}</td>
              <td className="border px-4 py-2 text-gray-700">{teacher.subject}</td>
              <td className="border px-4 py-2 text-gray-700">{teacher.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTeachers;
