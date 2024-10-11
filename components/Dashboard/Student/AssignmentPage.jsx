import React from 'react';
import { FaBook } from 'react-icons/fa';

const AssignmentPage = () => {
  const assignments = [
    { subject: 'Math', dueDate: '10th October', description: 'Algebra homework' },
    { subject: 'Science', dueDate: '15th October', description: 'Lab report submission' },
  ];

  return (
    <div className="p-4 bg-blue-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaBook className="mr-2" /> Assignments
      </h2>
      <ul className="space-y-4">
        {assignments.map((assignment, index) => (
          <li key={index} className="border p-4 rounded-lg bg-white shadow-md">
            <h3 className="font-semibold text-blue-600">{assignment.subject}</h3>
            <p className="text-gray-700">Due: {assignment.dueDate}</p>
            <p className="text-gray-500">{assignment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentPage;
