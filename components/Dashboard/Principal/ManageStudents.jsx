import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

const ManageStudents = () => {
  const students = [
    { name: 'Alex Johnson', grade: 'A', email: 'alex@example.com' },
    { name: 'Emily Clark', grade: 'B+', email: 'emily@example.com' },
  ];

  return (
    <div className="p-6 bg-indigo-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaUserGraduate className="mr-2" /> Manage Students
      </h2>
      <table className="w-full table-auto bg-white shadow-md">
        <thead className="bg-indigo-200">
          <tr>
            <th className="border px-4 py-2 text-indigo-700 font-semibold">Name</th>
            <th className="border px-4 py-2 text-indigo-700 font-semibold">Grade</th>
            <th className="border px-4 py-2 text-indigo-700 font-semibold">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-gray-700">{student.name}</td>
              <td className="border px-4 py-2 text-gray-700">{student.grade}</td>
              <td className="border px-4 py-2 text-gray-700">{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStudents;
