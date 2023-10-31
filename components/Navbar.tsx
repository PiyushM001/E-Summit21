import React from 'react';
function Navbar(){
return (
  <>
    <div className="h-[10%]">
      <div className="flex justify-between items-center p-6">
        <div className="pl-24 space-x-14 flex ">
          <img src="/logoo.png" className="" />
          <div className="text-white space-x-14 font-bold items-center py-2">
            <a href="" className="hover:text-purple-500 hover:underline">
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
        <div className="text-white space-x-7 pr-24">
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
  </>
);
}
export default Navbar;