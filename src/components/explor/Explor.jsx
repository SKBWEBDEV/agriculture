import React from 'react'
import Container from '../container/Container'
import element from '../../assets/elements3.png'
import element1 from '../../assets/elements4.png'
import element2 from '../../assets/elements5.png'
import element3 from '../../assets/elements6.png'
const Explor = () => {
  return (
    <div className='py-25'>
    
    <Container>

      <div className='text-center'>
        <p className='font-primary text-[24px] font-normal text-[#EEC044]'>Recently Completed</p>
        <h1 className='font-bold text-[48px]  text-[#1F1E17]'>Explor Project</h1>
      </div>

      <div className='flex justify-between mt-10'>
        <img className='w-70' src={element} alt="#" />
        <img className='w-70' src={element1} alt="#" />
        <img className='w-70' src={element2} alt="#" />
        <img className='w-70' src={element3} alt="#" />
      </div>

    </Container>

    </div>
  )
}

export default Explor