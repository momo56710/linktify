'use client'
import { auth } from '@/utils/firebase';
import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import pfp1 from '@/assets/users/amine.png'
import pfp2 from '@/assets/users/khaoula.png'
import pfp3 from '@/assets/users/loubna.png'
import pfp4 from '@/assets/users/nadjib.png'
import pfp5 from '@/assets/users/nardjess.png'
import pfp6 from '@/assets/users/rania.png'
import pfp7 from '@/assets/users/salma.png'
import pfp8 from '@/assets/users/walid.png'
import pfp9 from '@/assets/users/youcef.png'
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter()
  const [user, setUser] = useState(null);
  const pfps = [pfp1, pfp2, pfp3, pfp4, pfp5, pfp6, pfp7, pfp8, pfp9]
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
            <div className=' flex content-between gap-10 divide-x'>
              <img src={pfps[Math.floor(Math.random() * (8 - 0 + 1) + 0)].src} />
              <div className='pl-5 grid py-4'><p className='text-[2em] font-bold'> {user.displayName}</p>
                <p> {user.photoURL}</p>
              </div>
            </div>
            <p onClick={() => { signOut(auth); router.push('/') }} className='py-2 rounded-xl bg-red-600 hover:bg-red-800 cursor-pointer text-center text-white'>sign out</p>
            <p className='py-2 rounded-xl bg-gray-200 hover:bg-gray-400 cursor-pointer text-center '>start a project</p>
          </div>
        ) : (
          <div>not signed in</div>
        )}
    </div>
  );
}