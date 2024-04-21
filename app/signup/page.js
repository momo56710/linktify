import Link from 'next/link'
import React from 'react'
export default function page() {
    return (
        <div className='grid place-content-center m-10'>
            <div className='bg-white p-10 rounded-[20px] flex flex-col gap-5'>
                <p className='text-[#19154E] text-center font-bold text-[1.5em]'>Sign up</p>
                <input type='text' placeholder='name' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
                <input type='email' placeholder='email' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
                <input type='password' placeholder='password' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
                <input type='password' placeholder='confirm password' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
                <Link href={'/'}> <p className='bg-[#2271B9] text-white text-center rounded-md py-2'>Sign up</p></Link>


                <hr />
                <div>
                    <p>have an account ? <Link href={'/login'}><span className='text-[#2271B9] hover:underline hover:cursor-pointer'>Log in</span></Link> </p>
                </div>
            </div>



        </div>
    )
}
