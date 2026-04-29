import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router';


const MainLayout = () => {
    const location=useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[location.pathname])
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;