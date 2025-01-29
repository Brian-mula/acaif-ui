"use client";

import { login } from "@/lib/state/authentication/auth";
import { AppDispatch, RootState } from "@/lib/state/store";
import { Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state:RootState) => state.auth.loading);

    useEffect(() => {
        if(!email.includes('@')){
            setIsEmailError(true);
        }else{
            setIsEmailError(false);
        }

        if(password.length < 3){
            setIsPasswordError(true);
        }else{
            setIsPasswordError(false);
        }
    }, [email,password]);

    const handleLogin = async() => {
        if(isEmailError || isPasswordError){
            return;
        }
        const res = await dispatch(login({email, password}));      
        console.log(res);
        if(res.type === 'auth/login/fulfilled'){
            window.location.href = '/';
        }

    }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="py-3 text-lg font-semibold">Provide youre credential to login</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="email"
              autoComplete="false"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {isEmailError && <p className="text-red-500 text-xs italic">Please enter a valid email</p>}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="password"
              placeholder="******"
              autoComplete="false"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {isPasswordError && <p className="text-red-500 text-xs italic">Password must be more than 3 characters</p>}
          </div>
          <div className="flex items-center justify-center w-full">
            {loading === 'pending' ? <div>
                <Sun size={20} className="animate-spin" />
            </div> : <button
              className="bg-primarycustome hover:bg-primarycustome/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>}
            {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2025 mulati Brian. All rights reserved.
        </p>
      </div>
    </div>
  );
}
