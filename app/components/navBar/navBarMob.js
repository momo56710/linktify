'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import linktifyLogoBlck from '@/assets/Linktify Logo alt.png'
export default function NavBarMob() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    if (process.browser) {
        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"
    }

    return (
        <div className='relative bg-[#F7FBFE]'>
            <div className='px-5 pt-5 flex justify-between '>
                <div><Image src={linktifyLogoBlck} width={100} /></div>
                <button onClick={handleClick}
                    className="flex flex-col justify-center items-center">
                    <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                    </span>
                    <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                            'opacity-0' : 'opacity-100'
                        }`} >
                    </span>
                    <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                            '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                        }`} >
                    </span>

                </button>
            </div>
            <div className={`z-[1] absolute transition-all bg-[#F7FBFE] w-[100vw]  duration-500 ease-out ${isOpen ? 'top-[80px]' : 'top-[-400px]'}`}>
                <div className='justify-self-center  px-5 text-[0.8em]'>
                    <ul className='flex flex-col gap-8 font-bold uppercase pb-2'>
                        <li>Explore</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                    <hr />
                    <div className='flex gap-5 pb-5 content-center text-[0.8em] pt-2 items-center justify-self-end mr-[2em] font-bold uppercase'>
                        <span className='bg-black text-white  py-1.5 px-3 rounded-[80px]'>Sign Up</span>
                        <span className='py-3 px-6'>Login</span>

                    </div>
                </div>


            </div>
            <div className={` transition-all w-[100vw] h-[100vh]  left-0 bg-[#00000050] absolute  duration-[500ms] ease-out ${isOpen ? 'top-[10em]' : 'top-[-110vh]'}`}></div>
        </div>
    )
}
