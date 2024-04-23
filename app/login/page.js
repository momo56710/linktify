import React from 'react'
import Link from 'next/link'
export default function Login() {
  return (
    <div className='flex max-md:flex-col max-md:divide-y justify-center items-center min-h-[70vh] m-10 p-10 bg-white rounded-[20px] md:divide-x'>
      <p className='text-[#19154E] md:w-[30vw] flex-1 justify-self-center max-md:pb-10 text-center font-bold text-[3em]'>Log In</p>
      <div className='  md:w-[30vw] max-md:w-[70vw] flex-1 md:pl-[5em] max-md:pt-10'>
        <div className='flex flex-col gap-5 max-w-[30em] m-auto'>
          <input type='email' placeholder='email' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
          <div className='flex flex-col'>
            <input type='password' placeholder='password' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
            <p className='text-[0.8em] ml-3 mt-1 text-[#2271B9] hover:underline hover:cursor-pointer'>forgot your password ?</p>
          </div>
          <Link href={'/'}><p className='bg-[#2271B9] text-white text-center rounded-md py-2'>Log in</p></Link>
          <div className='flex items-center gap-2'>
            <input type='checkbox' /> <span>remember me</span>
          </div>
          <hr />
          <div>
            <p>New to linktify ? <Link href={'/signup'}><span className='text-[#2271B9] hover:underline hover:cursor-pointer'>sign up</span></Link></p>
          </div>
        </div>
      </div>



    </div>
  )
}
