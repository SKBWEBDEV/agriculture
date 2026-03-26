import banner from "../../assets/banner.png"
import footer from "../../assets/footer.png"


import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbCircleLetterPFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { RiFindReplaceLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Navban = () => {

    const [drop, setDrop] = useState(false);
    const [dropo, setDropo] = useState(false);
    const [dropon, setDropon] = useState(false);
    const [dropone, setDropone] = useState(false);
    const [dro, setDro] = useState(false);

  return (
    <div className="h-250 bg-cover bg-no-repeat w-full"
    style={{backgroundImage: `url(${banner})`}}>

      <div className="">
        <div className="w-457.5 mx-auto flex justify-between items-center px-[44.5px] py-7.5">

        <div>
          <img src={footer} alt="" />
        </div>

        <div className="flex gap-6">
          <p className="text-white bg-[#FFFFFF]/15 w-10 h-10 py-3.25 px-3.25 rounded-full cursor-pointer"><FaTwitter/></p>
          <p className="text-white bg-[#FFFFFF]/15 w-10 h-10 py-3.25 px-3.25 rounded-full cursor-pointer"><FaFacebook/></p>
          <p className="text-white bg-[#FFFFFF]/15 w-10 h-10 py-3.25 px-3.25 rounded-full cursor-pointer"><TbCircleLetterPFilled/></p>
          <p className="text-white bg-[#FFFFFF]/15 w-10 h-10 py-3.25 px-3.25 rounded-full cursor-pointer"><FaInstagram/></p>
        </div>

        <div className="flex gap-8 py-3 ">
            <div className="flex gap-[50.66px]">
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#ffff]  duration-300"
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
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Home 4
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Home 5
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Home 6
                    </li>
                  </ul>
                )}
              </div>
              <div>
                <ul>
                  <li className="cursor-pointer  text-[20px] font-semibold text-[#ffff] duration-300">
                    <Link to="/abo">About</Link>
                  </li>
                </ul>
              </div>
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#ffff]  duration-300"
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
                    {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Services 2
                    </li> */}
                  </ul>
                )}
              </div>
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#ffff]  duration-300"
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
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#ffff]  duration-300"
                  onClick={() => setDropon(!dropon)}>
                  <Link to="/news">News</Link>
                  <span className="text-[18px] mt-2">
                    <IoIosArrowDown />
                  </span>
                </p>

                {dropon && (
                  <ul className="absolute mt-2 w-40 bg-white shadow-md rounded-md">
                    {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      News
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      News list
                    </li> */}
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
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#ffff]  duration-300"
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
              <div className="relative inline-block">
                <p className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#ffff]  duration-300">
                  <Link to="/contact">Contact</Link>
                </p>
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

      </div>
      </div>


    </div>
  )
}

export default Navban
