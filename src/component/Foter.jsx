import Border from "../ui/Border"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const Foter = () => {
  return (
    <div className=" bg-[#f3f4f6]">
       <div className="item lg:mx-20 py-6">
          <div className="item">
              <div className="foter-top flex flex-col md:flex-row gap-8">
                 <div className="supp flex flex-col items-start w-full md:w-[33%]">
                    <div className="item  w-full text-center md:text-center lg:text-start">
                        <div className="title">
                           <p className=" text-[14px] font-semibold">Support</p>
                        </div>
                        <div className="item mt-2">
                           <p className=" text-[14px]  text-[#525268]">Help Centre</p>
                           <p className=" text-[14px]  text-[#525268]">Cancellation Options</p>
                        </div>
                     </div>
                 </div>
                 <div className="hostin flex flex-col items-start w-full   md:w-[33%]">
                        <div className="main  text-center  md:text-center lg:text-start  w-full  ">
                           <div className="title">
                              <p className=" text-[14px] font-semibold">Hosting</p>
                           </div>
                           <div className="item mt-2">
                              <p className=" text-[14px]  text-[#525268]">Host your event</p>
                           </div>
                        </div>   
                 </div>
                 <div className="set flex flex-col items-start w-full  md:w-[33%]">
                     <div className="main text-center md:text-center lg:text-start w-full ">
                        <div className="title">
                           <p className=" text-[14px] font-semibold">SET11</p>
                        </div>
                        <div className="item mt-2">
                           <p className=" text-[14px]  text-[#525268]">Careers</p>
                        </div>
                     </div>   
                 </div>
              </div>
          </div>
          <div className="border my-4 mx-4 lg:mx-0">
             <Border/>
          </div>
          <div className="texr">
              <p className=" text-[12px] mx-4 lg:mx-0  md:text-start text-center">
                  SET11 Ltd Registered office address: Office 6244, 321-323 High Road, Romford, England, RM6 6AX. SET11 is a marketplace platform for players, coaches, organisations, and clubs to schedule events, manage tours, and sell events.
              </p>
          </div>
          <div className="border my-4 mx-4 lg:mx-0">
             <Border/>
          </div>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
             <div className="tezt">
                <p className=" text-[14px]">© 2024 SET11 Ltd. All rights reserved.</p>
             </div>
             <div className="pry flex items-center gap-4 text-[14px]">
                <p>Privacy</p>
                <p>Terms</p>
             </div>
          </div>
          <div className="border my-4 mx-4 lg:mx-0">
             <Border/>
          </div>
          <div className=" flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-4">
             <div className="tezt">
                <p className=" text-[14px]">English (UK) £ GBP</p>
             </div>
             <div className="pry flex items-center gap-4 text-lg text-[#4b5563]">
                <div className="youtube">
                   <FaFacebook className=" hover:text-black cursor-pointer" />
                </div>
                <div className="youtube">
                   <FaTwitter className=" hover:text-black cursor-pointer" />
                </div>
                <div className="youtube">
                   <FaInstagram className=" hover:text-black cursor-pointer" />
                </div>
                <div className="youtube">
                   <FaYoutube className=" hover:text-black cursor-pointer" />
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Foter