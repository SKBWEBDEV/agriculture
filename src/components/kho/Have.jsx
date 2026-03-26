import sakib from "../../assets/sakib.png"
import open from "../../assets/open.png"
import girl from "../../assets/girl.png"
import boy from "../../assets/boy.png"
import Container from "../container/Container"

const Have = () => {
  return (
    <div>
      <div
    className="bg-cover h-[690.19px] py-20"
    style={{backgroundImage: `url(${sakib})`}}>

      <Container>

        <div>

          <div>
            <h1 className="text-[50px] text-[#04000B] mx-30 w-[432.28px]  font-semibold">Farming have been since 1866</h1>
            <p className="mt-[25.1px] text-[16px] text-[#666666] mx-auto w-[564.77px] font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque laborum ad asperiores dolorem. Adipisci error eaque dolorem, itaque aliquam animi fuga dolor ipsam! Velit ratione hic corporis veritatis odit.</p>
          </div>

          <div className="mt-[60.39px]">
            <img src={open} alt="#" />
          </div>

        </div>

      </Container>
    
    </div>

    <Container>

      <div className="flex gap-7.5 justify-end">

        <div>
          <img src={girl} alt="#" />
          <p className="text-[14px] font-normal text-right mt-7.5 text-[#04000B]">Farmer of cherry</p>
          <h2 className="text-[24px] text-right text-[#04000B] font-semibold ">Kevin Martin</h2>
        </div>

        <div>
          <img src={boy} alt="#" />
          <p className="text-[14px] font-normal text-right mt-7.5 text-[#04000B]">Farmer of potato</p>
          <h2 className="text-[24px] text-right text-[#04000B] font-semibold ">Sarah Albert</h2>
        </div>

      </div>

    </Container>
    
    </div>
  )
}

export default Have
