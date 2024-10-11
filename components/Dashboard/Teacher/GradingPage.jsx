import React from 'react';
import { FaMarker } from 'react-icons/fa';

const GradingPage = () => {
  const grades = [
    { student: 'John Doe', subject: 'Math', grade: 'A' },
    { student: 'Jane Smith', subject: 'Science', grade: 'B+' },
  ];

  return (
    <div className="p-6 bg-blue-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaMarker className="mr-2" /> Grading
      </h2>
      <table className="w-full table-auto bg-white shadow-md">
        <thead className="bg-blue-200">
          <tr>
            <th className="border px-4 py-2 text-blue-700 font-semibold">Student</th>
            <th className="border px-4 py-2 text-blue-700 font-semibold">Subject</th>
            <th className="border px-4 py-2 text-blue-700 font-semibold">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-gray-700">{grade.student}</td>
              <td className="border px-4 py-2 text-gray-700">{grade.subject}</td>
              <td className="border px-4 py-2 text-gray-700">{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradingPage;
