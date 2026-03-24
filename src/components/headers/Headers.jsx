import Container from "../container/Container"
import logo from "../../assets/logo.png"
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbCircleLetterPFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Headers = () => {
  return (
    <div>

      <Container>
        <div className="py-5.5 flex items-center justify-between">

          <div>
            <img src={logo} alt="" />
          </div>

          <div className="flex gap-2.5">
            <p className="bg-[#E4E2D7] px-3.25 py-3.5 rounded-full cursor-pointer"><FaTwitter /></p>
            <p className="bg-[#E4E2D7] px-3.25 py-3.5 rounded-full cursor-pointer"><FaFacebook /></p>
            <p className="bg-[#E4E2D7] px-3.25 py-3.5 rounded-full cursor-pointer">
              <TbCircleLetterPFilled /></p>
            <p className="bg-[#E4E2D7] px-3.25 py-3.5 rounded-full cursor-pointer"><FaInstagram /></p>
          </div>

          <div className="flex items-center gap-5">
            <p className="text-[#4BAF47]"><FaPhoneVolume className="w-7.5 h-7.5"/></p>
            <div>
              <p className="text-[#878680] font-semibold text-[12px]">Call anytime</p>
              <p className="text-[#1F1E17] font-semibold text-[14px]">+ 98 (000) - 9630</p>
            </div>
          </div>


          <div className="flex items-center gap-5">
            <p className="text-[#4BAF47]"><FaEnvelopeOpenText className="w-7.5 h-7.5"/></p>
            <div>
              <p className="text-[#878680] font-semibold text-[12px]">Send email</p>
              <p className="text-[#1F1E17] font-semibold text-[14px]">ambed@agrios.com</p>
            </div>
          </div>


          <div className="flex items-center gap-5">
            <p className="text-[#4BAF47]"><FaLocationDot className="w-7.5 h-7.5"/></p>
            <div>
              <p className="text-[#878680] font-semibold text-[12px]">380 St Kilda Road</p>
              <p className="text-[#1F1E17] font-semibold text-[14px]">Melbourne, Australia</p>
            </div>
          </div>
          
        </div>
      </Container>

    </div>
  )
}

export default Headers