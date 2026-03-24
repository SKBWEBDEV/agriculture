import Container from "../container/Container"
import footer from '../../assets/footer.png'
import leaf from '../../assets/leaf.png'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbLetterP } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#24231D]">
      <div className="bg-[#F8F7F0] h-[234.5px] mt-[119.99px]"></div>

      <Container>

        <div className="flex py-[119.99px] justify-between ">

         <div className="">
          <img src={footer} alt="#" />
          <p className="text-[#A5A49A] mt-6 font-medium text-[15px] w-[269.04px]">There are many variations of passages of lorem ipsum available, but the majority suffered.</p>
          <div className="flex gap-7 mt-6 items-center">
          <p className="text-white w-10 h-10 bg-[#1F1E17] rounded-full p-3.5 text-[15px] cursor-pointer"><FaTwitter/></p>
          <p className="text-white w-10 h-10 bg-[#1F1E17] rounded-full p-3.5 text-[15px] cursor-pointer"><FaFacebook/></p>
          <p className="text-white w-10 h-10 bg-[#1F1E17] rounded-full p-3.5 text-[15px] cursor-pointer"><TbLetterP/></p>
          <p className="text-white w-10 h-10 bg-[#1F1E17] rounded-full p-3.5 text-[15px] cursor-pointer"><FaInstagram/></p>
          </div>
         </div>

         <div className="">
          <h2 className="relative inline-block font-bold text-[20px] text-white group cursor-pointer">
              Explore
              <span className="absolute left-0 -bottom-2 h-1 w-full bg-[#4BAF47] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </h2>
          <div className="mt-5">
            <ul>
              <li className="font-medium text-[#A5A49A] gap-5.5 text-[17px] flex items-center 
              mt-2.5"><span><img src={leaf} alt="#" /></span>About</li>
              <li className="font-medium text-[#A5A49A] gap-5.5 text-[17px] flex items-center 
              mt-2.5"><span><img src={leaf} alt="#" /></span>Services</li>
              <li className="font-medium text-[#A5A49A] gap-5.5 text-[17px] flex items-center 
              mt-2.5"><span><img src={leaf} alt="#" /></span>Our Projects</li>
              <li className="font-medium text-[#A5A49A] gap-5.5 text-[17px] flex items-center 
              mt-2.5"><span><img src={leaf} alt="#" /></span>Meet the Farmers</li>
              <li className="font-medium text-[#A5A49A] gap-5.5 text-[17px] flex items-center 
              mt-2.5"><span><img src={leaf} alt="#" /></span>Latest News</li>
              <li className="font-medium text-[#A5A49A] gap-5.5 text-[17px] flex items-center 
              mt-2.5"><span><img src={leaf} alt="#" /></span>Contact</li>
            </ul>
          </div>
         </div>

         <div className="">
          <h2 className="relative inline-block font-bold text-[20px] text-white group cursor-pointer">
              News
              <span className="absolute left-0 -bottom-2 h-1 w-full bg-[#4BAF47] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </h2>

            <div>
              <h4 className="text-white w-[196.31px] font-bold text-[16px] mt-6">Bringing Food Production Back To Cities</h4>
              <p className="text-[#EEC044] font-normal mt-3 text-[15px]">Mar 17, 2026</p>

              <h4 className="text-white w-[196.31px] font-bold text-[16px] mt-6">The Future of Farming, Smart Irrigation Solutions</h4>
              <p className="text-[#EEC044] font-normal mt-3 text-[15px]">Mar 17, 2026</p>
            </div>

         </div>

         <div className="">
          <h2 className="relative inline-block font-bold text-[20px] text-white group cursor-pointer">
              Contact
              <span className="absolute left-0 -bottom-2 h-1 w-full bg-[#4BAF47] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </h2>
            <div className="flex gap-5 items-center mt-5">
              <p className="text-[#EEC044] text-[15px] font-medium"><FaPhoneAlt /></p>
              <p className="text-[#A5A49A] text-[15px] font-medium">666 888 0000</p>
            </div>
            <div className="flex gap-5 items-center mt-5">
              <p className="text-[#EEC044] text-[15px] font-medium"><FaEnvelope /></p>
              <p className="text-[#A5A49A] text-[15px] font-medium">needhelp@company.com</p>
            </div>
            <div className="flex gap-5 items-center mt-5">
              <p className="text-[#EEC044] text-[15px] font-medium"><FaLocationDot /></p>
              <p className="text-[#A5A49A] text-[15px] font-medium">80 broklyn golden street line New York, USA</p>
            </div>

            <div className="mt-10 relative">
              <input className="bg-white outline-0 py-4 w-85 px-5 rounded-lg" type="text" placeholder="Your Email Address"/>
              <div className="absolute top-0 right-0 bg-[#4BAF47] rounded-tr-lg rounded-br-lg w-15 
              h-14"><p className="text-[30px] p-4 text-white cursor-pointer"><IoIosSend/></p></div>
            </div>

         </div>

        </div>

      </Container>
      
    </div>
  )
}

export default Footer
