import helthone from "../../assets/helthone.png"
import life from "../../assets/life.png"
import heltwo from "../../assets/heltwo.png"
import helthree from "../../assets/helthree.png"
import helthfour from "../../assets/helthfour.png"
import chall from "../../assets/chall.png"
import vagi from "../../assets/vagi.png"
import modhu from "../../assets/modhu.png"
import Container from "../container/Container"

const Helth = () => {
  return (
    <div
    style={{backgroundImage: `url(${helthone})`}}
    className='h-216.5 py-11 mt-[85.8px] bg-no-repeat bg-cover'>

      <Container>

        <div>
          <img className="-[839.15px] h-[263.99px] mx-auto " src={life} alt="" />
        </div>

        <div className="flex justify-between mt-22.5 ">
          <div className="relative">
            <div className="">
              <img src={heltwo} alt="" />
            </div>
            <div className="flex items-center gap-4 absolute -bottom-13 left-7.5 ">
              <img src={chall} alt="" />
              <div className="bg-white shadow-xl w-59.25 h-[102.59px] rounded-lg text-center py-[20.5px]">
                <h2 className="font-normal text-[24px] font-primary text-[#04000B]">Agriculture</h2>
                <p className="font-normal text-[16px] font-primary text-[#49A760]">Products</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div>
              <img src={helthree} alt="" />
            </div>
            <div className="flex items-center gap-4 absolute -bottom-13 left-7.5 ">
              <img src={chall} alt="" />
              <div className="bg-white shadow-xl w-59.25 h-[102.59px] rounded-lg text-center py-[20.5px]">
                <h2 className="font-normal text-[24px] font-primary text-[#04000B]">Fresh</h2>
                <p className="font-normal text-[16px] font-primary text-[#49A760]">Vegetable</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div>
              <img src={helthfour} alt="" />
            </div>
            <div className="flex items-center gap-4 absolute -bottom-13 left-7.5 ">
              <img src={chall} alt="" />
              <div className="bg-white shadow-xl w-59.25 h-[102.59px] rounded-lg text-center py-[20.5px]">
                <h2 className="font-normal text-[24px] font-primary text-[#04000B]">Organic</h2>
                <p className="font-normal text-[16px] font-primary text-[#49A760]">Products</p>
              </div>
            </div>
          </div>
        </div>

      </Container>
      
    </div>
  )
}

export default Helth
