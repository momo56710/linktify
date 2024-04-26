import React from 'react'
import bolgImg from '@/assets/Images/404.jpeg'
import { posts } from '@/objects/posts'
import PostCard from './componenets/postCard'
export default function page() {
  return (
    <div className='my-10'>
      <div className='max-w-[25em] m-auto'>
        <p className='text-[#2271B9] text-[3em] text-center font-bold mt-10'>Blog</p>
        <p className='text-center font-bold text-gray-500 text-[1.2em]'>Find all of our latest stories and subscribe to our newsletter for more.</p>
      </div>
      <div className='bg-white flex gap-10 p-10'>
        <div className='relative overflow-hidden flex-1 rounded-[30px] max-w-[1600px] m-auto'>
          <img src={bolgImg.src} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
          <div className='relative z-[1] mt-[5em] p-10'>
            <p className='text-[1.5em] text-[#d3d3d3] font-bold'>Inspiration</p>
            <p className='text-[1.5em] text-white font-bold'>Mastering the Art of Startup Funding: A Guide by Linktify</p>
            <p className='text-[#d3d3d3]'>Explore the essential steps and strategies to successfully secure funding for your startup using Linktify</p>
          </div>
        </div>
      </div>
      <div className='max-w-[1600px] m-auto'>
        <p className='p-10 font-bold text-[#001623] text-[2em]'>All posts</p>
        <div className='flex flex-wrap gap-5'>
        {
          posts.map((e,i)=>(<PostCard key={i} post={e}/>))
        }
        </div>
      </div>
    </div>
  )
}
