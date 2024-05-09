'use client'

import { usePathname } from 'next/navigation'
import React, { useRef, useEffect, useState } from 'react'
import { fetchDataFromFireStore } from "@/utils/startups";
import axios from 'axios';
export default function Page() {
    const [startups, setStartups] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [barWidth, setBarWidth] = useState(0)
    const progress = useRef();
    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFireStore()
            setStartups(data)
            setIsLoading(false)
        }
        fetchData()
        progress.current ? setBarWidth(progress.current.offsetWidth) : setBarWidth(0)
    }, [progress.current])
    console.log(startups)
    if (isLoading) { return <div>loading...</div> }
    //getting startup
    let startup
    var pathName = usePathname();
    pathName = pathName.replace('/projects/', '')
    startups.map(e => (e.title.replaceAll(' ', '-').toLowerCase() == pathName ? startup = e : ''))
    // getting funding percentage
    const percentage = Math.trunc(Number(startup.funded) * 100 / Number(startup.goal))

    // comapring percentage to progress bar

    const slickPayTest = () => {
        axios.post('https://devapi.slick-pay.com/api/v2/users/transfers/commission', { "amount": 1000, }, {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer 1130|wKJymsDNwSpp6zebXH7KeYfVnmPREXuLUk0r6bvdbe059959`
            }
        })
            .then((result) => {
                let response = result.data;

            }).catch((error) => {

            });
    }


    // caluculating remaining days
    const targetDate = new Date(startup.deadline).toISOString();

    const now = new Date().getTime()
    const targetTime = new Date(targetDate).getTime()
    const timeRemaining = targetTime - now
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) + 1;
    return (

        <div className='max-w-[1600px] m-auto my-10 max-md:text-[12px] md:p-10'>
            <div className='bg-white flex flex-col divide-y  md:p-10 max-md:pb-6 mt-5 md:rounded-2xl'>
                <div className='flex gap-10 max-md:flex-col mb-8'>
                    <img src={startup.logo} className='md:w-[50%] max-md:m-auto' />
                    <div className='md:flex-1 my-auto'>
                        <div className='m-auto max-md:mx-5'>
                            <p className='text-center mb-4 font-bold text-[2em] max-md:text-[1.5em]'>Stats</p>
                            <div className="h-5 relative max-w-[100%] rounded-[5px] overflow-hidden mr-10">
                                <div ref={progress} className="w-full h-full bg-gray-200 absolute"></div>
                                <div class={`h-full bg-[#2271B9] rounded-[5px] relative`} style={{ width: percentage > 100 ? barWidth : barWidth * percentage / 100 }}></div>
                            </div>
                            <p className='mb-4 text-[1.5em]'> <span className='font-bold'>{percentage}%</span> of the goal</p>
                            <p className='text-[1.5em] font-bold text-[#2271B9]'>{startup.funded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}DZD</p>
                            <p>pledged of {startup.goal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}DZD goal</p>
                            <p className='mt-5 text-[1.5em] font-bold'>{startup.backers.length}</p>
                            <p>backers</p>
                            <p className='mt-5 text-[1.5em] font-bold'>{days}</p>
                            <p>days to go</p>
                            <div className='flex gap-4 justify-center items-center mt-5 max-md:flex-col'>
                                <p className='bg-[#000218] text-white px-5 py-3 font-bold rounded-full uppercase max-md:w-full text-center' onClick={() => { slickPayTest() }}>Back this project</p>
                                <p className='bg-[#E7EBF2] text-[#000218] px-5 py-3 font-bold rounded-full uppercase max-md:w-full text-center'>share</p>
                            </div>
                        </div>

                    </div>

                </div>
             
            </div>
            <p className='text-center text-[6em] my-10 font-bold text-[#001623]'>our story</p>
            <div className='flex flex-col gap-[4em]  max-md:items-center'>
                {
                    startup.stories.map((e, i) => (
                        <div key={i} className='flex max-md:flex-col max-md:w-[50em] gap-10 p-10 rounded-2xl bg-white md:divide-x max-md:divide-y max-md:items-center'>
                            <img src={e.cover} className='w-[300px] rounded-2xl aspect-square' />
                            <div className='p-10 grid'>
                                <p className='font-bold text-[2em]'>{e.title}</p>
                                <p>{e.disc}</p>
                            </div>
                        </div>)
                    )
                }
            </div>



        </div>
    )
}
