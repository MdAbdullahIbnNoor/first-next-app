import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AttendancePage = () => {
  const attendance = [
    { student: 'John Doe', status: 'Present' },
    { student: 'Jane Smith', status: 'Absent' },
  ];

  return (
    <div className="p-6 bg-green-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaCheckCircle className="mr-2" /> Attendance
      </h2>
      <table className="w-full table-auto bg-white shadow-md">
        <thead className="bg-green-200">
          <tr>
            <th className="border px-4 py-2 text-green-700 font-semibold">Student</th>
            <th className="border px-4 py-2 text-green-700 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-gray-700">{record.student}</td>
              <td className={`border px-4 py-2 ${record.status === 'Present' ? 'text-green-500' : 'text-red-500'}`}>
                {record.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendancePage;
