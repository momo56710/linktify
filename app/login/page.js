'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/utils/firebase'
import { useRouter } from 'next/navigation'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [warning, setWarning] = useState('')
  const router = useRouter()
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  
  const handleSignIn = async () => {
    if (email == '' || password == '') {
      setWarning("don't leave inputs empty")
    }
    else {
      try {
        const res = await signInWithEmailAndPassword(email, password)
        setEmail('')
        setPassword('')
        router.push('/')
      } catch (e) {
        
      }
    }
  }
  return (
    <div className='flex max-md:flex-col max-md:divide-y justify-center items-center min-h-[70vh] m-10 p-10 bg-white rounded-[20px] md:divide-x'>
      <p className='text-[#19154E] md:w-[30vw] flex-1 justify-self-center max-md:pb-10 text-center font-bold text-[3em]'>Log In</p>
      <div className='  md:w-[30vw] max-md:w-[70vw] flex-1 md:pl-[5em] max-md:pt-10'>
        <div className='flex flex-col gap-5 max-w-[30em] m-auto'>
          <input type='email' placeholder='email' className='bg-[#fcfbfb] p-3 rounded-[10px]' onChange={e => setEmail(e.target.value)} />
          <div className='flex flex-col'>
            <input type='password' placeholder='password' className='bg-[#fcfbfb] p-3 rounded-[10px]' onChange={e => setPassword(e.target.value)} />
            <p className='text-[0.8em] ml-3 mt-1 text-[#2271B9] hover:underline hover:cursor-pointer'>
              forgot your password ?
            </p>
          </div>
          <p className='bg-[#2271B9] text-white text-center cursor-pointer rounded-md py-2' onClick={e => { handleSignIn() }}>Log in</p>
          <p>{warning}</p>
          <div className='flex items-center gap-2'>
            <input type='checkbox' />
            <span>
              remember me
            </span>
          </div>

          <hr />
          <div>
            <p>
              New to linktify ?
              <Link href={'/signup'}>
                <span className='text-[#2271B9] hover:underline hover:cursor-pointer'>
                  sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>



    </div>
  )
}
