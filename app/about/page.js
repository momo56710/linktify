import React from 'react'
import image1 from '@/assets/Images/image1.png'
import image2 from '@/assets/Images/image2.jpg'
import image3 from '@/assets/Images/image3.jpeg'
import image4 from '@/assets/Images/image4.jpeg'
import { stats } from '@/objects/stats'
import { FaArrowRight } from 'react-icons/fa'
import TestominialCard from './components/testominialCard'
import { Testimonials } from '@/objects/testimonials'
import NextBigMove from '../components/nextBigMove'
export default function page() {
  const iamges = [image1, image2, image3]
  return (
    <div>
      <div className='max-w-[30em] m-auto'>
        <p className='text-[#2271B9] text-[3em] text-center font-bold mt-10'>About Us</p>
        <p className='text-center font-bold text-[1.2em]'>Empowering creators.</p>
        <p className='text-center font-bold text-gray-500 text-[0.95em]'>Combine sections from a range of categories to easily assemble pages that meet the needs of your growing business.</p>
      </div>
      <div className='my-10 flex max-md:flex-col max-md:gap-10 justify-between md:max-w-[1000px] max-w-[90vw] m-auto'>
        {
          iamges.map((e, i) => (
            <div key={i} className='grid gap-5'>
              <div ><img className='rounded-2xl aspect-square md:h-[300px] max-md:w-[90vw]' src={e.src} /></div>
              <div className='p-5 bg-white rounded-2xl'>
                <p className='text-center text-[2em] font-bold text-[#2271B9]'>{stats[i].number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}+</p>
                <p className='text-center font-bold'>{stats[i].disc}</p>
              </div>
            </div>

          ))
        }

      </div>
      <div>
        <div className='flex p-10 max-md:flex-col-reverse max-w-[1600px] md:items-center m-auto gap-10'>
          <div className='flex-1'>
            <div className='grid md:w-[30vw]'>
              <div>
                <p className='text-[#2271B9] font-bold uppercase'>our mission</p>
                <p className='text-[2.5em] font-bold'>Dreams Aflame : Linktify&apos;s Mission</p>
              </div>
              <p>At Linktify, our mission is igniting dreams, fueling innovation, fostering connections for transformative success.</p>
              <div className='flex gap-1 items-center'><p>Join our team</p><FaArrowRight className='text-[0.8em]' /></div>
            </div>
          </div>
          <div className='flex-1'>
            <img src={image4.src} className='rounded-3xl' />
          </div>
        </div>

      </div>
      <div>
      </div>
      <div className='m-auto my-10 max-w-[1600px]'>
        <p className='text-center text-[#2271B9] font-bold uppercase'>Testimonials</p>
        <p className='text-center text-[2.5em] font-bold'>Loved by industry leaders.</p>
        <div className='flex justify-around my-10 gap-10 flex-wrap'>
          {
            Testimonials.map((e, i) => (<TestominialCard key={i} testimonial={e.testimonial} writer={e.writer} />))
          }
        </div>
      </div>
      <div className='my-10 max-md:px-10'><NextBigMove /></div>

    </div>
  )
}
