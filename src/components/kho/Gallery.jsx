import React from 'react'
import Container from '../container/Container'
import frout from "../../assets/frout.png"
import veget from "../../assets/veget.png"
import havest from "../../assets/havest.png"
import maize from "../../assets/maize.png"
import cereals from "../../assets/cereals.png"
const Gallery = () => {
  return (
    <div className='py-15'>

      <Container>
      
      <div className="text-center">
        <h2 className='text-[24px] font-primary text-[#49A760]'>Awesome Gallery</h2>
        <h1 className='text-[50px] font-bold text-[#04000B]'>Explore Projects</h1>
      </div>

      <div className='flex justify-between mt-11.25'>

        <div><img src={frout} alt="#" /></div>
        <div><img src={veget} alt="#" /></div>

      </div>

      <div className='flex justify-between mt-[29.14px]'>

        <div><img src={havest} alt="#" /></div>
        <div><img src={maize} alt="#" /></div>
        <div><img src={cereals} alt="#" /></div>

      </div>

      </Container>
      
    </div>
  )
}

export default Gallery
