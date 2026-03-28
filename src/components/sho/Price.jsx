import { MdOutlineArrowDropDown } from "react-icons/md";
import Container from '../container/Container'
import { FaRegCircle } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

import aple from "../../assets/aple.png"
import ban from "../../assets/ban.png"
import carr from "../../assets/carr.png"
import garl from "../../assets/garl.png"
import grap from "../../assets/grap.png"
import lett from "../../assets/lett.png"
import onio from "../../assets/onio.png"
import pot from "../../assets/pot.png"
import red from "../../assets/red.png"


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Price = () => {



  return (
    <div className='py-30'>

      <Container>

      <div className='flex justify-between'>

        <div className="flex items-center gap-7.5">
          <div>
            <input className='w-67.5 h-19 rounded-lg py-7 px-5 bg-[#EEC044] text-white outline-0' 
            type="text" placeholder='Search products…'/>
          </div>
          <div>
            <p className='text-[#878680] font-normal text-[18px]'>Showing 1–9 of 10 results</p>
          </div>
        </div>

        <div className="">
          <button className='border-[#ECE7E2] border w-67.5 h-19 rounded-lg py-7 cursor-pointer flex items-center justify-around text-[#878680]'>
            Default sorting <span className="text-[20px]"><MdOutlineArrowDropDown /></span></button>
            
        </div>

      </div>


      {/* ==================================================================================== */}


      <div className="flex justify-around mt-7.5">
    
    <div>
      <div className="border-[#ECE7E2] border w-67.5 h-42 rounded-lg py-5.5 px-8 ">
      <h2 className="text-[#1F1E17] font-bold text-[20px]">Price</h2>

      <div className="bg-[#EEC044] w-50 h-1.5 relative mt-5">
        <p className="absolute -left-3.5 -top-1.5 font-bold "><FaRegCircle /></p>
        <p className="absolute -right-3.5 -top-1.5 font-bold "><FaRegCircle /></p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-[#878680] font-normal text-[14px]">$20 - $100</p>
        <button className="w-[78.41px] h-10 bg-[#4BAF47] rounded-lg py- cursor-pointer text-[#ffff]">
          Apply
        </button>
      </div>

     </div>

     <div className="border-[#ECE7E2] border w-67.5 h-76.25 rounded-lg py-5.5 px-8 mt-7.5">

      <h2 className="text-[#1F1E17] font-bold text-[20px]">Categories</h2>
      <p className="flex items-center justify-between mt-4 text-[#878680] cursor-pointer">Agriculture<span>
        <IoIosArrowForward /></span></p>
      <p className="flex items-center justify-between mt-6 text-[#878680] cursor-pointer">Farming<span>
        <IoIosArrowForward /></span></p>
      <p className="flex items-center justify-between mt-6 text-[#878680] cursor-pointer">Fresh Vegatables<span>
        <IoIosArrowForward /></span></p>
      <p className="flex items-center justify-between mt-6 text-[#878680] cursor-pointer">Harvest<span>
        <IoIosArrowForward /></span></p>
      <p className="flex items-center justify-between mt-6 text-[#878680] cursor-pointer">Organic Food<span>
        <IoIosArrowForward /></span></p>
     </div>
     
    </div>


      <div className="w-200">

<Swiper
  modules={[Navigation]}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
>
        <SwiperSlide>
          <div className=" flex gap-8">
                 <div>
      <img src={aple} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Apple</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$50.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>

      <img className="mt-10" src={garl} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Garlic</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$20.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>

      <img className="mt-10" src={onio} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Onions</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$20.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>
     </div>

{/* ---------------------------------------------------------------------------- 2*/}

      <div>
       <img src={ban} alt="#" />
       <div className="flex items-center gap-[95.28px] text-center">
         <div>
           <h2 className="text-[#1F1E17] font-bold text-[20px]">Bananas</h2>
         <p className="text-[#4BAF47] font-bold text-[16px]">$20.00</p>
         </div>
         <p className="text-[#F5AD0D]"><FaStar /></p>
       </div>

       <img className="mt-10" src={grap} alt="#" />
       <div className="flex items-center gap-[95.28px] text-center">
         <div>
           <h2 className="text-[#1F1E17] font-bold text-[20px]">Grapes</h2>
         <p className="text-[#4BAF47] font-bold text-[16px]">$100.00</p>
         </div>
         <p className="text-[#F5AD0D]"><FaStar /></p>
       </div>

       <img className="mt-10" src={pot} alt="#" />
       <div className="flex items-center gap-[95.28px] text-center">
         <div>
           <h2 className="text-[#1F1E17] font-bold text-[20px]">Potatos</h2>
         <p className="text-[#4BAF47] font-bold text-[16px]">$30.00</p>
         </div>
         <p className="text-[#F5AD0D]"><FaStar /></p>
       </div>
     </div>

{/* ------------------------------------------------------------------------------------- 3*/}

      <div>
      <img src={carr} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Carrot</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$50.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>

      <img className="mt-10" src={lett} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Lettuce</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$30.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>

      <img className="mt-10" src={red} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Red Grapes</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$100.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>
     </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex gap-8 ">
                 <div>
      <img src={aple} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Apple</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$50.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>

      <img className="mt-10" src={garl} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Garlic</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$20.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>

      <img className="mt-10" src={onio} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Onions</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$20.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>
     </div>

{/* ---------------------------------------------------------------------------- 2*/}

      <div>
       <img src={ban} alt="#" />
       <div className="flex items-center gap-[95.28px] text-center">
         <div>
           <h2 className="text-[#1F1E17] font-bold text-[20px]">Bananas</h2>
         <p className="text-[#4BAF47] font-bold text-[16px]">$20.00</p>
         </div>
         <p className="text-[#F5AD0D]"><FaStar /></p>
       </div>

       <img className="mt-10" src={grap} alt="#" />
       <div className="flex items-center gap-[95.28px] text-center">
         <div>
           <h2 className="text-[#1F1E17] font-bold text-[20px]">Grapes</h2>
         <p className="text-[#4BAF47] font-bold text-[16px]">$100.00</p>
         </div>
         <p className="text-[#F5AD0D]"><FaStar /></p>
       </div>

       <img className="mt-10" src={pot} alt="#" />
       <div className="flex items-center gap-[95.28px] text-center">
         <div>
           <h2 className="text-[#1F1E17] font-bold text-[20px]">Potatos</h2>
         <p className="text-[#4BAF47] font-bold text-[16px]">$30.00</p>
         </div>
         <p className="text-[#F5AD0D]"><FaStar /></p>
       </div>
     </div>

{/* ------------------------------------------------------------------------------------- 3*/}

      <div>
      <img src={carr} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Carrot</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$50.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>

      <img className="mt-10" src={lett} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Lettuce</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$30.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>

      <img className="mt-10" src={red} alt="#" />
      <div className="flex items-center gap-[95.28px] text-center">
        <div>
          <h2 className="text-[#1F1E17] font-bold text-[20px]">Red Grapes</h2>
        <p className="text-[#4BAF47] font-bold text-[16px]">$100.00</p>
        </div>
        <p className="text-[#F5AD0D]"><FaStar /></p>
      </div>
     </div>
          </div>
        </SwiperSlide>

        <div className="flex justify-center gap-6 mt-8">
  <button className="custom-prev px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition shadow-md hover:-translate-y-1">
    ⬅ Prev
  </button>

  <button className="custom-next px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition shadow-md hover:-translate-y-1">
    Next ➡
  </button>
</div>
     

      </Swiper>

      {/* 🔥 Custom Buttons */}
      

      </div>

      </div>


    

    

      </Container>
      
    </div>
  )
}

export default Price
