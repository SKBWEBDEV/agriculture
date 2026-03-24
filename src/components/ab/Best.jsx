
import Container from '../container/Container'
import { FaCheck } from "react-icons/fa";

import bestone from "../../assets/bestone.png"
import bestwo from "../../assets/bestwo.png"
import besthree from "../../assets/besthree.png"

const Best = () => {
  return (
    <div className='py-30'>

      <Container>

        <div className='flex justify-between relative'>

          <div className="">

            <div className='mt-80'>
              <img src={bestwo} alt="#" />
            </div>
            
            <div className='absolute left-15  top-0'>
              <img src={bestone} alt="#" />
            </div>

            <div className='absolute left-0 z-10 -bottom-20'>
              <img src={besthree} alt="#" />
            </div>

          </div>

          <div className="">

            <div className="">
              <p className='text-[#EEC044] font-normal text-[24px] font-primary'>Get to Know Us</p>
              <h1 className='text-[#1F1E17] font-bold text-[48px] w-[485.48px] leading-15'>
                The Best Agriculture Market</h1>
              <p className='text-[#4BAF47] font-bold text-[20px] w-[551.2px] mt-8.25'>There are many variations of passa of lorem available, but the majority have suffered alteration.</p>

              <p className='text-[#878680] font-medium text-[16px] w-[526.62px] mt-8.25'>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.</p>

              <p className='flex font-bold text-[18px] text-black items-center mt-8 gap-5'><span className='text-[#C5CE38] text-[25px]'><FaCheck /></span>Suspe ndisse suscipit sagittis leo</p>
              <p className='flex font-bold text-[18px] text-black items-center mt-8 gap-5'><span className='text-[#C5CE38] text-[25px]'><FaCheck /></span>Suspe ndisse suscipit sagittis leo</p>
              <p className='flex font-bold text-[18px] text-black items-center mt-8 gap-5'><span className='text-[#C5CE38] text-[25px]'><FaCheck /></span>Suspe ndisse suscipit sagittis leo</p>
             
             <button className='bg-[#4BAF47] px-[49.99px] py-[14.99px] rounded-lg cursor-pointer mt-8 text-white font-bold'>Discover More</button>

            </div>
            
          </div>

        </div>

      </Container>
      
    </div>
  )
}

export default Best
