import StatsCard from "./components/statsCard";
import StartupMainpageCard from "./components/startupMainpageCard";
import { stats } from '@/objects/stats';
import Link from "next/link";
import { startups } from "@/objects/startups";
import { metrics } from "@/objects/metrics";
import MetricsCard from "./components/metricsCard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24  font-bold">
      <div className="flex flex-col max-md:flex-col-reverse">
        <div>
          <p className="max-md:text-[2em] mt-10  text-[3em] bg-gradient-to-r from-[#1F73D4] via-[#7C39D4] to-[#1F73D4] bg-clip-text text-transparent text-center">Never start from zero again.</p>
          <div className="flex max-md:flex-col justify-between max-md:gap-10 w-[100%] px-[2em] mt-[3em] mb-[5em]">
            {
              stats.map((e,i) => (
                <StatsCard key={i} icon={e.icon} number={e.number} disc={e.disc} />
              ))
            }
          </div>
        </div>
        <div>
          <p className="max-md:text-[2em] text-[3em] bg-gradient-to-r from-[#1F73D4] via-[#7C39D4] to-[#1F73D4] bg-clip-text text-transparent text-center">Metrics in Motion</p>
          <div className="flex max-md:items-center max-md:gap-10 md:justify-between max-md:flex-col w-[100%]  px-[2em] mt-[3em] md:divide-x-2">
            {
              metrics.map((e, i) => (
                <div key={i} className="flex gap-5 px-5">
                  <MetricsCard number={e.number} title={e.title} />

                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="md:mt-[5em] flex flex-col gap-[2em] justify-center items-center">
        <p className="md:w-[30em] w-[90vw] md:m-auto text-center leading-8 text-[#858694]">Empowering startups with financial fuel, ensuring they never restart from ground zero again</p>
        <div className="flex max-md:flex-col md:justify-center w-[90vw] text-center gap-[1em] md:gap-[2em] uppercase text-[14px]">
          <Link href={'/signup'} className="bg-[#001623] text-white py-3 px-6 rounded-[80px]">Sign up now</Link> 
          <Link href={'/explore'} className="border-[#c4c4c4] border-[2px] border-solid py-3 px-6 rounded-[80px]">Explore</Link>
        </div>
      </div>
      <div className="grid gap-[2em] mt-[5em]">
        {
          startups.map((e,i) => (
            <StartupMainpageCard key={i} img={e.logo} title={e.title} disc={e.disc} />
          ))
        }

      </div>
      <div className="mt-[5em] flex flex-col md:w-[40em]">
        <span className="text-center text-[2em] md:text-[70px]">Detect your next</span>
        <span className="text-[#1F73D4] text-center text-[2em] md:text-[70px]">big move</span>
        <span className="max-md:w-[90vw] w-[100%] text-center text-[#858694]">Embark on a crowdfunding journey where your projects come to life through seamless integration. Join forces with Lonktify, your gateway to crowdfunding success</span>
        <div className="mt-5 max-md:flex max-md:flex-col md:grid md:grid-cols-[4fr,1fr] gap-3">
          <input type="email" className="bg-[#E5E7EB] py-3 pl-4 rounded-[10px]" placeholder="yourmail@gmail.com" />
          <span className="bg-[#1F73D4] text-center  text-white px-5 py-3 rounded-[10px]">Notify me</span>
        </div>
      </div>
    </main>
  );
}
