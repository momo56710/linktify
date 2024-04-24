import React from 'react'
import Xicon from '@/assets/X icon.png'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
export default function Page() {
    return (
        <div>
            <p className='text-[#2271B9] text-[3em] text-center font-bold my-10'>Contact Us</p>

            <div className='max-w-[1600px] m-auto bg-white pb-10 my-10 rounded-3xl'>

                <div className=' flex pl-10 pt-[3em]'>
                    <div>
                        <p className='text-[#2271B9] text-[0.8em]'>Contact Us</p>
                        <p className='text-[#001623] text-[2em] font-bold'>We can help</p>
                        <div className='p-7 flex gap-10 max-md:flex-col'>
                            <div className='flex-1'>
                                <div className='flex gap-10 mb-4'>
                                    <input type='text' placeholder='name' className='bg-[#F6F4FF] p-3 rounded-[10px]' />
                                    <input type='email' placeholder='email' className='bg-[#F6F4FF] p-3 rounded-[10px]' />
                                </div>
                                <textarea rows={10} placeholder='message' className='bg-[#F6F4FF] p-3 rounded-[10px] w-[100%]' />
                                <p className='bg-[#2271B9] text-white text-center font-bold py-4 rounded-xl mt-3'>send message</p>
                            </div>
                            <div className='flex-1 grid'>
                                <p className='text-[#001623] text-[1.5em] font-bold'>Get in touch</p>
                                <p>We’re always here to help. Contact us if you are experiencing issues with out product or have any questions.</p>
                                <p className='text-[#001623] text-[1.5em] mt-5 font-bold'>Address</p>
                                <p>35000</p>
                                <p>26 street boumerdess</p>
                                <p>Algeria</p>
                                <p className='mt-5 text-[#2271B9]'>support@linktify.com</p>
                                <p className='mt-3 text-[#2271B9]'>tel : +213562519164</p>
                                <div className='flex gap-5 mt-5'>
                                    <FaFacebook className='text-[#2271B9] text-[40px]' />
                                    <FaLinkedin className='text-[#2271B9] text-[40px]' />
                                    <img className='w-[40px] h-[40px] rounded-full' src={Xicon.src} />
                                    <FaInstagramSquare className='text-[#2271B9] text-[40px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}