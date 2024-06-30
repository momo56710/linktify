'use client'
import React, { useEffect, useState } from 'react'
import ExploreStartupsCard from './componenets/exploreStartupsCard'
import { fetchDataFromFireStore } from '@/utils/startups'
import Loading from '../components/loading'

export default function Page() {
  const [startups, setStartups] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('') // State for search term
  const [selectedField, setSelectedField] = useState('') // State for selected field

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataFromFireStore()
        setStartups(data)
        setIsLoading(false) // Move setIsLoading inside the try block
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsLoading(false) // Set isLoading to false in case of error
      }
    }
    fetchData()

  }, [])

  const filteredStartups = startups.filter((startup) => {
    // Filter by search term (case-insensitive)
    const titleMatch = startup.title.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by field (if selected)
    const fieldMatch = selectedField ? startup.field === selectedField : true; // Include all if no field selected

    return titleMatch && fieldMatch;
  });

  if (isLoading) {
    return <Loading />
  }

  const fields = [ // Array of field options (assuming you have a list)
    { value: '', label: 'All Fields' },
    { value: 'Technology & Innovation', label: 'Technology & Innovation' },
    { value: 'Sustainability & Social Impact', label: 'Sustainability & Social Impact' },
    { value: 'Consumer & Business Services', label: 'Consumer & Business Services' },
  ];

  return (
    <div className='m-10'>
      <div className='flex flex-row'>
        <p className='text-[#2271B9] text-[3em] text-center w-full mb-10 font-bold'>Explore</p>
      </div>
      <div className='lg:w-[70%] md:grid max-md:flex flex-col grid-cols-[3fr,1fr] gap-4 m-auto'>
        <input
          className='border bg-transparent p-3 rounded-[10px] '
          placeholder='Search Startups...'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)} // Update search term on input change
        />
        <select
          className='border border-gray-300 bg-transparent p-3 rounded-md focus:outline-none' // Apply similar styles as input
          value={selectedField}
          onChange={(event) => setSelectedField(event.target.value)} // Update selected field on change
        >
          {fields.map((field) => (
            <option key={field.value} value={field.value} className='option-item'> {/* Added a custom class */}
              {field.label}
            </option>
          ))}
        </select>
      </div>

      {filteredStartups.length === 0 && ( // Check if filtered startups is empty
        <p className='text-center text-gray-500 font-medium mt-4'>
          No startups found based on your search criteria. Try adjusting your search terms or selecting a different field.
        </p>
      )}
      <div className='flex gap-[3em] justify-center flex-wrap '>
        {filteredStartups.map((e, i) => (
          <>
            {
              e.verified ? <ExploreStartupsCard key={i} title={e.title} logo={e.logo} disc={e.shortDisc} field={e.field} /> : ''
            }
          </>

        ))}
      </div>
    </div>
  )
}