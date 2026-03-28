import talha from "../../assets/talha.png"
import bann from "../../assets/bann.png"
import map from "../../assets/map.png"
import Container from '../container/Container'

const Bann = () => {
  return (
    <div>
      <div>

      <div
      style={{backgroundImage: `url(${talha})`}}
      className='py-50 bg-cover'>
        
        <Container>
            {/* ------------------------banner part stat------------------ */}
            <div className="text-center">
              <p className="text-white font-semibold text-[14px] ">Home / Contact</p>
              <h1 className="text-white font-bold text-[50px] ">Contact</h1>
            </div>
            {/* ------------------------banner part end------------------ */}
            
          </Container>
        
      </div>

      <Container>
          
            <div className="py-30 flex justify-between">

              <div className="w-[369.98px] h-[220.5px] bg-[#4BAF47] rounded-lg py-[39.5px] px-[49.99px]">
                <h2 className="text-white font-medium font-primary text-[30px]">About</h2>
                <p className="text-white font-normal text-[16px] w-[235.7px]">Lorem ipsum is simply free text used by copytypinh refreshing.Neque porro est qui</p>
              </div>

              <div className="w-[369.98px] h-[220.5px] bg-[#C5CE38] rounded-lg py-[39.5px] px-[49.99px]">
                <h2 className="text-white font-medium font-primary text-[30px]">Contact</h2>
                <p className="text-white font-normal text-[16px] w-[235.7px]">+1- (246) 333-0079 support@agrios.com Mon - Fri: 7:00 am - 6:00 pm</p>
              </div>

              <div className="w-[369.98px] h-[220.5px] bg-[#EEC044] rounded-lg py-[39.5px] px-[49.99px]">
                <h2 className="text-white font-medium font-primary text-[30px]">Address</h2>
                <p className="text-white font-normal text-[16px] w-[235.7px]">66 Broklun Road Golden Street, New Your United States of Ameriaca</p>
              </div>

            </div>

{/* =================================map part start===================================== */}
            <div className="py-30">
              <div 
              style={{backgroundImage: `url(${bann})`}}
              className=" bg-cover bg-no-repeat flex ">

                <div className="">
                  <img src={map} alt="" />
                </div>

                <div className=" mx-auto py-25">
                  <p className="text-[#EEC044] text-center font-medium font-primary text-[30px]">Contact us</p>
                  <h1 className="text-[#5151C6] text-center font-bold text-[48px]">Write a Message</h1>
                  <div className="flex gap-7">
                    <input className="bg-white outline-0 py-5 rounded-lg w-[240.14px] px-7" type="text" placeholder="Name"/>
                    <input className="bg-white outline-0 py-5 rounded-lg w-[240.14px] px-7" type="text" placeholder="Email Address "/>
                  </div>
                  <input className="bg-white outline-0 py-15 rounded-lg w-[500.3px] px-7 mt-5 pt-5" type="text" placeholder="Write a Message "/>
                  <div>
                    <button className="bg-[#4BAF47] cursor-pointer mt-5 rounded-lg text-white font-bold py-4 px-11.5">Send a Message</button>
                  </div>
                </div>

                

              </div>
            </div>
          
      </Container>
      
    </div>
    </div>
  )
}

export default Bann
