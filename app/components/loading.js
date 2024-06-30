import React from 'react'
import { Loader } from './loader'

export default function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='w-[50px] h-[50px]'>
            <Loader/>
        </div>
    </div>
  )
}
