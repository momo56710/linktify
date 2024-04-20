import Image from 'next/image'
import React from 'react'

export default function StatsCard({ icon, number, disc }) {

    return (
        <div className='flex flex-col justify-center items-center font-bold gap-2'>
            <Image src={icon} height={50} alt='dollar sign icon' />
            <p className=' bg-gradient-to-r from-[#1F73D4] via-[#7C39D4] to-[#1F73D4] bg-clip-text text-transparent'>{number}</p>
            <p className='text-[#858694]'>{disc}</p>
        </div>
    )
}
