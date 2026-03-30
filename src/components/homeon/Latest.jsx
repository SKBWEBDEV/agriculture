import React from 'react'
import Container from '../container/Container'
import oni from "../../assets/oni.png"
import carro from "../../assets/carro.png"
import toma from "../../assets/toma.png"
import redgr from "../../assets/redgr.png"
import gral from "../../assets/gral.png"
import lettu from "../../assets/lettu.png"
import sss from "../../assets/sss.png"

const Latest = () => {
  return (
    <div className='mt-50'>

      <Container>

        <div>

          <div className='text-center leading-10'>
            <h2 className='font-primary text-[24px] text-[#EEC044]'>Recently Added</h2>
            <h1 className='font-bold text-[48px] text-[#1F1E17]'>Latest Products</h1>
          </div>

          <div className='flex justify-between mt-[92.5px]'>

            <div className='text-center w-92.5 h-92.5'>
              <img src={oni} alt="#" />
              <h3 className='text-[#222222] font-bold text-[22px]'>Onions</h3>
              <p className='text-[#4BAF47] font-bold text-[16px]'>$20.00</p>
              <img className='mx-auto mt-1' src={sss} alt="#" />
            </div>

            <div className='text-center w-92.5 h-92.5'>
              <img src={carro} alt="#" />
              <h3 className='text-[#222222] font-bold text-[22px]'>Carrot</h3>
              <p className='text-[#4BAF47] font-bold text-[16px]'>$50.00</p>
              <img className='mx-auto mt-1' src={sss} alt="#" />
            </div>
            
            <div className='text-center w-92.5 h-92.5'>
              <img src={toma} alt="#" />
              <h3 className='text-[#222222] font-bold text-[22px]'>Tomato</h3>
              <p className='text-[#4BAF47] font-bold text-[16px]'>$50.00</p>
              <img className='mx-auto mt-1' src={sss} alt="#" />
            </div>


          </div>


          <div className='flex justify-between mt-[92.5px]'>

            <div className='text-center w-92.5 h-92.5 mt-7.5'>
              <img src={redgr} alt="#" />
              <h3 className='text-[#222222] font-bold text-[22px]'>Red Grapes</h3>
              <p className='text-[#4BAF47] font-bold text-[16px]'>$100.00</p>
              <img className='mx-auto mt-1' src={sss} alt="#" />
            </div>

            <div className='text-center w-92.5 h-92.5 mt-7.5'>
              <img src={gral} alt="#" />
              <h3 className='text-[#222222] font-bold text-[22px]'>Garlic</h3>
              <p className='text-[#4BAF47] font-bold text-[16px]'>$20.00</p>
              <img className='mx-auto mt-1' src={sss} alt="#" />
            </div>
            
            <div className='text-center w-92.5 h-92.5 mt-7.5'>
              <img src={lettu} alt="#" />
              <h3 className='text-[#222222] font-bold text-[22px]'>Lettuce</h3>
              <p className='text-[#4BAF47] font-bold text-[16px]'>$30.00</p>
              <img className='mx-auto mt-1' src={sss} alt="#" />
            </div>


          </div>



        </div>

      </Container>
      
    </div>
  )
}

export default Latest
