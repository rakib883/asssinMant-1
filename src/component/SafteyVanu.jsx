import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';
import { FaXmark } from "react-icons/fa6";

const SafteyVanu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openSafty = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden'; 
    };
    const closePopUp =()=>{
        setIsOpen(false);
        document.body.style.overflow = ''; 
    }
    return (
        <div>
            <div className="main z-50">
                <div onClick={openSafty} className="item cursor-pointer">
                  <Link className=" underline text-[#3566eb]">Show more</Link>
                </div>
                <div className="main">
                    {isOpen ? 
                        <div className="fixed inset-0  items-center bg-black bg-opacity-50 z-50">
                            <div className="content max-w-2xl bg-white mx-auto my-14 rounded-lg p-6">
                                <div className="title flex justify-between items-center">
                                    <div className="title">
                                        <Title className=" text-[20px]" title="Safety & Venue" />
                                    </div>
                                    <div onClick={closePopUp} className="cross cursor-pointer">
                                      <FaXmark className="text-xl" />
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="text-[16px] text-[#575f6d] my-4">Details you might want to know about the indoor cricket coaching venue.</p>
                                </div>
                                <div className="title">
                                    <Title className="text-[16px]" title="Safety considerations"/>
                                </div>
                                <div className="year flex gap-4 items-center my-4">
                                    <p>✂️</p>
                                    <p className="text-[16px]">Not suitable for very young children (under 5 years old)</p>
                                </div>
                                <div className="title">
                                    <Title className="text-[16px]" title="Safety devices"/>
                                </div>
                                <div className="year flex gap-4 items-center mt-4">
                                    <p>📹</p>
                                    <p className="text-[16px]">Security cameras in common areas</p>
                                </div>
                                <div className="year flex gap-4 items-center my-2">
                                    <p>🔥</p>
                                    <p className="text-[16px]">Fire alarms installed</p>
                                </div>
                                <div className="year flex gap-4 items-center my-2">
                                    <p>🧯</p>
                                    <p className="text-[16px]">Fire extinguishers available</p>
                                </div>
                                <div className="title my-4">
                                    <Title className="text-[16px]" title="While you’re here"/>
                                </div>
                                <div className="year flex gap-4 items-center my-2">
                                    <p>🛗</p>
                                    <p className="text-[16px]">Access via stairs; lift available upon request</p>
                                </div>
                            </div>
                        </div> 
                    : null}
                </div>
            </div>
        </div>
    );
};

export default SafteyVanu;
