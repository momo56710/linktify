'use client'
import { startups } from '@/objects/startups';
import { usePathname } from 'next/navigation'
import React, { useRef, useEffect, useState } from 'react'
export default function Page() {
    //getting startup
    let startup
    var pathName = usePathname();
    pathName = pathName.replace('/projects/', '')
    startups.map(e => (e.title.replaceAll(' ', '-').toLowerCase() == pathName ? startup = e : ''))
    // getting funding percentage
    const percentage = Math.trunc(Number(startup.funded) * 100 / Number(startup.goal))
    console.log(percentage)
    // comapring percentage to progress bar
    const [barWidth, setBarWidth] = useState(0)

    const progress = useRef();
    useEffect(() => {
        progress.current ? setBarWidth(progress.current.offsetWidth) : setBarWidth(0)
    }, [progress.current]);
    // caluculating remaining days
    const targetDate = new Date(startup.deadline).toISOString();
    console.log(targetDate)
    const now = new Date().getTime()
    const targetTime = new Date(targetDate).getTime()
    const timeRemaining = targetTime - now
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) + 1;
    console.log(days)
    return (

        <div className='max-w-[1600px] m-auto my-10 '>
            <div className='relative h-[30em] overflow-hidden bg-[#00000090]'>
                <img src={startup.logo.src} className='w-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-md:w-[80vw] max-md:m-auto absolute z-[-1]' />
            </div>
            <div className='flex gap-10 max-md:flex-col bg-white max-md:rounded-[30px]'>
                <img src={startup.logo.src} className='md:w-[50%] max-md:w-[80vw] max-md:m-auto' />
                <div className='md:flex-1 my-auto'>
                    <div className='m-auto max-md:w-[80vw]'>
                        <p className='text-center mb-4 font-bold text-[2em] max-md:text-[1.5em]'>Stats</p>
                        <div className="h-5 relative max-w-[100%] rounded-[5px] overflow-hidden mr-10">
                            <div ref={progress} className="w-full h-full bg-gray-200 absolute"></div>
                            <div class={`h-full bg-[#2271B9] rounded-[5px] relative`} style={{ width: percentage > 100 ? barWidth : barWidth * percentage / 100 }}></div>
                        </div>
                        <p className='mb-4 text-[1.5em]'> <span className='font-bold'>{percentage}%</span> of the goal</p>
                        <p className='text-[1.5em] font-bold text-[#2271B9]'>{startup.funded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}DZD</p>
                        <p>pledged of {startup.goal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}DZD goal</p>
                        <p className='mt-5 text-[1.5em] font-bold'>{startup.backers}</p>
                        <p>backers</p>
                        <p className='mt-5 text-[1.5em] font-bold'>{days}</p>
                        <p>days to go</p>
                        <div className='flex gap-4 justify-center items-center mt-5 max-md:flex-col'>
                            <p className='bg-[#000218] text-white px-5 py-3 font-bold rounded-full uppercase max-md:w-full text-center'>Back this project</p>
                            <p className='bg-[#E7EBF2] text-[#000218] px-5 py-3 font-bold rounded-full uppercase max-md:w-full text-center'>share</p>
                        </div>
                    </div>

                </div>
            </div>
            <p className='text-center text-[8em] my-10 font-bold text-[#001623]'>our story</p>
            <div>
                {
                    startup.stories.map((e,i)=>(<div key={i}></div>))
                }
            </div>

        </div>
    )
}
