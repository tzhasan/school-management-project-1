import React from 'react';
import Home from '../Pages/Home-Page/Home';
import Register from '../Shared-Component/Register/Register';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared-Component/Navbar';

const HomeLayoute = () => {
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayoute;