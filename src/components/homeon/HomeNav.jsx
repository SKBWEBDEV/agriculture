import Container from '../container/Container'
import React, { useState } from 'react'
import { Link } from 'react-router';
import { IoIosArrowDown } from "react-icons/io";
import { RiFindReplaceLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import homelogo from "../../assets/homelogo.png"
const HomeNav = () => {

      const [drop, setDrop] = useState(false);
    const [dropo, setDropo] = useState(false);
    const [dropon, setDropon] = useState(false);
    const [dropone, setDropone] = useState(false);
    const [dro, setDro] = useState(false);

  return (
    <div>

      <Container>

           <div className="py-5">
        <Container>
          <div className="flex justify-between ">
            <div><img src={homelogo} alt="" /></div>
            <div className="flex justify-around w-full z-10">
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#878680] hover:text-black duration-300"
                  onClick={() => setDrop(!drop)}>
                  <Link to="/">Home</Link>{" "}
                  <span className="text-[18px] mt-2">
                    <IoIosArrowDown />
                  </span>
                </p>
                {drop && (
                  <ul className="absolute mt-2 w-40 bg-white shadow-md rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link to= "/homeone">Home 1</Link>
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
                  <li className="cursor-pointer  text-[20px] font-semibold text-[#878680] hover:text-black duration-300">
                    <Link to="/abo">About</Link>
                  </li>
                </ul>
              </div>
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#878680] hover:text-black duration-300"
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
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#878680] hover:text-black duration-300"
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
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#878680] hover:text-black duration-300"
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
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#878680] hover:text-black duration-300"
                  onClick={() => setDropone(!dropone)}>
                  <Link to="/shop">Shop</Link>
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
                <p className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#878680] hover:text-black duration-300">
                  <Link to="/contact">Contact</Link>
                </p>
              </div>
            </div>

            <div>
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
        </Container>
      </div>

      </Container>
      
    </div>
  )
}

export default HomeNav
