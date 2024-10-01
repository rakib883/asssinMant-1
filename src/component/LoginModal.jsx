import React, { useState } from 'react';
import { LuUserCircle2 } from "react-icons/lu";
import Title from '../ui/Title';
import { RxCross2 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { FiUserPlus } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/auth';
import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from '../redux/slice';


const Modal = () => {
  //  redux area start
  const dispatch = useDispatch()
  const userInfoData = useSelector((item)=>item?.userDetils?.user?.user?.photoURL) 

  


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ''; 
  };
  const [user,setUser] = useState("")
  const googleHandler = () => { 
  const auth = getAuth(app); 
  const provider = new GoogleAuthProvider(); 

  signInWithPopup(auth, provider) 
    .then((result) => {
      setUser(result?.user)
      closeModal()
      dispatch(userInfo({user:result?.user}))
    })
    .catch((error) => {
      console.log(error);
    });
};

const [dashBord,setDashBord] = useState(false)
  return (
    <div className="">
      <button  className="ed">
            {
             user ?
             (
               <div className="item relative">
                  <div onClick={()=>setDashBord(true)}  className="image  rounded-full flex items-center gap-4 border px-2 py-2">
                     <div className="icon">
                       <HiBars3 className=" text-xl" />
                     </div>
                     <div className="image w-[25px] h-[25px]">
                         <img className=" rounded-full" src={userInfoData} alt="" />
                     </div>
                  </div>
                  {
                    dashBord &&
                    <div className="dashBord absolute right-0 top-12 w-[150px] bg-white shadow-md rounded-xl ">
                        <div className="item  flex flex-col    ">
                           <Link className=" text-start border-b-[1px] py-3 px-4 text-[14px] font-semibold">Dashbord</Link>
                           <Link className=" text-start py-3 px-4 text-[14px] font-semibold">Log out</Link>
                        </div>
                    </div>
                  }
               </div>
             ):(
            
            <div onClick={openModal} className="logo hover:shadow-md cursor-pointer border flex gap-2 items-center rounded-full py-1 px-2 text-[#22c55e] mx-2">
                  <div className="user py-2.5 lg:py-1">
                     <LuUserCircle2 className=" text-xl" />
                  </div>
                  <div className="login">
                     <p className="font-medium">Login</p>
                  </div>
               </div>)
               }
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
          <div className="bg-[#ffffff] p-4 rounded-lg shadow-lg w-[370px]">
            <div className="mx-4">
              <div onClick={closeModal} className="cross flex float-end cursor-pointer">
                <RxCross2 />
              </div>
              <div className="title text-center pt-6">
                 <Title className="text-[24px] text-[#524948]" title="Welcome to Set11"/>
                 <p className="text-[14px] text-[#8fbfc2]">Log in or create a new account</p>
              </div>
              <div className="from-area mt-4 flex flex-col gap-4">
                 <div className="email">
                    <div className="title my-[2px]">
                       <Title className="text-[14px]" title="Email Address" />
                    </div>
                    <div className="input w-full">
                      <input className=" shadow-xs border w-full outline-none rounded-md py-2.5 px-2 focus-within:border-black focus-within:border-[1px]" type="text" placeholder="projectmayhem@fc.com" />
                    </div>
                 </div>
                 <div className="password">
                    <div className="title my-[2px]">
                       <Title className="text-[14px]" title="Password" />
                    </div>
                    <div className="input w-full">
                      <input className=" shadow-xs border w-full outline-none rounded-md py-2.5 px-2 focus-within:border-black focus-within:border-[1px]" type="Password" placeholder="•••••••" />
                    </div>
                 </div>
                 <div className="login">
                     <div className="input group w-full border border-[#22c55e] text-white bg-green-500 hover:bg-green-600 duration-300 hover:text-white rounded-lg flex items-center px-4">
                        <MdLogin  className="text-xl text-white group-hover:text-white text-[#22c55e]" />
                        <button className=" shadow-xs border-none font-medium  w-full outline-none rounded-md py-3 px-2 focus-within:border-black focus-within:border-[1px]">Login</button>
                    </div>
                 </div>
                 <div className="email">
                    <div className="input group w-full border border-[#22c55e] hover:bg-green-600 hover:text-white rounded-lg flex items-center px-4">
                        <FiUserPlus className="text-xl group-hover:text-white text-[#22c55e]" />
                        <button className=" shadow-xs border-none text-[#22c55e] hover:text-white text-base font-medium  w-full outline-none rounded-md py-3 px-2 focus-within:border-black focus-within:border-[1px]">Sign up</button>
                    </div>
                 </div>
                 <div className=" my-4">
                    <div className=" h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"></div>
                 </div>
                 <div className="email pb-4">
                    <div onClick={googleHandler} className="input w-full border hover:bg-[#A7F13A] duration-300 border-[#22c55e] rounded-lg flex items-center px-4">
                        <FcGoogle className="text-xl" />
                        <button className=" font-medium shadow-xs  w-full outline-none border-none rounded-md py-3.5 px-2 focus-within:border-black focus-within:border-[1px]">Continue with google</button>
                    </div>
                 </div>
              </div>
          </div>
         </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
