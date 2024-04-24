import React from 'react'

export default function NextBigMove() {
  return (
    <div className="mt-[5em] flex flex-col md:w-[40em] font-bold m-auto">
        <span className="text-center text-[2em] md:text-[70px]">Detect your next</span>
        <span className="text-[#1F73D4] text-center text-[2em] md:text-[70px]">big move</span>
        <span className="max-md:w-[90vw] w-[100%] text-center text-[#858694]">Embark on a crowdfunding journey where your projects come to life through seamless integration. Join forces with Lonktify, your gateway to crowdfunding success</span>
        <div className="mt-5 max-md:flex max-md:flex-col md:grid md:grid-cols-[4fr,1fr] gap-3">
          <input type="email" className="bg-[#E5E7EB] py-3 pl-4 rounded-[10px]" placeholder="yourmail@gmail.com" />
          <span className="bg-[#1F73D4] text-center  text-white px-5 py-3 rounded-[10px]">Notify me</span>
        </div>
      </div>
  )
}
