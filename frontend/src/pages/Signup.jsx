

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/userAction";
import { nanoid } from "@reduxjs/toolkit";



function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { reset, handleSubmit, register } = useForm();

    const signupHandler = (user) => {
    user.id = nanoid();

    dispatch(asyncregisteruser(user));

    // get previous users
    const existingUsers =
        JSON.parse(localStorage.getItem("users")) || [];

    // add new user
    existingUsers.push(user);

    // save updated array
    localStorage.setItem("users", JSON.stringify(existingUsers));

    navigate("/login");
    reset();
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(signupHandler)} className="space-y-5">
          
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              {...register("fullname")}
              required
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
                {...register("password")}
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;