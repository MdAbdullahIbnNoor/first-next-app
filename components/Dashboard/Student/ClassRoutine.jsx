import React from 'react';
import { FaClock } from 'react-icons/fa';

const ClassRoutine = () => {
  const routine = [
    { day: 'Monday', subject: 'Mathematics', time: '9:00 AM - 10:00 AM' },
    { day: 'Tuesday', subject: 'Science', time: '10:00 AM - 11:00 AM' },
    { day: 'Wednesday', subject: 'English', time: '11:00 AM - 12:00 PM' },
  ];

  return (
    <div className="p-4 bg-purple-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaClock className="mr-2" /> Class Routine
      </h2>
      <table className="w-full table-auto bg-white shadow-md">
        <thead className="bg-purple-200">
          <tr>
            <th className="border px-4 py-2 text-purple-700 font-semibold">Day</th>
            <th className="border px-4 py-2 text-purple-700 font-semibold">Subject</th>
            <th className="border px-4 py-2 text-purple-700 font-semibold">Time</th>
          </tr>
        </thead>
        <tbody>
          {routine.map((classItem, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-gray-700">{classItem.day}</td>
              <td className="border px-4 py-2 text-gray-700">{classItem.subject}</td>
              <td className="border px-4 py-2 text-gray-700">{classItem.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassRoutine;
