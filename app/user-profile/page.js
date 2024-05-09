'use client'
import { auth } from '@/utils/firebase';
import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import pfp from '@/assets/users/amine.png'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function Page() {
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((fetchedUser) => {
      setUser(fetchedUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);
  return (
    <div className='min-h-[80vh] grid place-content-center '>
      {isLoading ? <div>Loading...</div> :
        user ? (
          <div className='bg-white p-10 flex flex-col gap-5 shadow-xl rounded-xl'>
            <div className=' flex max-md:flex-col content-between gap-10 max-md:w-[60vw] md:divide-x max-md:divide-y'>
              <img src={pfp.src} className='max-md:w-[100px] max-md:m-auto' />
              <div className='pl-5 grid py-4'><p className='text-[2em] font-bold max-md:text-center'> {user.displayName}</p>
                <p className='max-md:text-center'> {user.photoURL}</p>
              </div>
            </div>
            <p onClick={() => { signOut(auth); router.push('/') }} className='py-2 rounded-xl bg-red-600 hover:bg-red-800 cursor-pointer text-center text-white'>sign out</p>
            <Link href={'/projects/start'}><p className='py-2 rounded-xl bg-gray-200 hover:bg-gray-400 cursor-pointer text-center '>start a project</p></Link>
          </div>
        ) : (
          <div>not signed in</div>
        )}
    </div>
  );
}