import React from 'react'

export default function PostCard({post}) {
  return (
    <div className='bg-white max-w-[30em] rounded-2xl shadow-xl p-10 flex flex-col'>
      <img src={post.cover.src} className='rounded-xl'/>
      <div className='mt-4 grid gap-4'>
        <p className='uppercase text-[#2271B9]'>{post.type}</p>
        <p className='text-[1.5em] font-bold'>{post.title}</p>
        <p>{post.disc}</p>
      </div>
    </div>
  )
}
