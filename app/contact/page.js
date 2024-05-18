'use client'
import { React, useState } from 'react'
import Xicon from '@/assets/X icon.png'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
export default function Page() {
    const [emailSubject, setEmailSubject] = useState()
    const [emailBody, setEmailBody] = useState()
    const [contactName, setContactName] = useState()
    const mailtoUrl = `mailto:linktifyagency@gmail.com?subject=${emailSubject}&body=${emailBody}%0A${contactName}`

    return (
        <div className='m-auto'>
            <p className='text-[#2271B9] text-[3em] text-center font-bold my-10'>Contact Us</p>

            <div className='max-w-[1600px]  m-auto bg-white pb-10 my-10 rounded-3xl'>

                <div className=' flex pl-10 pt-[3em]'>
                    <div>
                        <p className='text-[#2271B9] text-[0.8em]'>Contact Us</p>
                        <p className='text-[#001623] text-[2em] font-bold'>We can help</p>
                        <div className='md:p-7 max-md:pr-7 mt-5 gap-10 flex max-md:flex-col'>
                            <div className='md:flex-1'>
                                <div className='flex gap-5 mb-5 max-md:flex-col'>
                                    <input type='text' placeholder='name' className='bg-[#F6F4FF] md:flex-1 p-3 rounded-[10px]' onChange={(e) => { setContactName(e.target.value) }} />
                                    <input type='text' placeholder='email subject' className='bg-[#F6F4FF] md:flex-1 p-3 rounded-[10px]' onChange={(e) => { setEmailSubject(e.target.value) }} />
                                </div>
                                <textarea rows={10} placeholder='message' className='bg-[#F6F4FF] p-3 rounded-[10px] w-[100%]' onChange={(e) => { setEmailBody(e.target.value) }} />
                                <a href={mailtoUrl} target="_blank" rel="noopener noreferrer"><p className='bg-[#2271B9] text-white text-center font-bold py-4 rounded-xl mt-3'>send message</p></a>

                            </div>
                            <div className='md:flex-1 grid'>
                                <p className='text-[#001623] text-[1.5em] font-bold'>Get in touch</p>
                                <p>We’re always here to help. Contact us if you are experiencing issues with out product or have any questions.</p>
                                <p className='text-[#001623] text-[1.5em] mt-5 font-bold'>Address</p>
                                <p>35000</p>
                                <p>26 street boumerdess</p>
                                <p>Algeria</p>
                                <p className='mt-5 text-[#2271B9]'>linktifyagency@gmail.com</p>
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
