import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';

const ClassSchedule = () => {
  const schedule = [
    { day: 'Monday', subject: 'Mathematics', time: '9:00 AM - 10:00 AM' },
    { day: 'Tuesday', subject: 'Science', time: '11:00 AM - 12:00 PM' },
    { day: 'Wednesday', subject: 'Physics', time: '10:00 AM - 11:00 AM' },
  ];

  return (
    <div className="p-4 bg-pink-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaChalkboardTeacher className="mr-2" /> Class Schedule
      </h2>
      <table className="w-full table-auto bg-white shadow-md">
        <thead className="bg-pink-200">
          <tr>
            <th className="border px-4 py-2 text-pink-700 font-semibold">Day</th>
            <th className="border px-4 py-2 text-pink-700 font-semibold">Subject</th>
            <th className="border px-4 py-2 text-pink-700 font-semibold">Time</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((classItem, index) => (
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

export default ClassSchedule;
