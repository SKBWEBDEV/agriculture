import stroberry from "../../assets/stroberry.png"
import linkone from "../../assets/linkone.png"
import linktwo from "../../assets/linktwo.png"
import linkthree from "../../assets/linkthree.png"
import linkfour from "../../assets/linkfour.png"
import Container from '../container/Container'
import { IoIosCheckmarkCircle } from "react-icons/io";

// import kocu from "../../assets/kocu.png"

const Firms = () => {
  return (
    <div
    // style={{backgroundImage: `url(${kocu})`}}
    className="py-25 w-full">

      <Container>

        <div className='flex justify-between'>
          <div>
            <img src={stroberry} alt="#" />
          </div>

          <div>
            <h1 className="font-bold text-[50px] text-[#04000B] leading-15 w-[407.48px]">Best Organic Agriculture Firms
            </h1>
            <p className="font-normal mt-[23.8px] text-[16px] text-[#666666] w-132.25">Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff.</p>
            <div className="mt-[25.7px]">
              <p className="flex items-center gap-5 font-bold text-[16px] text-[#04000B]"><span className="text-[#49A760]"><IoIosCheckmarkCircle  /></span>Best Quality Standards</p>
              <p className="flex items-center gap-5 font-bold text-[16px] text-[#04000B]"><span className="text-[#49A760]"><IoIosCheckmarkCircle  /></span>Natural Healthy Products</p>
            </div>
            <button className="font-bold mt-[29.8px] px-11 py-4 rounded-lg cursor-pointer bg-[#F7C35F] text-[16px] text-[#04000B] ">Discover More</button>
          </div>

          <div className="bg-white rounded-lg w-[300.5px] h-[451.23px] shadow-xl/30 py-10.5">
            <div className="flex gap-5 items-center ml-11.25">
              <img src={linkone} alt="#" />
              <p className="font-primary text-[20px] font-semibold">Blueberry</p>
            </div>

            <div className="flex gap-5 items-center mt-8.5 ml-11.25">
              <img src={linktwo} alt="#" />
              <p className="font-primary text-[20px] font-semibold">Strawberry</p>
            </div>

            <div className="flex gap-5 items-center mt-8.5 ml-11.25">
              <img src={linkthree} alt="#" />
              <p className="font-primary text-[20px] font-semibold">Maize</p>
            </div>

            <div className="flex gap-5 items-center mt-8.5 ml-11.25">
              <img src={linkfour} alt="#" />
              <p className="font-primary text-[20px] font-semibold">Apples</p>
            </div>
          </div>
        </div>

      </Container>
      
    </div>
  )
}

export default Firms
