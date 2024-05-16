'use client'
import React, { useEffect, useState } from 'react'
import ExploreStartupsCard from './componenets/exploreStartupsCard'
import { fetchDataFromFireStore } from '@/utils/startups'
export default function Page() {
  const [startups, setStartups] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFireStore()
      setStartups(data)
    }
    fetchData()
    setIsLoading(false)
  }, [])
  if (isLoading) { return <div>loading</div> }
  return (
    <div className='m-10'>
      <p className='text-[#2271B9] text-[3em] text-center font-bold'>Explore</p>
      <div className='flex gap-[3em] justify-center flex-wrap '>
        {
          startups.map((e, i) => (e.verified && <ExploreStartupsCard key={i} title={e.title} logo={e.logo} disc={e.shortDisc} />))
        }
      </div>
    </div>
  )
}
