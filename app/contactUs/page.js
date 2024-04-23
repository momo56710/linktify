import React from 'react'

export default function Page() {
    return (
        <div>
            <p className='text-[#2271B9] text-[3em] text-center font-bold my-10'>Contact Us</p>
            <div className='bg-white'>
                <div className='max-w-[1400px] m-auto'>

                    <div className=' flex pl-10 pt-[3em]'>
                        <div>
                            <p className='text-[#2271B9] text-[0.8em]'>Contact Us</p>
                            <p className='text-[#001623] text-[2em] font-bold'>We can help</p>
                            <div className='p-7'>
                                <div className='flex gap-10 mb-4'>
                                    <input type='text' placeholder='name' className='bg-[#F6F4FF] p-3 rounded-[10px]' />
                                    <input type='email' placeholder='email' className='bg-[#F6F4FF] p-3 rounded-[10px]' />
                                </div>
                                <textarea rows={10} placeholder='message' className='bg-[#F6F4FF] p-3 rounded-[10px] w-[100%]'/>
                                <p className='bg-[#2271B9] text-white text-center font-bold py-4 rounded-xl mt-3'>send message</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
