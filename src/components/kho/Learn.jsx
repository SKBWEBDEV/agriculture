import faq from "../../assets/faq.png"
import f from "../../assets/f.png"
import aq from "../../assets/aq.png"
import agr from "../../assets/agr.png"
import hello from "../../assets/hello.png" 
import Container from "../container/Container"


import { RiFindReplaceLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

import { HiShoppingCart } from "react-icons/hi2";


const Learn = () => {

      const [drop, setDrop] = useState(false);
      const [dropo, setDropo] = useState(false);
      const [dropon, setDropon] = useState(false);
      const [dropone, setDropone] = useState(false);
      const [dro, setDro] = useState(false);

  return (
    <div className='bg-[#E9F1EE] py-10 mt-20 h-[846.67px]'>

      <Container>

        <div className="flex justify-between items-center">

          <div className="relative">
              <div className="">
              <img src={faq} alt="#" />
              </div>
              <div className="absolute flex items-center bottom-0 left-0">
                <img src={f} alt="" />
                <img src={aq} alt="#" />
              </div>
          </div>

          <div>
            <h1 className="text-[#04000B] font-semibold text-[50px] w-[408.26px] leading-14">
              Learn more about growing process</h1>
              <p className="text-[#04000B] font-semibold text-[18px] mt-[35.5px]">What do you add to the soil before you plant?</p>
              <span className="bg-black w-[500.5px] inline-block h-px"></span>
              <p className="text-[#666666] font-semibold text-[16px] mt-[10.5px] w-[511.11px]">Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.</p>
              <p className="text-[#04000B] font-semibold text-[16px] mt-[10.5px]">Do you use herbicides?</p>
              <span className="bg-black w-[500.5px] inline-block h-px"></span>

              <p className="text-[#04000B] font-semibold text-[16px] mt-[10.5px]">
                Where does the water come on your crops?</p>
              <span className="bg-black w-[500.5px] inline-block h-px"></span>
          </div>

        </div>

      </Container>

      <div className="bg-white  py-15 mt-[14.63px]  relative">

       <div className="bg-[#49A760] w-[307.5px] h-[160.5px] ml-[50.1px] absolute top-0 left-0">
          <img className="px-15 py-13" src={agr} alt="" />
        </div>
        <div className="absolute -bottom-[50.9px] left-89">
          <img className="" src={hello} alt="#" />
        </div>
{/* ------------------------------------------------------------------------------------------------- */}

        <div className="flex gap-8 py-3 text-black absolute top-8 left-[547.48px]">
            <div className="flex gap-[50.66px]">
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold  duration-300"
                  onClick={() => setDrop(!drop)}>
                  <Link to="/">Home</Link>{" "}
                  <span className="text-[18px] mt-2">
                    <IoIosArrowDown />
                  </span>
                </p>
                {drop && (
                  <ul className="absolute mt-2 w-40 bg-white shadow-md rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Home 1
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Home 2
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Home 3
                    </li>
                  </ul>
                )}
              </div>
              <div>
                <ul>
                  <li className="cursor-pointer  text-[20px] font-semibold  duration-300">
                    <Link to="/abo">About</Link>
                  </li>
                </ul>
              </div>
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold   duration-300"
                  onClick={() => setDropo(!dropo)}>
                  <Link to="/service">Services</Link>
                  <span className="text-[18px] mt-2">
                    <IoIosArrowDown />
                  </span>
                </p>
                {dropo && (
                  <ul className="absolute mt-2 w-40 bg-white shadow-md rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Services 1
                    </li>

                  </ul>
                )}
              </div>
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold   duration-300"
                  onClick={() => setDro(!dro)}>
                  <Link to= "/project">Project</Link>
                  <span className="text-[18px] mt-2">
                    <IoIosArrowDown />
                  </span>
                </p>

                {dro && (
                  <ul className="absolute mt-2 w-40 bg-white shadow-md rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link to = "/helthfood">helth-food</Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold  duration-300"
                  onClick={() => setDropon(!dropon)}>
                  <Link to="/news">News</Link>
                  <span className="text-[18px] mt-2">
                    <IoIosArrowDown />
                  </span>
                </p>

                {dropon && (
                  <ul className="absolute mt-2 w-40 bg-white shadow-md rounded-md">

                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      News-grid
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      News-details
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold   duration-300"
                  onClick={() => setDropone(!dropone)}>
                  Shop{" "}
                  <span className="text-[18px] mt-2">
                    <IoIosArrowDown />
                  </span>
                </p>
                {dropone && (
                  <ul className="absolute mt-5 w-40 bg-white shadow-md rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Shop-details
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="text-white">
              <div className="flex gap-4">
                <p className="w-12 h-12 text-[35px] cursor-pointer">
                  <RiFindReplaceLine />
                </p>
                <p className="w-6 h-6 text-[35px] cursor-pointer">
                  <FaShoppingCart />
                </p>
              </div>
            </div>
        </div>
{/* ------------------------------------------------------------------------------------------------- */}
         
         <div className="absolute right-0 top-10 flex items-center gap-20">
          <p className="bg-[#CFE6FF] cursor-pointer text-[20px] w-12.5 h-12.5 
          rounded-full py-4 px-4"><HiShoppingCart /></p>
          <button className="border-amber-500 border-3 px-10 py-3 rounded-full font-bold text-[20px] cursor-pointer mr-[50.1px]">
            Register</button>
         </div>
         
      </div>

       
      
    </div>
  )
}

export default Learn
