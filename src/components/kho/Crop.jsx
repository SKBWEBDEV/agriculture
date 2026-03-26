
import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "../container/Container";
import jpg from "../../assets/jpg.png"
import { RiPlayLargeFill } from "react-icons/ri";

const Crop = () => {
  return (
    <div className="flex items-center gap-31.5 ">

      

        <div className="bg-[#4BAF47] w-240 h-[660.69px] flex py-25 ">

          <Container>
            <div>
             <div>
               <p className="flex items-center gap-5 font-bold text-[16px] text-[#ffff]"><span className=" 
              text-[20px]
              text-white"><IoIosCheckmarkCircle  /></span>Always Fresh</p>
              <p className="font-normal ml-9 text-white w-[483.76px] text-[16px]">Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her reprehenderit quaerat deleniti eaque similique id.</p>
             </div>

             <div className="mt-[40.39px]">
               <p className="flex items-center gap-5 font-bold text-[16px] text-[#ffff]">
                <span className=" mt-[40.39ox] text-[20px]
              text-white"><IoIosCheckmarkCircle  /></span>All organic</p>
              <p className="font-normal ml-9 text-white w-[488.4px] text-[16px]">Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported.</p>
             </div>

             <div className="mt-[40.39px]">
               <p className="flex items-center gap-5 font-bold text-[16px] text-[#ffff]"><span className=" 
              text-[20px]
              text-white"><IoIosCheckmarkCircle  /></span>Eco friendly</p>
              <p className="font-normal ml-9 text-white w-[492.86px] text-[16px]">Montinued at up to zealously necessary breakfas is motionless she end literature. Gay direction neglected but supported yet her.</p>
             </div>
            </div>
          </Container>

        </div>

        <div>
          <div>
            <p className="font-primary  text-[#49A760]  text-[24px]">Why CHoose Us</p>
            <h2 className="font-semibold text-[#04000B] text-[50px] w-108.5 leading-15">Growing crops and raising livestock.</h2>
            <div>

              <div className="flex gap-[80.11px] ">

                <div>
                  <h1 className="font-semibold text-[70px] text-[#F7C35F]">38K</h1>
                <p className="font-medium text-[#04000B] text-[16px]">Trusted Customers</p>
                <span className="bg-[#04000B] w-55 h-1 inline-block rounded-full"></span>
                <div>
                  <h1 className="font-semibold text-[70px] text-[#F7C35F]">28M</h1>
                <p className="font-medium text-[#04000B] text-[16px]">Growth Tonns of Harvest</p>
                </div>
                </div>

                <div className="mt-[50.3px] relative">
                  <img className="w-[442.53px]" src={jpg} alt="" />
                  <p className="absolute top-[35%] bg-[#F7C35F] text-white px-8 py-8 text-[40px] w-25 h-25 rounded-full left-[35%] cursor-pointer"><RiPlayLargeFill /></p>
              </div>

              </div>

              

            </div>
          </div>
        </div>

      
      
    </div>
  )
}

export default Crop
