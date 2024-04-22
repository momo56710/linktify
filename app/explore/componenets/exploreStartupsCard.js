import Link from 'next/link'
import React from 'react'

export default function ExploreStartupsCard({ title, logo, disc }) {
  return (
    <div className='flex flex-col mt-10 justify-between max-md:w-[80vw] md:max-w-[25em] max-md:mt-10 p-10 bg-white rounded-[30px] shadow-xl'>
      <div className='flex flex-col'>
        <img className='rounded-[20px]' src={logo.src} />
        <p className='font-bold text-[1.5em] m-3'>{title}</p>
        <p className='m-3 mb-3'>{disc}</p>
      </div>
      <div className='m-3'><Link href={`/projects/${title.replaceAll(' ' , '-').toLowerCase()}`} className='bg-[#001623] text-white p-3 rounded-[10px]'>Learn more</Link></div>
    </div>
  )
}
