import React from 'react'
import { startups } from '@/objects/startups'
import ExploreStartupsCard from './componenets/exploreStartupsCard'
export default function page() {
    return (
        <div className='m-10'>
            <p className='text-[#2271B9] text-[3em] text-center font-bold'>Explore</p>
            <div className='flex gap-[3em] justify-center flex-wrap '>
                {
                    startups.map((e, i) => (<ExploreStartupsCard key={i} title={e.title} img={e.img} disc={e.shortDisc} />))
                }
            </div>
        </div>
    )
}
