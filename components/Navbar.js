import React from 'react';
function Navbar(){
return (
  <>
    <div
      className="bg bg-cover w-full min-h-screen"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="h-[10vh] p-6 text-white">
        <div className="flex justify-between items-center mx-auto ">
          <div className="pl-24 sm:pl-8 xs:pl-4 space-x-14 flex ">
            <img src="/logoo.png" className="" />
            <div className="text-white flex space-x-14 font-bold items-center py-2">
              <a
                href=""
                className="hover:text-purple-500 hover:underline hover:py-2"
              >
                HOME
              </a>
              <a href="" className="hover:text-purple-500 hover:underline">
                THEME
              </a>
              <a href="" className="hover:text-purple-500 hover:underline">
                EVENTS
              </a>
              <a href="" className="hover:text-purple-500 hover:underline">
                SPEAKERS
              </a>
              <a href="" className="hover:text-purple-500 hover:underline">
                SPONSORS
              </a>
              <a href="" className="hover:text-purple-500 hover:underline">
                FAQ
              </a>
              <a href="" className="text-purple-500">
                CAMPUS AMBASSADORS
              </a>
            </div>
          </div>
          <div className="text-white flex space-x-7 pr-24 sm:pr-8 xs:pr-4">
            <a href="" className="hover:text-purple-500 hover:underline">
              LOG IN
            </a>
            <a href="">or</a>
            <button>
              <a href="" className="hover:text-purple-500 hover:underline">
                REGISTER
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className=" h-[75vh]  flex items-center justify-center">
        <div className="text-center ">
          <h1 className="text-white font-proxima pb-2">5TH-9TH JANUARY</h1>
          <h1 className="text-white text-6xl sm:text-5xl xs:text-3xl font-bold font-proxima pb-2">
            E-SUMMIT&apos;21
          </h1>
          <h1 className="text-white text-4xl pb-4 sm:text-3xl xs:text-xl font-proxima">
            <span className="font-normal">EMBRACING EVO</span>
            <span className="font-bold">LUTI</span>
            <span className="font-bold ">O</span>
            <span className="font-bold">N</span>
          </h1>
          <div className="flex justify-center">
            <div
              className="text-white font-proxima items-center flex justify-center h-[4vh] w-[40%]"
              style={{
                clipPath:
                  "polygon(8% 0, 100% 0, 100% 65%, 92% 100%, 0 100%, 0 33%)",
                backgroundColor: "rgba(83, 0, 191, 1)",
              }}
            >
              Register Now
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10vh] flex justify-between">
        <div className="text-white ml-24 sm:ml-10 xs:ml-4 w-[18%] sm:w-[24%]">
          <h1 className="font-bold font-proxima  pb-2 mb-2 text-white border-b border-[rgba(83,0,191,1)] ">
            ANNOUNCEMENTS
          </h1>
          <div className="text-white font-proxima xs:text-xs">
            IDEATHON registrations closing on 12 nov
          </div>
        </div>
        <div className="text-white mr-24 sm:mr-10 xs:mr-8 w-[15%] sm:w-[18%]">
          <h1 className="font-bold pb-2 font-proxima mb-2 text-white border-b border-[rgba(83,0,191,1)]">
            FOLLOW US AT
          </h1>
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/ecelliitr/?mibextid=ZbWKwL">
              <img
                src="/Facebook.png"
                className="w-8 h-8 sm:w-6 sm:h-6 xs:w-5 xs:h-5"
                alt="facebook"
              ></img>
            </a>
            <a href="https://instagram.com/ecelliitr?igshid=ZDdkNTZiNTM=">
              <img
                src="/Instagram.png"
                className="w-8 h-8 sm:w-6 sm:h-6 xs:w-5 xs:h-5"
                alt="facebook"
              ></img>
            </a>
            <a href="https://www.linkedin.com/company/ecelliitr/">
              <img
                src="/LinkedIN.png"
                className="w-8 h-8 sm:w-6 sm:h-6 xs:w-5 xs:h-5  "
                alt="facebook"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-[5vh] justify-center item-center">
        <img src="/scroll.png" className="mb-4 animate-bounce"></img>
      </div>
    </div>
  </>
);
}
export default Navbar;