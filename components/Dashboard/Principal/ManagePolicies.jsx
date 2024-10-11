import React, { useState } from 'react';

const ManagePolicies = () => {
  const [policies, setPolicies] = useState([
    { title: 'Attendance Policy', description: 'Students must maintain 75% attendance.' },
    { title: 'Grading Policy', description: 'Grades will be assigned based on performance.' },
  ]);

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Manage School Policies</h2>
      <ul className="space-y-4">
        {policies.map((policy, index) => (
          <li key={index} className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg">{policy.title}</h3>
            <p>{policy.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagePolicies;
