import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {


  const navigate =useNavigate();

  const handleSignOut =()=>{
    signOut(auth).then(() => {
  navigate("/");
}).catch((error) => {
  navigate("/error");
  console.log(error);
  
});
  }
  return (
    <div className="absolute z-10 w-full flex justify-between">
      <img
      className="w-50 px-8 py-4 relative "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex flex-wrap flex-col m-5">
        <img className="w-30 px-8 py-4 relative " src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt='usericon'></img>
        <button className=" bg-red-800 text-white font-bold border-r-4 "onClick={handleSignOut}>Sign Out</button>
      </div>
      
    </div>
  );
};

export default Header;
