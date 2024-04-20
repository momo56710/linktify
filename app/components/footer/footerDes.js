import React from 'react'
import Image from 'next/image'
import linktifyLogoWht from '@/assets/Linktify alternate logo(w).png'
import { footer } from '@/objects/footer'
export default function FooterDes() {
    return (
        <div className='bg-[#000218] text-white'>
            <div className='flex flex-col m-auto max-w-[1440px] py-[3em] px-[5em] divide-y divide-[#292929]'>
                <div className=' flex justify-between mb-[5em]'>
                    <div>
                        <Image width={100} src={linktifyLogoWht} />
                    </div>
                    {
                        footer.map(e => (


                            <div>
                                <p className='text-[#797a7a] text-[0.8em]'>{e.title}</p>
                                <div className='mt-[1em]'>
                                    {
                                        e.elmnts.map(e => (<p className='text-[1.5em] mt-[0.5em]'>{e}</p>))
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
