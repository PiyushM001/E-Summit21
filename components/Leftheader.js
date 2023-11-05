import React from "react";
import { Divider } from "@mui/material";
function Leftheader({Logclose}){
return (
  <>
    <div
      className=" h-[100vh] ease-in-out duration-300"
      style={{ background: "rgba(83, 29, 163, 1)",width:"250px" }}
    >
      <ul className="space-y-4 mt-10 ml-5" onClick={() => Logclose()}>
        <li className="flex items-center ">
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
      </ul>
    </div>
  </>
);
}
export default Leftheader;