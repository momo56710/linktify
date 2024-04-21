import React from 'react'
import Link from 'next/link'
export default function Login() {
  return (
    <div className='grid place-content-center m-10'>
      <div className='bg-white p-10 rounded-[20px] flex flex-col gap-5'>
        <p className='text-[#19154E] text-center font-bold text-[1.5em]'>Log in</p>
        <input type='email' placeholder='email' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
        <div><input type='password' placeholder='password' className='bg-[#fcfbfb] p-3 rounded-[10px]' />
          <p className='text-[0.8em] ml-3 mt-1 text-[#2271B9] hover:underline hover:cursor-pointer'>forgot your password ?</p></div>
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
  )
}
