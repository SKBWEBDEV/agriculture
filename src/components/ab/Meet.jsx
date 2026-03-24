import React from 'react'
import Container from '../container/Container'
import meetone from "../../assets/meetone.png"
import meetwo from "../../assets/meetwo.png"
import meethree from "../../assets/meethree.png"
import span from "../../assets/span.png"

const Meet = () => {
  return (
    <div className='py-25'>

      <Container>

        <div className='text-center'>
          <p className='text-[#EEC044] font-primary text-[24px] font-medium'>Team Members</p>
          <h1 className='text-[#1F1E17] font-bold text-[48px]'>Meet Our Farmers</h1>
          <div className='flex justify-between mt-10'>

          <div className='relative '>
            <img src={meetone} alt="" className='rounded-br-lg'/>
            <div className='bg-white rounded-lg w-[245.5px] h-[92.5px] shadow-lg absolute bottom-0 right-0 py-5'>
              <h4 className='text-[#1F1E17] font-bold text-[20px]'>Kevin Smith</h4>
              <p className='text-[#878680] font-normal text-[16px]'>Farmer</p>
            </div>
            <div className='absolute bottom-5 left-25'>
              <img src={span} alt="" />
            </div>
          </div>

          <div className='relative '>
            <img src={meetwo} alt="" className='rounded-br-lg'/>
            <div className='bg-white rounded-lg w-[245.5px] h-[92.5px] shadow-lg absolute bottom-0 right-0 py-5'>
              <h4 className='text-[#1F1E17] font-bold text-[20px]'>Kevin Smith</h4>
              <p className='text-[#878680] font-normal text-[16px]'>Farmer</p>
            </div>
            <div className='absolute bottom-5 left-25'>
              <img src={span} alt="" />
            </div>
          </div>

          <div className='relative '>
            <img src={meethree} alt="" className='rounded-br-lg'/>
            <div className='bg-white rounded-lg w-[245.5px] h-[92.5px] shadow-lg absolute bottom-0 right-0 py-5'>
              <h4 className='text-[#1F1E17] font-bold text-[20px]'>Kevin Smith</h4>
              <p className='text-[#878680] font-normal text-[16px]'>Farmer</p>
            </div>
            <div className='absolute bottom-5 left-25'>
              <img src={span} alt="" />
            </div>
          </div>

          
          
        </div>
        </div>

      </Container>
      
    </div>
  )
}

export default Meet
