import built from "../../assets/built.png"
import  moreone from "../../assets/moreone.png"
import Container from "../container/Container"

const More = () => {
  return (
    <div
    style={{backgroundImage: `url(${built})`}}
    className="bg-no-repeat bg-cover h-183 relative">

      <Container>

        <div className="w-158.25 bg-[#49A760] h-[492.78px] py-17 px-20">
          <h1 className="text-white font-bold text-[50px] w-[450.65px] leading-14">
            Built the best agriculture market</h1>
            <p className="text-white mt-[25.9px] font-normal text-[16px] w-[468.93px]">Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult.</p>
            <p className="text-white mt-[25.1px] font-bold cursor-pointer text-[16px] w-[468.93px]">
              <u>DISCOVER MORE</u></p>
        </div>

        <div className="absolute top-45 right-0">
          <img src={moreone} alt="#" />
        </div>

      </Container>
      
    </div>
  )
}

export default More
