import React from 'react'
import Container from '../container/Container'

import hand from "../../assets/hand.png"
import trac from "../../assets/trac.png"
import Icon from "../../assets/Icon.png"
import Ic from "../../assets/Ic.png"

import { IoIosCheckmarkCircle } from "react-icons/io";


const Organic = () => {
  return (
    <div className='mt-100'>


      <Container>


        <div className='flex justify-between'>
          <div>

            <div className='absolute'>
              <img className='rounded-full' src={trac} alt="#" />
            </div>
            <div className='relative left-0 bottom-[-400.1px]'>
              <img className='rounded-full' src={hand} alt="#" />
            </div>
            
          </div>


          <div>
            
            <div>
              <p className='font-normal text-[24px] text-[#EEC044] font-primary'>Our Introductions</p>
              <h1 className='leading-15 font-extrabold text-[48px] font-[#1F1E17] w-[515.37px]'>Agriculture & Organic Product Farm</h1>
              <h3 className='mt-[33.1px] font-extrabold text-[#4BAF47] text-[26px]'>Agrios is the largest global organic farm.</h3>
              <p className='mt-[33.1px] w-[526.62px] font-medium text-[16px] text-[#878680]'>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.</p>

              <div className='flex mt-[40.99px] gap-[44.97px]'>
                <div className='flex gap-[19.99px]'>
                  <img src={Icon} alt="" />
                  <p className='font-extrabold text-[20px] text-[#1F1E17] w-[145.03px] 
                  items-center '>Growing fruits vegetables</p>
                </div>

                <div className='flex gap-[19.99px]'>
                  <img src={Ic} alt="" />
                  <p className='font-extrabold text-[20px] text-[#1F1E17] w-[145.03px] 
                  items-center '>Growing fruits vegetables</p>
                </div>               
              </div>

              <div className='mt-[35.5px]'>
                <p className='flex items-center mt-5 gap-3'>
                  <span className='text-[#C5CE38]'><IoIosCheckmarkCircle /></span> Lorem Ipsum is not simply random text.</p>
                <p className='flex items-center mt-5 gap-3'>
                  <span className='text-[#C5CE38]'><IoIosCheckmarkCircle /></span> Making this the first true generator on the internet.</p>
              </div>

              <button className='bg-[#4BAF47] px-[49.99px] py-[14.99px] rounded-lg text-white font-bold 
              text-[14px] cursor-pointer mt-10' type="button">Discover More</button>

            </div>

          </div>
          


        </div>


      </Container>


    </div>
  )
}

export default Organic