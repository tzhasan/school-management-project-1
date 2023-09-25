import React, { useState } from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import BtnPrimary from "../Button/BtnPrimary";

const Register = () => {
  const [focused, setFocused] = useState([false, false]);

  const handleFocus = (index) => {
    const updatedFocused = [...focused];
    updatedFocused[index] = true;
    setFocused(updatedFocused);
  };

  const handleBlur = (index) => {
    const updatedFocused = [...focused];
    updatedFocused[index] = false;
    setFocused(updatedFocused);
  };
  // react hook form
   const {
     register,
     handleSubmit,
     watch,
     reset,
     formState: { errors },
   } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset()
   };
  // react hook form
  return (
    <div>
      <div className="md:w-[50%] w-[90%] mx-auto border-2 p-5 rounded-lg">
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 text-center my-[2%]">
          Create Account
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row md:gap-2 text-center md:text-left ">
            <div className="flex flex-col md:w-1/2 w-[90%] mx-auto mt-8 md:mt-0">
              <label
                htmlFor="name"
                className={`text-sm sm:text-md md:text-lg   transition-transform transform  ${
                  focused[0] ? "-translate-y-2 scale-110 md:scale-105" : "translate-y-0 "
                } duration-300 ${
                  focused[0] ? "text-gray-700" : "text-gray-400"
                }`}
              >
                User Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Your Full Name"
                className="border-2 rounded-lg 
               py-[2%]  focus:border-blue-500 pl-2 outline-none text-gray-500 focus:text-gray-700"
                onFocus={() => handleFocus(0)}
                onBlur={() => handleBlur(0)}
              />
            </div>
            <div className="flex flex-col  md:w-1/2 w-[90%] mx-auto mt-8 md:mt-0">
              <label
                htmlFor="email"
                className={`text-sm sm:text-md md:text-lg   transition-transform transform  ${
                  focused[1] ? "-translate-y-2 scale-110 md:scale-105" : "translate-y-0 "
                } duration-300 ${
                  focused[1] ? "text-gray-700" : "text-gray-400"
                }`}
              >
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="border-2 rounded-lg 
               py-[2%]  focus:border-blue-500 pl-2 outline-none text-gray-500 focus:text-gray-700"
                onFocus={() => handleFocus(1)}
                onBlur={() => handleBlur(1)}
              />
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <button type="submit" className="mt-[5%] md:mt-[3%] ">
              <BtnPrimary name={"CREATE"} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
