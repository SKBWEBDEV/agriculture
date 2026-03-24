import React from 'react'
import Container from '../container/Container'
import element from '../../assets/elements7.png'
import { IoTriangle } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";


const Market = () => {
  return (
    <div className='py-35'>

      <Container>

        <div className='flex gap-15 '>

          <div className="w-[699.98px] h-[733.97px] relative" 
          style={{backgroundImage: `url(${element})`}}>
            <div className="bg-[#EEC044] w-[305.99px] rounded-lg py-7.5 absolute right-[84.99px] mt-[168.83px] ">
              <h3 className='text-white font-normal pl-[139.99px] text-[30px] font-primary w-[125.02px] '>
                Agriculture Professional Leader</h3>
                <p className='absolute bottom-[-15.99px] right-[-10.50px] text-[#EEC044] text-[40px] rotate-35'><IoTriangle /></p>
            </div>
          </div>

          <div className="">
            <p className='text-[#EEC044] font-normal text-[24px] font-primary'>Our Farm Benefits</p>
            <h1 className='text-[#1F1E17] font-bold text-[48px] w-[458.38px] leading-14'>Why Choose Agrios Market</h1>
            <p className='text-[#878680] font-normal text-[16px] w-[441.19px] mt-7.5'>There are many variations of passages of available but the majortity have sufferred alteration in some form by injected humor or random word which don't look even.</p>

            <div className="flex gap-5 mt-7.5 items-center">
              <div className='text-[#4BAF47] text-[40px]'><FaCircleCheck /></div>
              <div>
                <h4 className='font-bold text-[24px] text-[#1F1E17] '>Quality Organic Food</h4>
                <p className='text-[#878680] font-normal text-[16px] w-[349.99px]'>There are variation You need to be sure there is anything hidden in the middle of text.</p>
              </div>
            </div>

            <div className="flex gap-5 items-center mt-7.5">
              <div className='text-[#C5CE38] text-[40px]'><FaCircleCheck /></div>
              <div>
                <h4 className='font-bold text-[24px] text-[#1F1E17] '>Quality Organic Food</h4>
                <p className='text-[#878680] font-normal text-[16px] w-[349.99px]'>There are variation You need to be sure there is anything hidden in the middle of text.</p>
              </div>
            </div>

            <div className="flex gap-5 items-center mt-7.5">
              <div className='text-[#EEC044] text-[40px]'><FaCircleCheck /></div>
              <div>
                <h4 className='font-bold text-[24px] text-[#1F1E17] '>Quality Organic Food</h4>
                <p className='text-[#878680] font-normal text-[16px] w-[349.99px]'>There are variation You need to be sure there is anything hidden in the middle of text.</p>
              </div>
            </div>

            <button className='bg-[#4BAF47] text-white font-bold rounded-lg cursor-pointer mt-[80.5px] text-[20px] px-[25.50px] py-[14.50px]'>Discover More</button>


          </div>

        </div>

      </Container>
      
    </div>
  )
}

export default Market
