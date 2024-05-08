'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import linktifyLogoBlck from '@/assets/Linktify Logo alt.png'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "@/utils/firebase";
import pfp1 from '@/assets/users/amine.png'
import pfp2 from '@/assets/users/khaoula.png'
import pfp3 from '@/assets/users/loubna.png'
import pfp4 from '@/assets/users/nadjib.png'
import pfp5 from '@/assets/users/nardjess.png'
import pfp6 from '@/assets/users/rania.png'
import pfp7 from '@/assets/users/salma.png'
import pfp8 from '@/assets/users/walid.png'
import pfp9 from '@/assets/users/youcef.png'
import { usePathname } from 'next/navigation'
export default function NavBarDes() {
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


    return (
        <div className='grid grid-cols-[1fr,4fr,2fr] pt-[2em] text-[14px] pl-[2em] items-center content-center max-w-[1600px] m-auto'>
            <div><Link href={'/'}><Image src={linktifyLogoBlck} width={100} /></Link> </div>
            <div className='justify-self-center'>
                <ul className='flex gap-8 font-bold uppercase'>
                    <Link href={'/explore'}><li>Explore</li></Link>
                    <Link href={'/about'}><li>About Us</li></Link>
                    <Link href={'/contact'}><li>Contact</li></Link>
                    <Link href={'/blog'}><li>Blog</li></Link>
                </ul>
            </div>
            {
                option && <div className='flex gap-5 content-center items-center justify-self-end mr-[2em] '>
                    <Link href={'/projects/start'}> <span className=' py-3 px-6 uppercase font-bold'>start a project</span></Link>
                    {isLoading ? '' :
                        user ? <Link href={'/user-profile'}>
                            <img src={pfps[Math.floor(Math.random() * (8 - 0 + 1) + 0)].src} className='w-[4em]' alt="amine" border="0" />
                        </Link> : <Link href={'/login'} className='bg-[#001623] text-white py-3 px-6 rounded-[80px] uppercase font-bold'>Login</Link>}
                </div>
            }


        </div>
    )
}
