import Image from 'next/image'
import React from 'react'
import linktifyLogoBlck from '@/assets/Linktify Logo alt.png'
export default function NavBarDes() {
    return (
        <div className='grid grid-cols-[1fr,4fr,2fr] pt-[2em] text-[14px] pl-[2em] items-center content-center max-w-[1440px] m-auto'>
            <div><Image src={linktifyLogoBlck} width={100} /></div>
            <div className='justify-self-center'>
                <ul className='flex gap-8 font-bold uppercase '>
                    <li>Explore</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className='flex gap-5 content-center items-center justify-self-end mr-[2em] font-bold uppercase'>
                <span className='py-3 px-6'>Login</span>
                <span className='bg-black text-white py-3 px-6 rounded-[80px]'>Sign Up</span>
            </div>

        </div>
    )
}
