import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
export default function StartupMainpageCard({ img, title, disc }) {
    return (
        <div className='flex max-md:flex-col justify-around items-center gap-10 m-auto max-w-[1440px] w-[90vw] max-md:bg-[#E6E3F2]  max-md:py-10 rounded-[20px] md:h-[20em]'>
            <div className='h-full flex-1'><img src={img}
                className='rounded-[20px] max-md:w-[80vw] ml-auto h-full' /></div>


            <div className='px-5 flex-1'>
                <div className=' max-md:w-[75vw] max-xl:w-[80%]'>
                    <p className='text-[1.5em] md:text-[2em]'>{title}</p>
                    <p className='mt-[1em] max-xl:text-[14px] text-bold max-xl:leading-7 mb-[2em] text-[#858694]'>{disc}</p>
                    <Link href={`/projects/${title.replaceAll(' ', '-').toLowerCase()}`} className='bg-[#001623] text-white py-3 px-6 rounded-[10px] shadow-2xl'>Fund Now</Link >
                </div>
            </div>



        </div>
    )
}
