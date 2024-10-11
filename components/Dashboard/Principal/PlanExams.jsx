import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const PlanExams = () => {
  const upcomingExams = [
    { subject: 'History', date: '25th October', time: '10:00 AM' },
    { subject: 'Geography', date: '27th October', time: '11:00 AM' },
  ];

  return (
    <div className="p-6 bg-teal-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaCalendarAlt className="mr-2" /> Plan Exams
      </h2>
      <table className="w-full table-auto bg-white shadow-md">
        <thead className="bg-teal-200">
          <tr>
            <th className="border px-4 py-2 text-teal-700 font-semibold">Subject</th>
            <th className="border px-4 py-2 text-teal-700 font-semibold">Date</th>
            <th className="border px-4 py-2 text-teal-700 font-semibold">Time</th>
          </tr>
        </thead>
        <tbody>
          {upcomingExams.map((exam, index) => (
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

export default PlanExams;
