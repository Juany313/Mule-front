import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from './UserLayout';
import Dashboard from '../auth/Dashboard';
import Shipments from '../auth/Shipments';
// import Profile from './Profile';

function AuthenticatedApp() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="shipments" element={<Shipments />} />
        {/* <Route path="profile/:id" element={<Profile />} /> */}
      </Route>
    </Routes>
  );
}

export default AuthenticatedApp;
