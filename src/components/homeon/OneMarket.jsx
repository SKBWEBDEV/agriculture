import wrap from "../../assets/wrap.png"
import honeon from "../../assets/honeon.png"
import before from "../../assets/before.png"
import store from "../../assets/store.png"
import Container from "../container/Container"

const OneMarket = () => {
  return (
    <div
    style={{backgroundImage: `url(${wrap})`}}
    className='bg-cover bg-no-repeat py-50 relative'>

      <Container>

        <div className="flex  items-center justify-between ">

       <div>  
          <div>
          <h1 className="font-primary text-[130px] text-[#EEC044]">Agriculture</h1>
          <h2 className="font-bold text-white text-[100px] w-[484.81px] leading-28">& Organic Market</h2>
          </div>

          <div>
          <button className="bg-[#4BAF47] cursor-pointer text-white font-bold text-[14px] px-12 py-4 
          rounded-lg mt-6">Show Now</button>
          </div>
       </div>

        <div>
          <div className="w-16.5 h-16.5 rounded-full border-white/50 border-2"></div>
          <div className="w-16.5 h-16.5 rounded-full border-white border-2 mt-7"></div>
        </div>

        </div>

        <div className="bg-white shadow-2xl h-35.5 px-10 flex justify-between rounded-lg absolute 
        w-300 -bottom-20 mx-18">

          <div className="flex items-center gap-5">
            <img src={honeon} alt="#" />
            <div>
              <h3 className="font-bold text-[20px] text-[#1F1E17]">Return Policy</h3>
              <p className="font-medium text-[16px] text-[#878680]">Money Back Guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <img src={before} alt="#" />
            <div>
              <h3 className="font-bold text-[20px] text-[#1F1E17]">Free Shipping</h3>
              <p className="font-medium text-[16px] text-[#878680]">On All Orders Over $45.00</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <img src={store} alt="#" />
            <div>
              <h3 className="font-bold text-[20px] text-[#1F1E17]">Store Locator</h3>
              <p className="font-medium text-[16px] text-[#878680]">Find Your Nearest Store</p>
            </div>
          </div>

        </div>

      </Container>
      
    </div>
  )
}

export default OneMarket
