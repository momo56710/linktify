import React from 'react'
import Image from 'next/image'
import linktifyLogoWht from '@/assets/Linktify alternate logo(w).png'
import { footer } from '@/objects/footer'
export default function FooterDes() {
    return (
        <div className='bg-[#000218] text-white'>
            <div className='flex flex-col m-auto max-w-[1440px] py-[3em] md:px-[5em] px-[2em] divide-y divide-[#292929]'>
                <div className=' flex max-md:flex-col max-md:gap-10 justify-between mb-[5em]'>
                    <div className='max-md:flex max-md:justify-center'>
                        <Image width={100} src={linktifyLogoWht} />
                    </div>
                    {
                        footer.map(e => (


                            <div key={e} className='max-md:p-5 rounded-[20px] max-md:border-[1px] max-md:border-[#797979]'>
                                <p className='text-[#797a7a] text-[0.8em]'>{e.title}</p>
                                <div className='mt-[1em]'>
                                    {
                                        e.elmnts.map(e => (<p key={e} className='text-[1.5em] mt-[0.5em]'>{e}</p>))
                                    }
                                </div>
                            </div>

                        ))
                    }

                </div>

                <div >
                    <p className='text-[#797a7a] mt-[1em]'>© Linktify. All right reserved.</p>
                </div>
            </div>
        </div>
    )
}
