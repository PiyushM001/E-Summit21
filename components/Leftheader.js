import React from "react";
import { Divider } from "@mui/material";
function Leftheader({Logclose}){
return (
  <>
    <div
      className=" h-[100vh] ease-in-out duration-300"
      style={{ background: "rgb(26,12,44)", width: "250px" }}
    >
      <ul className="space-y-4 mt-10 ml-5" onClick={() => Logclose()}>
        <li className="flex items-center ">
          <img src="/logoo.png" className=" " alt="" />
        </li>
        <Divider className="bg-white mr-5" />
        <li className=" ">
          <a href="" className="text-white text-2xl font-bold">
            HOME
          </a>
        </li>
        <Divider className="bg-white mr-5" />
        <li>
          <a href="" className="text-white text-2xl font-bold">
            THEME
          </a>
        </li>
        <Divider className="bg-white mr-5" />
        <li>
          <a href="" className="text-white text-2xl font-bold">
            EVENTS
          </a>
        </li>
        <Divider className="bg-white mr-5" />
        <li>
          <a href="" className="text-white text-2xl font-bold">
            SPEAKERS
          </a>
        </li>
        <Divider className="bg-white mr-5" />
        <li>
          <a href=" " className="text-white text-2xl font-bold">
            SPONSORS
          </a>
        </li>
        <Divider className="bg-white mr-5" />
        <li>
          <a href="" className="text-white text-2xl font-bold">
            CAMPUS AMBASSADORS
          </a>
        </li>

        <Divider className="bg-white mr-5" />
        <li className="l:hidden el:hidden sm:hidden mid:hidden ">
          <a
            href=""
            className="text-white text-2xl font-bold  sm:hidden mid:hidden "
          >
            LOGIN
          </a>
        </li>
        <Divider className="bg-white mr-5  sm:hidden mid:hidden" />
        <li className=" sm:hidden mid:hidden ">
          <a
            href=""
            className="text-white text-2xl font-bold sm:hidden mid:hidden "
          >
            REGISTER
          </a>
        </li>
        <Divider className="bg-white mr-5 sm:hidden mid:hidden" />
      </ul>
    </div>
  </>
);
}
export default Leftheader;