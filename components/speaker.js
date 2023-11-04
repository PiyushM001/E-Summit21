import { Inter } from "next/font/google";
/** @type {import('tailwindcss').Config} */
import Image from 'next/image'
import React from 'react' 

// const inter = Inter({ subsets: ["latin"] });
export default function Speaker() {
  return (
  <div className="bg-[#28094A] w-full flex md:flex-col p-9 justify-around">

    <div className="flex text-slate-100 text-4xl font-bold	font-['Proxima Nova'] p-6 pl-9">
        SPEAKERS
    </div>
    <div className="p-8 flex md:flex-row ">
      <div className=" pr-14 hover:text-purple-600 cursor-pointer px-6 flex md:flex-col">
        <div>
          <Image
          src="/images/speaker1.png"
          width={240}
          height={240}
          alt="Picture of the speaker"
          />
        </div>
        <div>
          <Image
          src="/images/Rectangle.png"
          width={240}
          height={110}
          alt="Picture"
          />
        </div>
      </div>
      <div className="pr-14 hover:text-purple-600 cursor-pointer px-6 flex md:flex-col">
        <div>
          <Image
          src="/images/speaker1.png"
          width={240}
          height={240}
          alt="Picture of the speaker"
          />
        </div>
        <div>
          <Image
          src="/images/Rectangle.png"
          width={240}
          height={110}
          alt="Picture"
          />
        </div>
      </div>
      <div className="pr-14 hover:text-purple-600 cursor-pointer px-6 flex md:flex-col">
        <div>
        
<svg width="304" height="305" viewBox="0 0 304 305" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.3 0.3H256.868L303.7 46.5274V304.7H42.095L0.3 263.468V0.3Z" stroke="white" stroke-width="0.6"/>
</svg>
          <Image
          src="/images/speaker1.png"
          width={240}
          height={240}
          alt="Picture of the speaker"
          />
        </div>
        <div>
          <Image
          src="/images/Rectangle.png"
          width={240}
          height={110}
          alt="Picture"
          />
        </div>
      </div>
      <div className="pr-14 hover:text-purple-600 cursor-pointer px-6 flex md:flex-col">
        <div>
          <Image
          src="/images/speaker1.png"
          width={240}
          height={240}
          alt="Picture of the speaker"
          />
        </div>
        <div>
          <Image
          src="/images/Rectangle.png"
          width={240}
          height={110}
          alt="Picture"
          />
        </div>
      </div>
      
    </div>

    {/* button */}
    <div className="container flex flex-col items-center relative">
      {/* <button className="justify-center bg-[#431686] hover:bg-white text-slate-100 font-bold py-2 px-4 border border-slate-100 rounded">
        View All
      </button> */}
      <a href='https://www.google.com/'>
        <Image
          src="/images/Rectangle2.png"
          width={141}
          height={43}
          alt="Picture"
          className="object-cover"
          // text="View All"
          />
          <div> 
           <h1 className="text-slate-100 font-bold text-xl absolute">View All</h1>
          </div>
      </a>
    </div>

    
    </div>

    
  );
}


