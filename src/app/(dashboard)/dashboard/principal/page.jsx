"use client"
import React from 'react';
import SchoolStatistics from '../../../../../components/Dashboard/Principal/SchoolStatistics';
import ManageTeachers from '../../../../../components/Dashboard/Principal/ManageTeachers';
import ManageStudents from '../../../../../components/Dashboard/Principal/ManageStudents';
import ManageExams from '../../../../../components/Dashboard/Principal/ManageExams';
import PlanExams from '../../../../../components/Dashboard/Principal/PlanExams';

const PrincipalDashboard = () => {
  return (
    <div className='space-y-6 max-h-screen overflow-scroll'>
      <h1 className="text-3xl font-bold mb-4">Principal Dashboard</h1>
      <SchoolStatistics/>
      <ManageTeachers/>
      <ManageStudents/>
      <ManageExams/>
      <PlanExams/>
    </div>
  );
};

export default PrincipalDashboard;
