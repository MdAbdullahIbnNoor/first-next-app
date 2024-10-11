import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

const ManageExams = () => {
  const exams = [
    { subject: 'Mathematics', date: '20th October', time: '10:00 AM' },
    { subject: 'Science', date: '22nd October', time: '11:00 AM' },
  ];

  return (
    <div className="p-6 bg-pink-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaClipboardList className="mr-2" /> Manage Exams
      </h2>
      <table className="w-full table-auto bg-white shadow-md">
        <thead className="bg-pink-200">
          <tr>
            <th className="border px-4 py-2 text-pink-700 font-semibold">Subject</th>
            <th className="border px-4 py-2 text-pink-700 font-semibold">Date</th>
            <th className="border px-4 py-2 text-pink-700 font-semibold">Time</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-gray-700">{exam.subject}</td>
              <td className="border px-4 py-2 text-gray-700">{exam.date}</td>
              <td className="border px-4 py-2 text-gray-700">{exam.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageExams;
