// Componente LayoutAdminAlpha
import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutAdminAlpha = () => {
    return (
        <div>
            <h1>Layout del administrador</h1> 
            <Outlet />
        </div>
    );
};

export default LayoutAdminAlpha;