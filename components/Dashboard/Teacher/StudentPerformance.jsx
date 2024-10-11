import React from 'react';
import { FaChartBar } from 'react-icons/fa';

const StudentPerformance = () => {
  const performanceData = [
    { subject: 'Mathematics', score: 85 },
    { subject: 'Science', score: 90 },
    { subject: 'English', score: 75 },
  ];

  return (
    <div className="p-6 bg-green-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaChartBar className="mr-2" /> Student Performance
      </h2>
      <table className="w-full table-auto bg-white shadow-md">
        <thead className="bg-green-200">
          <tr>
            <th className="border px-4 py-2 text-green-700 font-semibold">Subject</th>
            <th className="border px-4 py-2 text-green-700 font-semibold">Score</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((performance, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-gray-700">{performance.subject}</td>
              <td className="border px-4 py-2 text-gray-700">{performance.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPerformance;
