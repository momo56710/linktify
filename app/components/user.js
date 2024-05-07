import React from 'react'
import { auth } from "@/utils/firebase";
import { signOut } from 'firebase/auth'
export default function User({ email, name, pic }) {
    return (
        <div className='relative'>
            <img src={pic} className='w-[4em]' alt="amine" border="0" />
        </div>

    )
}
