import React from 'react';

const MonitorStudentsAndTeachers = () => {
  const students = [
    { name: 'John Doe', status: 'Active', performance: 'Excellent' },
    { name: 'Jane Smith', status: 'Active', performance: 'Good' },
  ];

  const teachers = [
    { name: 'Mr. Anderson', status: 'Active', subject: 'Math' },
    { name: 'Mrs. Johnson', status: 'On Leave', subject: 'Science' },
  ];

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Monitor Students & Teachers</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Students</h3>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Performance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.status}</td>
                <td className="border px-4 py-2">{student.performance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">Teachers</h3>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Subject</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{teacher.name}</td>
                <td className="border px-4 py-2">{teacher.status}</td>
                <td className="border px-4 py-2">{teacher.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonitorStudentsAndTeachers;
