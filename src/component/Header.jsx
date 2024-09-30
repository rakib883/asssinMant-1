import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Title from "../ui/Title";
import { Link } from "react-router-dom";
import Modal from "./LoginModal";
const Header = () => {
    const [showHeader,setShowHeader] = useState(false)

    useEffect(()=>{
        const scrolled =()=>{
            if(window.scrollY > 700){
                setShowHeader(true)
            }else{
                setShowHeader(false)
            }
        }

        window.addEventListener("scroll",scrolled)
        return () => {
            window.removeEventListener('scroll', scrolled);
          };
    },[])
  return (
    <div className="content sticky top-0 z-50">
        {
            showHeader ? (
            <div className="main bg-white shadow-lg ">
                <div className="content mx-6 lg:mx-[130px] flex justify-between items-center">
                    <div className="calender">
                        <div className="menu flex gap-6">
                            <Link>Calendar</Link>
                            <Link>Location</Link>
                        </div>
                    </div>
                    <div className="button py-4 flex items-center gap-6 ">
                        <div className="title">
                            <Title className="text-[20px]" title="£59 per session"/> 
                        </div>
                       <div className="">
                           <button className=" w-full text-white py-2 px-4 rounded-lg bg-gradient-to-r from-[#25bb74] to-[#378be2]">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>) :(
            <div className="bg-white border-b-[2px] font-sans ">
                <div className="main-content flex justify-between items-center mx-4 md:mx-10 lg:mx-6 xl:mx-20 lg:mx-10 ">
                    {/* logo area start */}
                    <div className="logo py-3.5 hidden md:block">
                        <div className="image h-[58px] w-auto">
                            <img className="w-full h-full" src="https://i.ibb.co.com/7WwHvQj/set11-logo.png" alt="" />
                        </div>
                    </div>
                    {/* search area start */}
                    <div className="search border w-full md:w-auto  rounded-full   hover:shadow-md duration-300 my-4 ">
                        <div className="menu  flex justify-between items-center ">
                            <div className="title py-3 ">
                                <p className=" md:border-r-[1px] lg:border-r-[1px] px-6 text-[16px] font-medium">Title</p>
                            </div>
                            <div className="title hidden md:block ">
                                <p className="border-r-[1px] px-6 text-[16px] font-medium">Description</p>
                            </div>
                            <div className="item  ">
                                    <div className="title flex items-center  pr-2 ">
                                        <div className="location px-4">
                                          <p className="text-[14px] text-[#6f7782] hidden md:block"> Location</p>
                                         </div>
                                        <div className="icon bg-[#22c55e] p-2 rounded-full">
                                            <IoIosSearch className=" text-white text-xl" />
                                         </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* login area start */}
                    <div className="user">
                      <Modal></Modal>
                    </div>
                </div>
            </div>)   
        }
    </div>    
  )
}

export default Header