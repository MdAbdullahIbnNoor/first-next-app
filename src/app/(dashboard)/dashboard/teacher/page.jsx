"use client"
import React from 'react';
import ClassSchedule from '../../../../../components/Dashboard/Teacher/ClassSchedule';
import GradingPage from '../../../../../components/Dashboard/Teacher/GradingPage';
import StudentPerformance from '../../../../../components/Dashboard/Teacher/StudentPerformance';
import PlanExam from '../../../../../components/Dashboard/Teacher/PlanExam';
import AttendancePage from '../../../../../components/Dashboard/Teacher/AttendancePage';

const TeacherDashboard = () => {
  return (
    <div className='space-y-6 max-h-screen overflow-scroll'>
      <h1 className="text-3xl font-bold mb-4">Teacher Dashboard</h1>
      <ClassSchedule />
      <AttendancePage/>
      <GradingPage />
      <StudentPerformance />
      <PlanExam />
    </div>
  );
};

export default TeacherDashboard;
