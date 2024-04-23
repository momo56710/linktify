import Link from 'next/link'
import React from 'react'
export default function page() {
    return (
        <div className='flex max-md:flex-col max-md:divide-y justify-center items-center min-h-[70vh] m-10 p-10 bg-white rounded-[20px] md:divide-x'>
            <p className='text-[#19154E] md:w-[30vw] flex-1 justify-self-center max-md:pb-10 text-center font-bold text-[3em]'>Sign Up</p>
            <div className='  md:w-[30vw] flex-1 max-md:w-[70vw] md:pl-[5em] max-md:pt-10 '>
                <div className='flex flex-col gap-5 max-w-[30em] m-auto'>
                    <input type='text' placeholder='name' className='bg-[#fcfbfb] p-3 rounded-[10px] ' />
                    <input type='email' placeholder='email' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
                    <input type='password' placeholder='password' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
                    <input type='password' placeholder='confirm password' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
                    <Link href={'/'}> <p className='bg-[#2271B9] text-white text-center rounded-md py-2'>Sign up</p></Link>


                    <hr />
                    <div>
                        <p>have an account ? <Link href={'/login'}><span className='text-[#2271B9] hover:underline hover:cursor-pointer'>Log in</span></Link> </p>
                    </div></div>

            </div>



        </div>
    )
}
