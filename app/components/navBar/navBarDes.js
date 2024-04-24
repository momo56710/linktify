import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import linktifyLogoBlck from '@/assets/Linktify Logo alt.png'
export default function NavBarDes() {
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

            <div className='flex gap-5 content-center items-center justify-self-end mr-[2em] font-bold uppercase'>
                <Link href={'/projects/start'}> <span className=' py-3 px-6'>start a project</span></Link>
                <Link href={'/login'} className='bg-[#001623] text-white py-3 px-6 rounded-[80px]'>Login</Link>

            </div>

        </div>
    )
}
