'use client'
import { usePathname } from 'next/navigation'
import React, { useRef, useEffect, useState } from 'react'
import { fetchDataFromFireStore } from "@/utils/startups";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ImCross } from "react-icons/im";
import Popup from 'reactjs-popup';
import { auth, db } from '@/utils/firebase'
import { toast } from 'react-toastify';
import ProgressBar from "@ramonak/react-progress-bar";
import { doc, updateDoc } from 'firebase/firestore';
import { Loader } from '@/app/components/loader';
export default function Page() {
    const router = useRouter()
    var pathName = usePathname();
    const [backingAmount, setBackingAmount] = useState(0)
    const [user, setUser] = useState('')
    const [startups, setStartups] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [Loading, setLoading] = useState(false)
    const [barWidth, setBarWidth] = useState(0)
    const progress = useRef();
    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFireStore()
            setStartups(data)
            setIsLoading(false)
        }
        const unsubscribe = auth.onAuthStateChanged((fetchedUser) => {
            setUser(fetchedUser);
            // Update user state on auth state change
        });
        fetchData()
        progress.current ? setBarWidth(progress.current.offsetWidth) : setBarWidth(0)
    }, [progress.current])

    if (isLoading) { return <div>loading...</div> }
    //getting startup
    let startup

    pathName = pathName.replace('/projects/', '')
    startups.map(e => (e.title.replaceAll(' ', '-').toLowerCase() == pathName ? startup = e : ''))

    // getting funding percentage
    const percentage = Math.trunc(Number(startup.funded) * 100 / Number(startup.goal))

    // comapring percentage to progress bar
    const handleBacker = async () => {
        setLoading(true)
        
        startup.backers.push({ backer: { name: user.displayName, email: user.email }, amount: backingAmount })
        startup.funded = Number(startup.funded) + Number(backingAmount)
      
        try {
            const docRef = doc(db, 'startups', startup.id);
            await updateDoc(docRef, startup);
            slickPayTest(backingAmount)
     
        } catch (error) {
            
        }
    }
    const slickPayTest = (amount) => {
        axios.post(process.env.NEXT_PUBLIC_SLICK_PAY_API_URL, {
            "amount": amount,
            "url": "",
        }, {
            headers: {
                "Accept": 'application/json',
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SLICK_PAY_TOKEN}`
            }
        })
            .then((result) => {
                let response = result.data;
                setLoading(false)
                router.push(response.url)


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
            <p className='text-[#2271B9] text-[3em] text-center font-bold'>{startup.title}</p>
            <div className='bg-white flex flex-col divide-y  md:p-10 max-md:pb-6 mt-5 md:rounded-2xl'>
                <div className='flex gap-10 max-md:flex-col mb-8'>
                    <img src={startup.logo} className='md:w-[50%] max-md:m-auto' />
                    <div className='md:flex-1 my-auto'>
                        <div className='m-auto max-md:mx-5'>
                            <p className='text-center mb-4 font-bold text-[2em] max-md:text-[1.5em]'>Stats</p>
                            <ProgressBar completed={percentage} customLabel=' ' className="h-5 relative max-w-[100%] rounded-[5px] overflow-hidden mr-10" bgColor='#2271B9' />

                            <p className='mb-4 text-[1.5em]'> <span className='font-bold'>{percentage}%</span> of the goal</p>
                            <p className='text-[1.5em] font-bold text-[#2271B9]'>{startup.funded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}DZD</p>
                            <p>pledged of {startup.goal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}DZD goal</p>
                            <p className='mt-5 text-[1.5em] font-bold'>{startup.backers.length}</p>
                            <p>backers</p>
                            <p className='mt-5 text-[1.5em] font-bold'>{days}</p>
                            <p>days to go</p>
                            <div className='flex gap-4 justify-center items-center mt-5 max-md:flex-col'>
                                {
                                    user ? <Popup
                                        trigger={<p className='bg-[#000218] cursor-pointer text-white px-5 py-3 font-bold rounded-full uppercase max-md:w-full text-center'>Back this project</p>}
                                        modal
                                        nested
                                    >
                                        {close => (
                                            <div className="modal p-5">
                                                <button className="close" onClick={close}>
                                                    <ImCross className='text-[#2271B9]' />
                                                </button>
                                                <div className="header">Back this project</div>
                                                <div className="content w-full flex flex-col gap-5">
                                                    <input type='number' placeholder='amount in DZD' className='border bg-transparent p-3 rounded-[10px] w-full' onChange={(e) => { setBackingAmount(e.target.value) }} />
                                                    <p className='bg-[#2271B9] cursor-pointer  hover:bg-blue-600 text-white gird place-content-center p-2 rounded-md mb-2 text-center flex items-center content-center' onClick={() => { backingAmount < 1000 ? toast("backing amount can't be less than 1000DA") : handleBacker() }}>
                                                        {Loading ? <Loader /> : 'continue to checkout'}</p>
                                                </div>

                                            </div>
                                        )}
                                    </Popup> : <p className='bg-[#000218] cursor-pointer text-white px-5 py-3 font-bold rounded-full uppercase max-md:w-full text-center' onClick={() => { toast('you need to be logged in') }}>Back this project</p>

                                }

                                <p className='bg-[#E7EBF2] text-[#000218] px-5 py-3 font-bold rounded-full uppercase max-md:w-full text-center'>share</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <p className='text-center text-[6em] my-10 font-bold text-[#001623]'>our story</p>
            <div className='flex flex-col gap-[4em] m-10  max-md:items-center'>
                {
                    startup.stories.map((e, i) => (
                        <div key={i} className='flex max-md:flex-col  gap-10 p-10 rounded-2xl bg-white md:divide-x max-md:divide-y max-md:items-center'>
                            <img src={e.cover} className='max-w-[300px] rounded-2xl aspect-square' />
                            <div className='grid p-10'>
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
