import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col">
        <label htmlFor="name" className="text-4xl">Name</label>
        <input type="text" id="name" placeholder="Joe Biden" className="border-2" />
        </div>
      </form>
    </div>
  );
};

export default Register;
