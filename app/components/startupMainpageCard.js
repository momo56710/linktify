import Image from 'next/image'
import React from 'react'

export default function StartupMainpageCard({ img, title, disc }) {
    return (
        <div className='flex max-md:flex-col justify-center items-center gap-4 m-auto max-w-[1440px] max-md:bg-[#E6E3F2] max-md:p-5 rounded-[20px]'>

            <img src={img.src}
                className='rounded-[20px] max-md:w-[80vw] md:w-[50%]' />

            <div className='md:w-[70%] px-5'>
                <div className=' max-md:w-[75vw] md:w-[70%] max-xl:w-[80%]'>
                    <p className='text-[1.5em] md:text-[2em]'>{title}</p>
                    <p className='mt-[1em] max-xl:text-[14px] text-bold max-xl:leading-7 mb-[2em] text-[#858694]'>{disc}</p>
                    <span className='bg-black text-white py-3 px-6 rounded-[10px] shadow-2xl'>Fund Now</span>
                </div>
            </div>



        </div>
    )
}
