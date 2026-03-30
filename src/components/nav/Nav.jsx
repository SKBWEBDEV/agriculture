import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import skb from "../../assets/skb.png";
import Container from "../container/Container";
import { Link } from "react-router";
import { RiFindReplaceLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

import logo from "../../assets/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbCircleLetterPFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

// import {Link} from "react-router"

const Nav = () => {
  const [drop, setDrop] = useState(false);
  const [dropo, setDropo] = useState(false);
  const [dropon, setDropon] = useState(false);
  const [dropone, setDropone] = useState(false);
  const [dro, setDro] = useState(false);

  return (
    <div>
      <Container>
        <div className="py-5.5 flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>

          <div className="flex gap-2.5">
            <p className="bg-[#E4E2D7] px-3.25 py-3.5 rounded-full cursor-pointer">
              <FaTwitter />
            </p>
            <p className="bg-[#E4E2D7] px-3.25 py-3.5 rounded-full cursor-pointer">
              <FaFacebook />
            </p>
            <p className="bg-[#E4E2D7] px-3.25 py-3.5 rounded-full cursor-pointer">
              <TbCircleLetterPFilled />
            </p>
            <p className="bg-[#E4E2D7] px-3.25 py-3.5 rounded-full cursor-pointer">
              <FaInstagram />
            </p>
          </div>

          <div className="flex items-center gap-5">
            <p className="text-[#4BAF47]">
              <FaPhoneVolume className="w-7.5 h-7.5" />
            </p>
            <div>
              <p className="text-[#878680] font-semibold text-[12px]">
                Call anytime
              </p>
              <p className="text-[#1F1E17] font-semibold text-[14px]">
                + 98 (000) - 9630
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <p className="text-[#4BAF47]">
              <FaEnvelopeOpenText className="w-7.5 h-7.5" />
            </p>
            <div>
              <p className="text-[#878680] font-semibold text-[12px]">
                Send email
              </p>
              <p className="text-[#1F1E17] font-semibold text-[14px]">
                ambed@agrios.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <p className="text-[#4BAF47]">
              <FaLocationDot className="w-7.5 h-7.5" />
            </p>
            <div>
              <p className="text-[#878680] font-semibold text-[12px]">
                380 St Kilda Road
              </p>
              <p className="text-[#1F1E17] font-semibold text-[14px]">
                Melbourne, Australia
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div
        className="h-18 absolute  left-0 z-10 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${skb})` }}>
        <Container>
          <div className="flex justify-between py-3">
            <div className="flex justify-around w-full">
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
    </div>
  );
};

export default Nav;
