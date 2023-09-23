import React from 'react';
import Loading from '../../Shared-Component/Loading';
import { Link } from 'react-router-dom';
import BtnPrimary from '../../Shared-Component/Button/BtnPrimary';

const Home = () => {
  return (
    <div className="space-y-10">
      <h1>Home1-tzhasan</h1>
      <BtnPrimary link={"/login"} name={"Login"} />
      <BtnPrimary link={"/register"} name={"Register"} />
      <Loading />
    </div>
  );
};

export default Home;