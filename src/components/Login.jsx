import { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";
const Login = () => {
  const dispatch = useDispatch();
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
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //Signin/Signup

    if (!isSignInForm) {
      //Signup Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
    
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
          // ..
        });
    } else {
      //Signin Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    }
  };
  return (
    <div className="relative h-screen w-full">
      <Header />

      {/* Background Image */}
      <img
        className="w-full h-screen object-cover"
        src={BG_URL}
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
          className="w-full py-3 my-2 cursor-pointer hover:underline"
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
