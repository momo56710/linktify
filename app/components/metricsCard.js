import React from 'react'

export default function MetricsCard({ number, title }) {
    return (
        <div className='text-center'>
            <p className='text-[3em] text-[#573CFF]'>{number}</p>
            <p className='text-[0.8em] text-[#9b9b9c]'>{title}</p>
        </div>
    )
}
