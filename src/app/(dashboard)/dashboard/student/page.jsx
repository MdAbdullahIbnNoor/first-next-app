"use client"
import React from 'react';
import ProgressPage from '../../../../../components/Dashboard/Student/ProgressPage';
import ClassRoutine from '../../../../../components/Dashboard/Student/ClassRoutine';
import AssignmentPage from '../../../../../components/Dashboard/Student/AssignmentPage';
import ExamResult from '../../../../../components/Dashboard/Student/ExamResult';

const StudentDashboard = () => {
  return (
    <div className='space-y-6 max-h-screen overflow-scroll'>
      <h1 className="text-4xl font-bold text-center mb-6">Student Dashboard</h1>
      <ProgressPage />
      <ClassRoutine />
      <AssignmentPage />
      <ExamResult />
    </div>
  );
};

export default StudentDashboard;
