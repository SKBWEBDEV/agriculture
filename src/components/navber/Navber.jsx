import skb from "../../assets/skb.png";
import ele from "../../assets/ele.png";
import elem from "../../assets/elem.png";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import Container from "../container/Container";
import { IoIosArrowDown } from "react-icons/io";
import { RiFindReplaceLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

import { Link } from "react-router";

const Navber = () => {
  const [drop, setDrop] = useState(false);
  const [dropo, setDropo] = useState(false);
  const [dropon, setDropon] = useState(false);
  const [dropone, setDropone] = useState(false);
  const [dro, setDro] = useState(false);

  return (
    <div>
      <div
        className="h-18 absolute top-25 left-0 z-10 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${skb})` }}>
        <Container>
          <div className="flex justify-between py-3">
            <div className="flex justify-around w-full">
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#878680] hover:text-black duration-300"
                  onClick={() => setDrop(!drop)}>
                  Home{" "}
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
                  <li className="cursor-pointer  text-[20px] font-semibold text-[#878680] hover:text-black duration-300">
                    <Link to="/abo">About</Link>
                  </li>
                </ul>
              </div>
              <div className="relative inline-block">
                <p
                  className="cursor-pointer gap-3 flex text-[20px] items-center font-semibold text-[#878680] hover:text-black duration-300"
                  onClick={() => setDropo(!dropo)}>
                  <Link to="/abo">Services</Link>
                  <span className="text-[18px] mt-2">
                    <IoIosArrowDown />
                  </span>
                </p>
                {dropo && (
                  <ul className="absolute mt-2 w-40 bg-white shadow-md rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      List
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Grid
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Helt-food
                    </li>
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
                      helt-food
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

      <div
        className="py-90.25 mt-15 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${ele})` }}>
        <Container>
          <div className="absolute">
            <p className="text-white font-semibold text-[16px]">
              WELCOME TO AGRIOS FARMING
            </p>
            <h1
              className="text-white mt-2 leading-none font-normal text-[120px] font-primary 
            w-[655.74px]">
              Agriculture <span className="text-[#EEC044]">&</span> Eco Farming
            </h1>
            <p className="text-white font-normal text-[16px] w-131 mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="flex items-center gap-4">
              <button
                className="text-white font-semibold text-[14px]  mt-13 py-3.5 px-12.5 rounded-lg 
            bg-green-600 cursor-pointer">
                Discover More
              </button>
              <img className="w-28 h-13 mt-14" src={elem} alt="" />
            </div>
          </div>

          <div className="flex  relative justify-between -bottom-150 ">
            <div className="bg-white text-center shadow-xl/20 rounded-lg px-22.5 py-15 w-92.5 h-80  left-0">
              <h5 className="font-normal text-[24px] text-[#EEC044] font-primary">
                Feature 01
              </h5>
              <h3 className="font-extrabold mt-7.25 text-[24px] text-[#1F1E17] leading-7 w-47">
                We're using a new technology
              </h3>
              <img className="mx-auto mt-3" src={one} alt="#" />
            </div>

            <div className="bg-white shadow-xl/20 text-center  rounded-lg px-22.5 py-15 w-92.5 h-80  left-0">
              <h5 className="font-normal text-[24px] text-[#EEC044] font-primary">
                Feature 01
              </h5>
              <h3 className="font-extrabold mt-7.25 text-[24px] text-[#1F1E17] leading-7 w-47">
                We're using a new technology
              </h3>
              <img className="mx-auto mt-3" src={two} alt="#" />
            </div>

            <div className="bg-white shadow-xl/20 text-center  rounded-lg px-22.5 py-15 w-92.5 h-80  left-0">
              <h5 className="font-normal text-[24px] text-[#EEC044] font-primary">
                Feature 01
              </h5>
              <h3 className="font-extrabold mt-7.25 text-[24px] text-[#1F1E17] leading-7 w-47">
                We're using a new technology
              </h3>
              <img className="mx-auto mt-3" src={three} alt="#" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navber;
