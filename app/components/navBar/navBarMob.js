'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import linktifyLogoBlck from '@/assets/Linktify Logo alt.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { auth } from '@/utils/firebase'
import pfp1 from '@/assets/users/amine.png'
import pfp2 from '@/assets/users/khaoula.png'
import pfp3 from '@/assets/users/loubna.png'
import pfp4 from '@/assets/users/nadjib.png'
import pfp5 from '@/assets/users/nardjess.png'
import pfp6 from '@/assets/users/rania.png'
import pfp7 from '@/assets/users/salma.png'
import pfp8 from '@/assets/users/walid.png'
import pfp9 from '@/assets/users/youcef.png'
export default function NavBarMob() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname()
    console.log(pathname)
    const [option, setOption] = useState(true)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((fetchedUser) => {
            setUser(fetchedUser);
            setIsLoading(false) // Update user state on auth state change
        });
        if (pathname == '/user-profile' || pathname == '/signup' || pathname == '/login') {
            setOption(false)
        } else {
            setOption(true)
        }
        return () => unsubscribe();
    }, [pathname, auth])

    const pfps = [pfp1, pfp2, pfp3, pfp4, pfp5, pfp6, pfp7, pfp8, pfp9]
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    if (process.browser) {
        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"
    }

    return (
        <div className='relative bg-[#F7FBFE]'>
            <div className='px-5 pt-5 flex justify-between '>
                <div><Link href={'/'} onClick={() => (setIsOpen(false))}><Image src={linktifyLogoBlck} width={100} /></Link> </div>
                <button onClick={handleClick}
                    className="flex flex-col justify-center items-center">
                    <span className={`bg-[#001623] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                    </span>
                    <span className={`bg-[#001623] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                            'opacity-0' : 'opacity-100'
                        }`} >
                    </span>
                    <span className={`bg-[#001623] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                            '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                        }`} >
                    </span>

                </button>
                {
                    option && <div className='flex content-center text-[0.8em]  items-center justify-self-end mr-[2em] font-bold uppercase'>
                        {
                            isLoading ? " " : user ? <Link href={'/user-profile'}>
                                <img src={pfps[Math.floor(Math.random() * (8 - 0 + 1) + 0)].src} className='w-[4em]' alt="amine" border="0" /> </Link> : <Link href={'/login'} onClick={() => (setIsOpen(false))}><span className='bg-[#001623] text-white  py-1.5 px-3 rounded-[80px]'>login</span></Link>
                        }


                    </div>
                }

            </div>
            <div className={`z-[1] absolute transition-all bg-[#F7FBFE] w-[100vw]  duration-500 ease-out ${isOpen ? 'top-[80px]' : 'top-[-400px]'}`}>
                <div className='justify-self-center  px-5 text-[0.8em]'>
                    <ul className='flex flex-col gap-8 font-bold uppercase pb-2'>
                        <Link href={'/explore'} onClick={() => (setIsOpen(false))}><li>Explore</li></Link>
                        <Link href={'/about'} onClick={() => (setIsOpen(false))}><li>About Us</li></Link>
                        <Link href={'/contact'} onClick={() => (setIsOpen(false))}><li>Contact</li></Link>
                        <Link href={'/blog'} onClick={() => (setIsOpen(false))}><li>Blog</li></Link>
                    </ul>
                    <hr />

                </div>


            </div>
            <div className={` transition-all w-[100vw] h-[100vh]  left-0 bg-[#00000050] absolute  duration-[500ms] ease-out ${isOpen ? 'top-[10em]' : 'top-[-110vh]'}`} onClick={() => (setIsOpen(false))}></div>
        </div>
    )
}
