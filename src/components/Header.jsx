import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user =useSelector(store=>store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

   useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}));
    navigate("/browse")
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/")
  }
});
return ()=> unsubscribe();
},[])
  return (
    <div className="absolute z-10 w-full flex justify-between">
      <img
        className="w-50 px-8 py-4 relative "
        src={LOGO}
        alt="logo"
      />
      {user &&
      <div className="flex flex-wrap flex-col m-5">
        <h1>Welcome {user?.displayName}</h1>
        <img
          className="w-30 px-8 py-4 relative "
          src={USER_AVATAR}
          alt="usericon"
        ></img>
        <button
          className=" bg-red-800 text-white font-bold border-r-4 cursor-pointer"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>

      }
      
    </div>
  );
};

export default Header;
