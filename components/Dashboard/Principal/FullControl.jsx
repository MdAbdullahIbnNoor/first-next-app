import React from 'react';

const FullControl = () => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Full Control of the School System</h2>
      <p className="text-lg">As the principal, you have full control over the following:</p>
      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Manage user roles (Students, Teachers, Admins)</li>
        <li>Approve or reject new enrollments</li>
        <li>Modify or enforce policies</li>
        <li>Monitor overall performance of the school</li>
        <li>Control system-wide settings</li>
      </ul>
    </div>
  );
};

export default FullControl;
