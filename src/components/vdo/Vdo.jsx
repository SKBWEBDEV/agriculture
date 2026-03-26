import okey from "../../assets/okey.png"
import Container from '../container/Container'
import { HiMiniPlay } from "react-icons/hi2";


const Vdo = () => {
  return (
    <div
    className='h-[690.99px] mt-160 bg-cover py-50 relative'
    style={{backgroundImage: `url(${okey})`}}
    >

      <Container>
        <div className='flex items-center justify-between'>
        <h1 className='text-white font-bold w-[486.54px] text-[70px]'>
          Agriculture Matters to the Future of Development</h1>
          <p className='bg-white py-5 px-5 rounded-full h- text-[90px]'><HiMiniPlay/></p>
      </div>

      <div className='bg-[#4BAF47] w-305 absolute top-[-100.99px] py-20 px-15 rounded-lg text-white 
      font-semibold text-[21px]'>
        <ul className='flex justify-between'>
          <li>Agriculture Products</li>
          <li>Projects Completed</li>
          <li>Satisfied Clients</li>
          <li>Experts Farmers</li>
        </ul>
      </div>

      </Container>

    </div>
  )
}

export default Vdo