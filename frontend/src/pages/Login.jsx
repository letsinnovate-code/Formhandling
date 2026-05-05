
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/userActions";


const Login = () => {
    const { reset, handleSubmit, register } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const loginHandler = (user) => {
        dispatch(asyncloginuser(user));
        reset();
        navigate("/");

    }

    return (
        <div className="flex w-full h-screen justify-center items-center gap-4 bg-gray-400">
            <form className="flex flex-col gap-6 "   onSubmit={handleSubmit(loginHandler)}>


            <input className="border-b" {...register("username")}
            required
             type="text"
              placeholder="Username" />


            <input className="border-b" {...register("password")}
            required
             type="password"
              placeholder="Password" />



            <button className="bg-blue-400 px-4 py-2  cursor-pointer hover:bg-blue-600  " type="submit">Login</button>
            <span className="text-sm text-gray-700">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a></span>
        </form>
        </div>
    )
}

export default Login