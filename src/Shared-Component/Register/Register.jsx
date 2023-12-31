import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import BtnPrimary from "../Button/BtnPrimary";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createAccount, user, updateUserProfile } = useContext(AuthContext);
  const [focused, setFocused] = useState([false, false]);
  const [passwordEyeBtn, setPasswordEyeBtn] = useState(true)
  const [passwordEyeBtn2, setPasswordEyeBtn2] = useState(true)

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
    const finalData = {
      ...data,
      age: data.age === "" ? parseInt(0) : parseInt(data.age),accountCreated: new Date
    };
    console.log(data)
    console.log(finalData);
    const {
      name,
      email,
      password,
      address,
      age,
      gender,
      position,
      accountCreated,
    } = finalData;
  
    createAccount(email, password)
      .then((result) => {
        updateUserProfile(name).then((result) => { 
          alert('Updated profile')
        })
          .catch((error) => { console.log(error.message);})
      })
      .catch((error) => {
        console.log(error.message);
       })
    reset()
   };
  // react hook form
  return (
    <div className="pt-[5%]">
      <div className="md:w-[50%] w-[90%] mx-auto border-2 p-5  rounded-lg">
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 text-center my-[2%]">
          Create Account
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row md:gap-2 text-center md:text-left ">
            <div className="flex flex-col md:w-1/2 w-[90%] mx-auto mt-4 md:mt-0">
              <label
                htmlFor="name"
                className={`text-sm sm:text-md md:text-lg   transition-transform transform  ${
                  focused[0]
                    ? "-translate-y-2 scale-110 md:scale-105"
                    : "translate-y-0 "
                } duration-300 ${
                  focused[0] ? "text-gray-700" : "text-gray-400"
                }`}
              >
                User Name <span className="text-red-600">*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                placeholder="Your Full Name"
                className="border-2 rounded-lg 
               py-[2%]  focus:border-[#051939] pl-2 outline-none text-gray-500 focus:text-gray-700"
                onFocus={() => handleFocus(0)}
                onBlur={() => handleBlur(0)}
              />
            </div>
            <div className="flex flex-col  md:w-1/2 w-[90%] mx-auto mt-4 md:mt-0">
              <label
                htmlFor="email"
                className={`text-sm sm:text-md md:text-lg   transition-transform transform  ${
                  focused[1]
                    ? "-translate-y-2 scale-110 md:scale-105"
                    : "translate-y-0 "
                } duration-300 ${
                  focused[1] ? "text-gray-700" : "text-gray-400"
                }`}
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="border-2 rounded-lg 
               py-[2%]  focus:border-[#051939] pl-2 outline-none text-gray-500 focus:text-gray-700"
                onFocus={() => handleFocus(1)}
                onBlur={() => handleBlur(1)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2 mt-0 md:mt-6 text-center md:text-left ">
            <div className=" flex flex-col md:w-1/2 w-[90%] mx-auto mt-4 md:mt-0">
              <label
                htmlFor="password"
                className={`text-sm sm:text-md md:text-lg   transition-transform transform  ${
                  focused[2]
                    ? "-translate-y-2 scale-110 md:scale-105"
                    : "translate-y-0 "
                } duration-300 ${
                  focused[2] ? "text-gray-700" : "text-gray-400"
                }`}
              >
                Password <span className="text-red-600">*</span>
              </label>
              <div className=" relative">
                <input
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long.",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/,
                      message:
                        "Password must contain at least one capital letter and one special character.",
                    },
                  })}
                  type={passwordEyeBtn ? "password" : "text"}
                  id="password"
                  placeholder="Enter your password"
                  className=" border-2 rounded-lg w-full 
               py-[2%]  focus:border-[#051939] pl-2 outline-none text-gray-500 focus:text-gray-700"
                  onFocus={() => handleFocus(2)}
                  onBlur={() => handleBlur(2)}
                />
                <p
                  onClick={() => setPasswordEyeBtn(!passwordEyeBtn)}
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                >
                  {passwordEyeBtn ? <PiEyeClosed /> : <PiEye />}
                </p>
              </div>
              {errors.password && (
                <div className="text-red-600">{errors.password.message}</div>
              )}
            </div>

            <div className=" flex flex-col  md:w-1/2 w-[90%] mx-auto mt-4 md:mt-0">
              <label
                htmlFor="confirmpassword"
                className={`text-sm sm:text-md md:text-lg   transition-transform transform  ${
                  focused[3]
                    ? "-translate-y-2 scale-110 md:scale-105"
                    : "translate-y-0 "
                } duration-300 ${
                  focused[3] ? "text-gray-700" : "text-gray-400"
                }`}
              >
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  {...register("confirmpassword", {
                    required: true,
                    maxLength: 20,
                    validate: (value) =>
                      value === watch("password") || "Passwords don't match",
                  })}
                  type={passwordEyeBtn2 ? "password" : "text"}
                  id="confirmpassword"
                  placeholder="Enter Password again"
                  className="border-2 rounded-lg w-full 
               py-[2%]  focus:border-[#051939] pl-2 outline-none text-gray-500 focus:text-gray-700"
                  onFocus={() => handleFocus(3)}
                  onBlur={() => handleBlur(3)}
                />
                <p
                  onClick={() => setPasswordEyeBtn2(!passwordEyeBtn2)}
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                >
                  {passwordEyeBtn2 ? <PiEyeClosed /> : <PiEye />}
                </p>
              </div>
              {errors.confirmpassword && (
                <div className="text-red-600">
                  {errors.confirmpassword.message}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2 mt-0 md:mt-6 text-center md:text-left">
            <div className="flex flex-col md:w-1/2 w-[90%] mx-auto mt-4 md:mt-0">
              <label
                htmlFor="address"
                className={`text-sm sm:text-md md:text-lg   transition-transform transform  ${
                  focused[4]
                    ? "-translate-y-2 scale-110 md:scale-105"
                    : "translate-y-0 "
                } duration-300 ${
                  focused[4] ? "text-gray-700" : "text-gray-400"
                }`}
              >
                Address
              </label>
              <input
                {...register("address")}
                type="text"
                id="address"
                placeholder="Your Address"
                className="border-2 rounded-lg 
               py-[2%]  focus:border-[#051939] pl-2 outline-none text-gray-500 focus:text-gray-700"
                onFocus={() => handleFocus(4)}
                onBlur={() => handleBlur(4)}
              />
            </div>
            <div className="flex flex-col  md:w-1/2 w-[90%] mx-auto mt-4 md:mt-0">
              <label
                htmlFor="position"
                className={`text-sm sm:text-md md:text-lg   transition-transform transform  ${
                  focused[5]
                    ? "-translate-y-2 scale-110 md:scale-105"
                    : "translate-y-0 "
                } duration-300 ${
                  focused[5] ? "text-gray-700" : "text-gray-400"
                }`}
              >
                Position
              </label>
              <select
                {...register("position")}
                id="position"
                className="border-2 rounded-lg py-[2%] focus:border-[#051939] pl-2 outline-none text-gray-500 focus:text-gray-700"
                onFocus={() => handleFocus(5)}
                onBlur={() => handleBlur(5)}
              >
                <option value="user">User</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2 mt-0 md:mt-6 text-center md:text-left">
            <div className="flex flex-col  md:w-1/2 w-[90%] mx-auto mt-4 md:mt-0">
              <label
                htmlFor="position"
                className={`text-sm sm:text-md md:text-lg   transition-transform transform  ${
                  focused[6]
                    ? "-translate-y-2 scale-110 md:scale-105"
                    : "translate-y-0 "
                } duration-300 ${
                  focused[6] ? "text-gray-700" : "text-gray-400"
                }`}
              >
                Gender
              </label>
              <select
                {...register("gender")}
                id="gender"
                className="border-2 rounded-lg py-[2%] focus:border-[#051939] pl-2 outline-none text-gray-500 focus:text-gray-700"
                onFocus={() => handleFocus(6)}
                onBlur={() => handleBlur(6)}
              >
                <option value="male">Male</option>
                <option value="teacher">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="flex flex-col  md:w-1/2 w-[90%] mx-auto mt-4 md:mt-0">
              <label
                htmlFor="position"
                className={`text-sm sm:text-md md:text-lg   transition-transform transform  ${
                  focused[7]
                    ? "-translate-y-2 scale-110 md:scale-105"
                    : "translate-y-0 "
                } duration-300 ${
                  focused[7] ? "text-gray-700" : "text-gray-400"
                }`}
              >
                Age
              </label>
              <input
                {...register("age")}
                type="number"
                inputMode="numeric"
                onFocus={() => handleFocus(7)}
                onBlur={() => handleBlur(7)}
                className="border-2 rounded-lg py-[2%] focus:border-[#051939] pl-2 outline-none text-gray-500 focus:text-gray-700"
              />
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="text-sm sm:text-md md:text-md">
              <span className="mr-1">Already have an account?</span>
              <a className="text-blue-500" href="/login">
                Click here!{" "}
              </a>
            </div>
            <button type="submit" className="mt-[5%] md:mt-[3%] ">
              <BtnPrimary name={"CREATE"} />
            </button>
          </div>
        </form>
        <div>
          <div className="my-6 w-[80%] border-1 mx-auto">
            <hr />
          </div>
          <div className="my-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 text-center">
            <p>Or sign in with-</p>
          </div>

          <div className="flex gap-4 justify-center">
            <div className="text-2xl md:text-4xl">
              <BsGoogle />
            </div>
            <div className="text-2xl md:text-4xl">
              <BsFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

