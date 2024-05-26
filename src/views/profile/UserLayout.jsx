import React from 'react';
import NavProfile from './NavProfile';

const UserLayout = ({ children, setIsAuth}) => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <NavProfile />
    <div className="content" style={{ flex: 1, overflowY: 'auto' }}>{children}</div>
  </div>
);

export default UserLayout;