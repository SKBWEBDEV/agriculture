import React from 'react'
import Container from '../container/Container'

import onlyone from "../../assets/onlyone.png"
import onlytwo from "../../assets/onlytwo.png"
import allvagi from "../../assets/allvagi.png"

const Only = () => {
  return (
    <div className='mt-114.75'>

      <div
      style={{backgroundImage: `url(${allvagi})`}}
      className='bg-cover bg-no-repeat py-10 h-[535.5px] relative'>

        <Container>

      <div>

        <div className='flex gap-10 justify-center absolute -top-60 '>
          <div
          style={{backgroundImage: `url(${onlyone})`}}
          className='bg-no-repeat bg-cover w-[570.5px] h-[301.5px] p-13.5'>
            <h1 className='font-primary text-white w-[255.58px] text-[50px] leading-12 mt-5'>Quality Organic Food Store</h1>
            <button className='bg-white px-[49.5px] py-3.5 rounded-lg font-bold mt-7 cursor-pointer'>
              Order Now</button>
          </div>
          <div
          style={{backgroundImage: `url(${onlytwo})`}}
          className='bg-no-repeat bg-cover w-[570.5px] h-[301.5px] p-13.5'>
            <h1 className='font-primary text-white w-[255.58px] text-[50px] leading-12 mt-5'>Quality Organic Food Store</h1>
            <button className='bg-white px-[49.5px] py-3.5 rounded-lg font-bold mt-7 cursor-pointer'>
              Order Now</button>
          </div>
        </div>

      </div>

      <div className=''>
        <h2 className='font-bold text-white mx-auto w-[803.02px] text-[60px] leading-18 mt-40 text-center'>
          Be Healthy & Eat Only Fresh Organic Vagetables</h2>
        <button className='bg-[#4BAF47] block mx-auto text-white  px-[49.5px] py-3.5 rounded-lg font-bold mt-7 cursor-pointer'>
          Order Now</button>
      </div>

      </Container>
      </div>
      
    </div>
  )
}

export default Only
