import { useForm } from "react-hook-form";
import BtnPrimary from "../Button/BtnPrimary";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { useContext, useState } from "react";
import './login.css'
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const { user } = useContext(AuthContext)
  const [focused, setFocused] = useState([false, false]);
  const [passwordEyeBtn, setPasswordEyeBtn] = useState(true);
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
    console.log(data);
    reset();
  };
  // react hook form
  return (
    <div className="pt-[5%]">
      <div className="md:w-[50%] w-[90%] mx-auto border-2 p-8  rounded-lg">
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 text-center my-[2%]">
          Log In
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col text-center md:text-left ">
            <div className="flex flex-col    mt-4 md:mt-0">
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
                Email
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
            <div className=" flex flex-col   mt-4 md:mt-3">
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
                Password
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
          </div>
          <div className="flex justify-between items-center ">
            <div className="text-sm sm:text-md md:text-md">
              <span className="mr-1 ">New user?</span>
              <a className="text-blue-500 " href="/register">
                register!{" "}
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

export default Login;
