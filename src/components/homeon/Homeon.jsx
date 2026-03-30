
import Container from '../container/Container'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbCircleLetterPFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Homeon = () => {




  return (
    <div className='bg-[#4BAF47] py-5'>

      <Container>

        <div className='text-white flex justify-between'>

          <div className='flex items-center gap-10'>
            <div className='flex items-center gap-5'>
              <p><FaLocationDot /></p>
              <p>88 Road Broklyn Golden Street. New York</p>
            </div>
            <div className='flex items-center gap-5'>
              <p><FaEnvelope  /></p>
              <p>support@agrios.com</p>
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <p className='cursor-pointer'><FaTwitter/></p>
            <p className='cursor-pointer'><FaFacebook/></p>
            <p className='cursor-pointer'><TbCircleLetterPFilled/></p>
            <p className='cursor-pointer'><FaInstagram/></p>
          </div>
          
        </div>



  

      </Container>
      
    </div>
  )
}

export default Homeon
