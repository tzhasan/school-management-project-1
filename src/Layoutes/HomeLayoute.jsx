import React from 'react';
import Home from '../Pages/Home-Page/Home';
import Register from '../Shared-Component/Register/Register';
import { Outlet } from 'react-router-dom';

const HomeLayoute = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayoute;