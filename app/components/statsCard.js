import Image from 'next/image'
import React from 'react'

export default function StatsCard({ icon, number, disc }) {

    return (
        <div className='flex flex-col justify-center items-center font-bold gap-2'>
            <img src={icon.src} className='max-md:h-[80px] md:h-[100px]' alt='dollar sign icon' />
            <p className='max-md:text-[1.5em] bg-gradient-to-r from-[#1F73D4] via-[#7C39D4] to-[#1F73D4] bg-clip-text text-transparent'>{number}</p>
            <p className='text-[#858694]'>{disc}</p>
        </div>
    )
}
