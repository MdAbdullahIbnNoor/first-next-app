import React from 'react';

const SchoolStatistics = () => {
  const stats = {
    totalStudents: 500,
    totalTeachers: 50,
    avgStudentPerformance: 'B+',
    schoolRanking: 10,
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4">School Statistics</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 bg-blue-100 rounded-lg">
          <h3 className="text-lg font-semibold">Total Students</h3>
          <p className="text-xl">{stats.totalStudents}</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg">
          <h3 className="text-lg font-semibold">Total Teachers</h3>
          <p className="text-xl">{stats.totalTeachers}</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg">
          <h3 className="text-lg font-semibold">Avg. Student Performance</h3>
          <p className="text-xl">{stats.avgStudentPerformance}</p>
        </div>
        <div className="p-4 bg-purple-100 rounded-lg">
          <h3 className="text-lg font-semibold">School Ranking</h3>
          <p className="text-xl">#{stats.schoolRanking}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolStatistics;
