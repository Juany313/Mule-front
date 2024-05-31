import React from 'react';
import NavAdmin from './NavAdmin';
import Enlistment from './Enlistment/Enlistment';


const AdminLayout = ({ children, setIsAuth, infoUser}) => (
  <div className='flex min-h-screen '>
    <NavAdmin setIsAuth={setIsAuth} />
    <div className='mt-[120px] ml-[50px]'>
      <Enlistment/> 
    </div>
  </div>
);

export default AdminLayout;