import { Inter } from "next/font/google";
import React from 'react' 

// const inter = Inter({ subsets: ["latin"] });

export default function Faq() {
  return (
  <div className="bg-[#28094A] w-full flex md:flex-col p-9 justify-around">

    <div className="flex text-slate-100 text-4xl font-bold	font-proxima p-6 pl-9">
        FAQs
    </div>

    <div className=" pl-4 flex md:flex-row flex-col text-[25px] font-semibold font-proxima tracking-wide text-slate-100  ">
      <div className="hover:text-purple-600 cursor-pointer px-6">General</div>
      <div className="hover:text-purple-600 cursor-pointer px-6">Startup-Ignite</div>
      <div className="hover:text-purple-600 cursor-pointer px-6">Productathon</div>
      <div className="hover:text-purple-600 cursor-pointer px-6">Ideastorm</div>
      <div className="hover:text-purple-600 cursor-pointer px-6">Finance event</div>
      <div className="hover:text-purple-600 cursor-pointer px-6">Caltech Institute Event</div>
    </div>

    <div className="flex md:flex-col p-10 ">
        <div className="relative w-full overflow-hidden p-1 border-solid border-violet-800 border-[1px] mb-7 hover:border-slate-100">
          <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer "  />
            <div className="h-12 w-full pl-5 flex items-center  ">
              <h1 className="text-[22px] font-semibold text-white">How to reach IIT Roorkee?</h1>
            </div>

            {/* arrow */}
            <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0
                peer-checked:rotate-180 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 fill-violet-900 hover:fill-slate-100">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
              </svg>
            </div>

            {/* content */}
                         
              <div className="overflow-hidden transition-all duration-500 text-white text-sm 
                  max-h-0 peer-checked:max-h-full">
                <div>
                  <p className="text-xl p-3 pl-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nunc ante. Fusce vel sollicitudin nunc. In lobortis eros sed faucibus lobortis. Phasellus nec mattis nisl. Sed sed felis auctor, facilisis velit et, pharetra felis. Nulla semper porta justo, et convallis libero 
                  ultrices ut. 
                  </p>
                </div>
              </div>   
        </div>

        <div className="relative w-full overflow-hidden p-1 border-solid border-violet-800 border-[1px] mb-7 hover:border-slate-100">
          <input  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer " type="checkbox" />
            <div className="h-12 w-full pl-5 flex items-center ">
              <h1 className="text-[22px] font-semibold text-white">What is E-Summit?</h1>
            </div>
            <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0
            peer-checked:rotate-180">
              {/* arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 fill-violet-900">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
              </svg>
            </div>

            
              {/* content */}
              <div className="overflow-hidden 
              transition-all duration-500 
              text-white text-sm 
              max-h-0 peer-checked:max-h-40">

                <div>
                  <p className="text-xl p-3 pl-5 ">
                  
E-Summit being the flagship event of ECell, is held annually brings together the academic community, venture capitalists, new age entrepreneurs and all those passionate about entrepreneurship to common grounds. 
                  </p>
                </div>

            
          
        </div>
      </div>
      <div className="relative w-full overflow-hidden p-1 border-solid border-violet-800 border-[1px] mb-7 hover:border-slate-100">
          <input  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer " type="checkbox" />
            <div className="h-12 w-full pl-5 flex items-center ">
              <h1 className="text-[22px] font-semibold text-white">What does the Embracing Evolution mean?
</h1>
            </div>
            <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0
            peer-checked:rotate-180">
              {/* arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 fill-violet-900">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
              </svg>
            </div>

            
              {/* content */}
              <div className="overflow-hidden 
              transition-all duration-500 
              text-white text-sm 
              max-h-0 peer-checked:max-h-40">

                <div>
                  <p className="text-xl p-3 pl-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nunc ante. Fusce vel sollicitudin nunc. In lobortis eros sed faucibus lobortis. Phasellus nec mattis nisl. Sed sed felis auctor, facilisis velit et, pharetra felis. Nulla semper porta justo, et convallis libero 
                  ultrices ut. 
                  </p>
                </div>

            
          
        </div>
      </div>
      <div className="relative w-full overflow-hidden p-1 border-solid border-violet-800 border-[1px] mb-7 hover:border-slate-100">
          <input  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer " type="checkbox" />
            <div className="h-12 w-full pl-5 flex items-center ">
              <h1 className="text-[22px] font-semibold text-white">What all opportunities do I have with E-summit?</h1>
            </div>
            <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0
            peer-checked:rotate-180">
              {/* arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 fill-violet-900">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
              </svg>
            </div>

           
              {/* content */}
              <div className="overflow-hidden 
              transition-all duration-500 
              text-white text-sm 
              max-h-0 peer-checked:max-h-40">

                <div>
                  <p className=" text-xl p-3 pl-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nunc ante. Fusce vel sollicitudin nunc. In lobortis eros sed faucibus lobortis. Phasellus nec mattis nisl. Sed sed felis auctor, facilisis velit et, pharetra felis. Nulla semper porta justo, et convallis libero 
                  ultrices ut. 
                  </p>
                </div>

            
          
        </div>
      </div>
      

    </div>
    </div>

    
  );
}


