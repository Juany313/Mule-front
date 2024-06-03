// Componente LayoutAdminAlpha
import React from 'react';
import NavAdmin from '../views/admin/NavAdmin';
import { Outlet } from 'react-router-dom';

const LayoutAdminAlpha = ({setIsAuth}) => {
    return (
        <div className="min-h-screen ">
     
      <NavAdmin setIsAuth={setIsAuth} />
        <div  className="mt-[150px]  ">
            <Outlet />    
        </div>
      
    </div>
    );
};


export default LayoutAdminAlpha;



