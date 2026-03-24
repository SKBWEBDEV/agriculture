import farmer from "../../assets/farmer.png"
import Container from "../container/Container"

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbCircleLetterPFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";

const Helthey = () => {
  return (
    <div>

      <Container>

        <div className="mt-20">
          <img src={farmer} alt="" />
        </div>

        <div className="flex justify-between mt-10">

          <div>
            <h1 className="text-[#1F1E17] font-bold text-[30px]">Healthy Food</h1>
            <p className="font-normal text-[16px] text-[#878680] w-[754.97px] mt-2.5">Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <h3 className="py-[33.5px] text-[#1F1E17] font-bold text-[16px] w-[738.97px]">Biophilia is the idea that humans possess an innate tendency to seek connections with nature. The term translates</h3>
            <p className="font-normal text-[16px] text-[#878680] w-[756.4px] mt-2.5">The term translates When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className="font-normal text-[16px] text-[#878680] w-[754.97px] mt-2.5">Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <h2 className="text-[#1F1E17] font-bold text-[26px] mt-[26.5px]">Healthy Food</h2>

            <ul className="font-bold text-[16px] text-[#1F1E17] mt-[35.5px]">
              <li>Nemo enim ipsam voluptatem quia voluptas.</li>
              <li>Accusamus et iusto odio dignissimos ducimus.</li>
              <li>Nam liberto tempore, cum soluta nobis est elidend.</li>
              <li>Accusamus et iusto odio dignissimos ducimus.</li>
            </ul>
             <p className="font-normal text-[16px] text-[#878680] w-[747.73px] mt-2.5">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

          </div>

          <div className="relative">
            <div className="bg-[#EEC044] w-[380.25px] h-5 rounded-[10px] z-0"></div>
            <div className="py-[37.5px] px-[60.2px] w-[380.25px] h-[427.99px] shadow-[0_10px_60px_rgba(0,0,0,0.10)] bg-white 
            rounded-[10px] absolute top-2 z-10 ">

              <div>
                <p className="text-[14px] font-semibold text-[#878680]">Services:</p>
                <h2 className="font-bold text-[16px] text-[#1F1E17] ">Healthy Food</h2>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#878680] mt-6">Farmer:</p>
                <h2 className="font-bold text-[16px] text-[#1F1E17] ">Mike Hardson</h2>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#878680] mt-6">Duration:</p>
                <h2 className="font-bold text-[16px] text-[#1F1E17] ">4.5 Months</h2>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#878680] mt-6">Location:</p>
                <h2 className="font-bold text-[16px] text-[#1F1E17] ">Broklyn, New Your</h2>
              </div>

              <div>
                <ul className="flex gap-5 mt-10">
                  <li className="bg-[#F8F7F0] p-3 rounded-full text-[20px] cursor-pointer"><FaTwitter/></li>
                  <li className="bg-[#F8F7F0] p-3 rounded-full text-[20px] cursor-pointer"><FaFacebook/></li>
                  <li className="bg-[#F8F7F0] p-3 rounded-full text-[20px] cursor-pointer"><TbCircleLetterPFilled/></li>
                  <li className="bg-[#F8F7F0] p-3 rounded-full text-[20px] cursor-pointer"><FaInstagram/></li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </Container>
      
    </div>
  )
}

export default Helthey
