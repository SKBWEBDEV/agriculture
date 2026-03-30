import oni from "../../assets/oni.png"
import gra from "../../assets/gra.png"
import ap from "../../assets/ap.png"
import bana from "../../assets/bana.png"
import sss from "../../assets/sss.png"
import Container from "../container/Container"

const Hot = () => {
  return (
    <div className="mt-25">

      <Container>

      <div className="text-center">
        <p className="font-primary text-[24px] text-[#EEC044]">Special Offers</p>
        <h1 className="font-bold text-[#1F1E17] text-[48px]">Today's Hot Deal</h1>
      </div>

      <div className="mt-15 flex justify-between">
        <div className="w-67.5">
          <img src={gra} alt="#" />
          <div className="flex mt-5 items-center justify-around ">
            <div>
              <h3 className='text-[#222222] font-bold text-[22px]'>Red Grapes</h3>
              <p className='text-[#4BAF47] font-bold text-[16px]'>$100.00</p>             
            </div>
            <img className='w-fit h-fit ' src={sss} alt="#" />
          </div>
        </div>

        <div className="w-67.5">
          <img src={oni} alt="#" />
          <div className="flex mt-5 items-center justify-around ">
            <div>
              <h3 className='text-[#222222] font-bold text-[22px]'>Red Grapes</h3>
              <p className='text-[#4BAF47] font-bold text-[16px]'>$100.00</p>             
            </div>
            <img className='w-fit h-fit ' src={sss} alt="#" />
          </div>
        </div>

        <div className="w-67.5">
          <img src={ap} alt="#" />
          <div className="flex mt-5 items-center justify-around ">
            <div>
              <h3 className='text-[#222222] font-bold text-[22px]'>Red Grapes</h3>
              <p className='text-[#4BAF47] font-bold text-[16px]'>$100.00</p>             
            </div>
            <img className='w-fit h-fit ' src={sss} alt="#" />
          </div>
        </div>

        <div className="w-67.5">
          <img src={bana} alt="#" />
          <div className="flex mt-5 items-center justify-around ">
            <div>
              <h3 className='text-[#222222] font-bold text-[22px]'>Red Grapes</h3>
              <p className='text-[#4BAF47] font-bold text-[16px]'>$100.00</p>             
            </div>
            <img className='w-fit h-fit ' src={sss} alt="#" />
          </div>
        </div>
      </div>

      </Container>
      
    </div>
  )
}

export default Hot
