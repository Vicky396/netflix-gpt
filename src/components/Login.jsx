import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setIsSignInForm]= useState(true);
  const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="relative h-screen w-full">
      <Header />

      {/* Background Image */}
      <img
        className="w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
        alt="bg-image"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Login Form */}
      <form className="absolute w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 top-1/4 left-1/2 transform -translate-x-1/2 bg-black opacity-80 p-8 rounded-lg  text-white space-y-4">
        <h2 className="text-2xl font-bold">{isSignInForm ?"Sign In":"Sign Up"}</h2>
        {isSignInForm &&
        <input
          className="w-full p-3 my-2 bg-gray-700 rounded"
          type="text"
          placeholder="Full name"
        />
        }
        
        <input
          className="w-full p-3 my-2 bg-gray-700 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="w-full p-3 my-2  bg-gray-700 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="w-full bg-red-600 py-3 my-2 rounded font-semibold hover:bg-red-700 transition">
          {isSignInForm ?"Sign In":"Sign Up"}
        </button>
        <p className="w-full py-3 my-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ?"New to Netflix? Sign up now.":"Already registered? Sign In now."}</p>
      </form>
    </div>
  );
};

export default Login;
