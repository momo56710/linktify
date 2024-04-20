import StatsCard from "./components/statsCard";
import StartupMainpageCard from "./components/startupMainpageCard";
import { stats } from '@/objects/stats';
import { startups } from "@/objects/startups";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24  font-bold">
      <div>
        <p className=" text-[3em] bg-gradient-to-r from-[#1F73D4] via-[#7C39D4] to-[#1F73D4] bg-clip-text text-transparent">Never start from zero again.</p>
        <div className="flex justify-between w-[100%] px-[2em] mt-[3em]">
          {
            stats.map(e => (
              <StatsCard key={e} icon={e.icon} number={e.number} disc={e.disc} />
            ))
          }
        </div>
      </div>
      <div className="mt-[5em] flex flex-col gap-[2em] justify-center items-center">
        <p className="w-[70%] m-auto text-center leading-8 text-[#858694]">Empowering startups with financial fuel, ensuring they never restart from ground zero again</p>
        <div className="flex gap-[2em] uppercase text-[14px]">
          <span className="bg-black text-white py-3 px-6 rounded-[80px]">Sign up now</span>
          <span className="border-[#c4c4c4] border-[2px] border-solid py-3 px-6 rounded-[80px]">Explore</span>
        </div>
      </div>
      <div className="grid gap-[2em] mt-[5em]">
        {
          startups.map(e => (
            <StartupMainpageCard key={e} img={e.img} title={e.title} disc={e.disc} link={e.link} />
          ))
        }

      </div>
      <div className="mt-[5em] flex flex-col w-[40em]">
        <span className="text-center text-[70px]">Detect your next</span>
        <span className="text-[#1F73D4] text-center text-[70px]">big move</span>
        <span className="w-[100%] text-center text-[#858694]">Embark on a crowdfunding journey where your projects come to life through seamless integration. Join forces with Lonktify, your gateway to crowdfunding success</span>
        <div className="mt-5 grid grid-cols-[4fr,1fr] gap-3">
          <input type="email" className="bg-[#E5E7EB] py-3 pl-4 rounded-[10px]" placeholder="yourmail@gmail.com" />
          <span className="bg-[#1F73D4]  text-white px-5 py-3 rounded-[10px]">Notify me</span>
        </div>
      </div>
    </main>
  );
}
