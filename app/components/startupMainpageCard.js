import Image from 'next/image'
import React from 'react'

export default function StartupMainpageCard({ img, title, disc, link }) {
    return (
        <div className='flex justify-center items-center gap-4 m-auto max-w-[1440px]'>
            <div className='relative'>
                <Image src={img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className='rounded-[20px]' />
            </div>
            <div className='w-[70%] px-5'>
                <div className='max-xl:w-[80%] w-[70%]'>
                    <p className='text-[2em]'>{title}</p>
                    <p className='mt-[1em] max-xl:text-[14px] text-bold max-xl:leading-7 mb-[2em] text-[#858694]'>{disc}</p>
                    <span className='bg-black text-white py-3 px-6 rounded-[10px] shadow-2xl'>Fund Now</span>
                </div>
            </div>



        </div>
    )
}
