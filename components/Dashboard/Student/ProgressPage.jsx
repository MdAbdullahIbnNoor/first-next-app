import React from 'react';
import { FaTasks } from 'react-icons/fa';

const ProgressPage = () => {
  const progressData = {
    completedAssignments: 12,
    pendingAssignments: 3,
    overallGrade: 'B+',
  };

  return (
    <div className="p-6 bg-yellow-50 shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaTasks className="mr-2" /> Progress Report
      </h2>
      <div className="space-y-4 text-gray-800">
        <p>Completed Assignments: <span className="font-bold">{progressData.completedAssignments}</span></p>
        <p>Pending Assignments: <span className="font-bold">{progressData.pendingAssignments}</span></p>
        <p>Overall Grade: <span className="font-bold text-yellow-600">{progressData.overallGrade}</span></p>
      </div>
    </div>
  );
};

export default ProgressPage;
