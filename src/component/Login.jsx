// import React,{useState} from 'react'
// import {Link,useNavigate} from "react-router-dom"
// import {login as authLogin} from "../store/AuthSlice"
// import {Button,Input,Logo} from "./index"
// import { useDispatch } from 'react-redux'
// import authService from "../appwrite/auth"
// import {useForm }from "react-hook-form"
// function Login() {
//     const navigate =  useNavigate()
//     const dispatch = useDispatch()
//     const {register,handleSubmit} = useForm()
//     const [error,setError] = useState("")

//     const login = async (data)=>{
//         setError("")
//         try {

//           const session =  await authService.login(data)
//           if (session) {

//             const userData = await authService.getCurrentUser()
//             if (userData) dispatch(authLogin(userData))
//                 navigate("/")
//           }

//         } catch (error) {
//             setError(error.message)
//         }
//     }

//   return (
// //      <div className="flex items-center justify-center w-full">
// //        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border-black/10`}>
// //          <div className="mb-2 flex justify-center">
// //             <span className="inline-block w-full max-w-[100px]">

// //                    <Logo width="100%"/> 
// //             </span>
// //          </div>
// //          <h2 className="text-center text-2xl 
// //          font-bold leading-tight">Sign in to your account,Enjoy</h2>
// //          <p className="mt-2 text-center text-base text-black/60">
// //          Don&apos;t have any account ?&nbsp;
// //          <Link
// //          to = "/signup"
// //          className="font-medium text-primary transition-all 
// //          duration-200 hover:underline"> Sign-Up
         
// //          </Link>
// //          </p>

// //          {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
// //          <form
// //          onSubmit={handleSubmit(login)} className='mt-8'>

// // <div className='space-y-5'>

// //     <Input 
// //     label ='Email :'
// //     placeholder = "Enter your email here"
// //     type = "email"
// //     {...register("email",{
// //         required :true,
// //         validate : {
// //             matchPatern :(value)=> /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value) ||
// //         "Invalid email address",
// //         }
// //     })}
// //     />

// //     <Input
// //     label = "Password"
// //     placeholder = "Enter your pass"
// //     type = "password"
// //     {...register("password",{
// //         required :true,
// //         validate : {
// //            matchPatern : (value)=> /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value) ||
// //            "Invalid PASSWORD"
// //         }
        
// //     })}
// //     />
// //     <Button 
// //     type='submit'
// //     className='w-full'>
// //     Sign in</Button>

  
// // </div>
// //          </form>
// //          </div>
// //          </div>
// //   )
// // }

// // export default Login


//  <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-400 via-pink-300 to-yellow-200">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10 border border-gray-200">
//         <div className="flex justify-center mb-6">
//           <Logo width="100px" />
//         </div>
//         <h2 className="text-center text-2xl font-bold text-gray-800">
//           Sign in to your account
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <Link
//             to="/signup"
//             className="text-purple-600 font-medium hover:underline"
//           >
//             Sign Up
//           </Link>
//         </p>

//         {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

//         <form onSubmit={handleSubmit(login)} className="mt-6 space-y-5">
//           <Input
//             label="Email"
//             placeholder="Enter your email"
//             type="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
//                 message: "Invalid email address",
//               },
//             })}
//           />

//           <Input
//             label="Password"
//             placeholder="Enter your password"
//             type="password"
//             {...register("password", {
//               required: "Password is required",
//             })}
//           />

//           <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg py-2 transition">
//             Sign In
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login as authLogin } from "../store/AuthSlice";
import authService from "../appwrite/auth";
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-400 via-pink-300 to-yellow-200 font-sans">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20">
          <div className="flex justify-center mb-6">
              <Logo width="80px" />
          </div>

          <h2 className="text-center text-3xl font-extrabold text-white drop-shadow-lg mb-2">
              Sign in
          </h2>
          <p className="text-center text-white/80 mb-6">
              Don’t have an account?&nbsp;
              <Link to="/signup" className="font-semibold text-white underline hover:text-yellow-200 transition-all duration-300">
                  Sign Up
              </Link>
          </p>

       {error && <p className='text-red-500 text-center mb-4'>{error}</p>}

       <form onSubmit={handleSubmit(login)} className="space-y-5">
           <Input
               label="Email"
               placeholder="Enter your email"
               type="email"
               {...register("email", {
                   required: true,
                      validate: {
                       matchPatern: value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value) 
                       || "Invalid email address"
                   }
               })}
                      className="bg-white/50 backdrop-blur-sm placeholder-white/60 text-black rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-purple-300 focus:outline-none"
         />
        
         <Input
             label="Password"
             placeholder="Enter your password"
             type="password"
             {...register("password", { required: true })}
             className="bg-white/50 backdrop-blur-sm placeholder-white/60 text-black rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-purple-300 focus:outline-none"
         />
        
         <Button
             type="submit"
             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg"
         >
                         Sign In
                     </Button>
                 </form>
             </div>
         </div>
           );
          }
        
        export default Login;
          