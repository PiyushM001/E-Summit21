import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Leftheader from "./Leftheader"
import { useState } from "react";
export default function EventIndex() {
     const [dropen, setDropen] = useState(false);
     const handleopen = () => {
       setDropen(true);
     };
     const handledrclose = () => {
       setDropen(false);
     };
  return (
    <>
      <div
        className="bg bg-cover w-full min-h-screen"
        style={{ background: "rgb(26,12,44)" }}
      >
        <div className="h-[10vh] p-6 text-white">
          <IconButton
            className="l:hidden el:hidden left-16 absolute top-7 xs:left-4 sm:left-10"
            onClick={handleopen}
          >
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Drawer open={dropen} onClose={handledrclose}>
            <Leftheader Logclose={handledrclose} />
          </Drawer>
          <div className=" flex  justify-between items-center mx-auto ">
            <div className=" mid:hidden sm:hidden xs:hidden pl-16 l:pl-8 sm:pl-8 xs:pl-4 space-x-8 l:space-x-4 flex ">
              <img src="/logoo.png" alt="" className="w-36 h-12" />
              <div className="nav-subitem text-white flex space-x-12 l:space-x-6 font-bold items-center py-2">
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
            <div className="xs:hidden text-white mid:absolute sm:absolute mid:right-10 top-9 xs:right-6 sm:right-6 flex space-x-3 l:pr-16 el:pr-16 ">
              <a href="" className="hover:text-purple-500 hover:underline">
                LOGIN
              </a>
              <a href="" className="">
                or
              </a>
              <button
                className="text-purple-500 bg-white h-[3vh]"
                style={{
                  clipPath:
                    "polygon(8% 0, 100% 0, 100% 65%, 92% 100%, 0 100%, 0 33%)",
                  width: "50%",
                }}
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
        <div
          className="h-[68vh] items-center flex  opacity-[0.75] justify-center"
          style={{
            backgroundImage: "url(/building.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div>
            <h1 className="text-white xs:text-2xl text-4xl flex justify-center font-bold font-proxima">
              IDEASTORM
            </h1>
            <div className="text-white mb-4 text-2xl flex-wrap flex justify-center px-40 sm:px-12 sm:text-sm xs:text-xs xs:px-8 font-proxima">
              Do you have an idea that can change the way people use
              smartphones? Present it here and get your idea to the current top
              investors of the country so they can invest in it. Fun, right?
            </div>
            <div className="flex justify-center">
              <div
                className="text-white font-proxima border border-white border-2   items-center font-bold flex justify-center h-[5vh] w-[15%] p-2"
                style={{
                  clipPath:
                    "polygon(8% 0, 100% 0, 100% 65%, 92% 100%, 0 100%, 0 33%)",
                 
                }}
              >
                APPLY NOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );}
