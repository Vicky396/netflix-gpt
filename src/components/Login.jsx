import { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from 'react-router-dom';
const Login = () => {
  const navigate =useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);
    if(!isSignInForm){
      
      const message = validateForm(email.current.value, password.current.value);
       setErrorMessage(message);
    }
    else{
      const message = validateForm(email.current.value, password.current.value);
       setErrorMessage(message);
    }
    console.log(errorMessage);
    if(errorMessage) return;

    //Signin/Signup

    if(!isSignInForm){
      //Signup Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
     navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" : "+errorMessage)
    // ..
  });

    }
    else{
      //Signin Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
     navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" : "+errorMessage)
  });
    }

  };
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
        <h2 className="text-2xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            ref={name}
            className="w-full p-3 my-2 bg-gray-700 rounded"
            type="text"
            placeholder="Full name"
          />
        )}

        <input
          ref={email}
          className="w-full p-3 my-2 bg-gray-700 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="w-full p-3 my-2  bg-gray-700 rounded"
          type="password"
          placeholder="Password"
        />
        <button
          className="w-full bg-red-600 py-3 my-2 rounded font-semibold hover:bg-red-700 transition"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {errorMessage && (
          <p className="text-red-600 font-semibold">Error:{errorMessage}</p>
        )}

        <p
          className="w-full py-3 my-2 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
