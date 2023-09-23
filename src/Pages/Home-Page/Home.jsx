import React from 'react';
import Loading from '../../Shared-Component/Loading';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home1-tzhasan
        <Link className="border-2 p-4" to="/register">
          Register
        </Link>
        <Link className="border-2 p-4" to="/login">
          Login
        </Link>
      <Loading />
    </div>
  );
};

export default Home;