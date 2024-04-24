import React from 'react'

export default function TestominialCard({ testimonial, writer }) {
    return (
        <div className='max-w-[25em] bg-white rounded-[40px] shadow-2xl p-10 flex flex-col divide-y justify-center  '>
            <p className='pb-5'>{testimonial}</p>
            <div className='flex pt-5 items-center gap-5'>
                <img src={writer.profilePicture.src} className='w-[80px] max-md:w-[40px] rounded-full aspect-square' />
                <div>
                    <p className='text-[2em] font-bold'>{writer.userName}</p>
                    <p>{writer.profession}</p>
                </div>

            </div>
        </div>
    )
}
