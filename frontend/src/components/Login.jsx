import React, { useState } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {styles} from "../styles/styles" 
import { Link } from 'react-router-dom';
const Login = () => {

 
   

  // states
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [visible,setVisible]=useState(false)

  return (
    <div className="min-h-screen flex flex-col justify-center py-10 sm:px-6 lg:px-8">
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md " >
            <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 mb-8">
              Login to your account
            </h2>
            </div>
          <form className="space-y-6" >
            {/* Email fields */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                  Email address
                </label>
                <div className="mt-1">
                  <input type="email" 
                  name="email" 
                  autoComplete='email' 
                  required value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                  className={`apperance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm  `}/>
                </div>
            </div>

            {/* Password fields */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input type={visible?"text":"password"} 
                  name="password" 
                  autoComplete='current-password' 
                  required value={password} 
                  onChange={(e)=>setPassword(e.target.value)}
                  className={`apperance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}/>
                  {visible?
                  //opened eyes icon
                  <AiOutlineEye className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={()=>setVisible(false)}
                  >

                  </AiOutlineEye>:
                  //close eyes icon
                  <AiOutlineEyeInvisible className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={()=>setVisible(true)}
                  >
                  </AiOutlineEyeInvisible>}
                </div>          
            </div>

            {/* submit button */}
            <div className={`${styles.noramlFlex} justify-between`}>
              {/* remember me */}
              <div className={`${styles.noramlFlex}`} >
                <input type="checkbox" name="remember-me" id="remember-me"
                className={`h-4 yellow-500 focus:ring-yellow-500 border-gray-500 rounded`} />
                <label htmlFor="" className="ml-2 block text-sm text-gray-900"> Remember me</label>
              </div>
              {/* forgot passwor */} 
              <div className="text-sm">
                <a href=".forgot-password"
                className="font-medium text-yellow-600 hover:text-yellow-400 duration-300">Forgot password?</a></div>  
            </div>
            <div>
              <button type="submit" 
              className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 '>
                submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h5>not have any account?</h5>
              <Link to="/sign-up" className='text-yellow-600 pl-2'>
                Sign up
              </Link>
            </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Login;
