import readone from "../../assets/readone.png"
import readtwo from "../../assets/readtwo.png"
import readthree from "../../assets/readthree.png"
import readfour from "../../assets/readfour.png" 
import readcar from "../../assets/readcar.png" 
import readflower from "../../assets/readflower.png" 
import readfruit from "../../assets/readfruit.png" 
import drags from "../../assets/drags.png" 
import Container from "../container/Container"

const Read = () => {
  return (
    <div className="py-25">

      <Container>

        <div className="flex justify-between">

          <div className="relative">
            <img src={readone} alt="#" />
            <div className="bg-white w-[219.99px] h-[126.99px] rounded-lg shadow-lg px-12.5 absolute 
            -bottom-18 left-6.25">
              <h2 className="font-bold text-[20px] w-[112.6px] pt-[48.5px]">Agriculture Products</h2>
            </div>
            <div className="absolute bottom-5 left-25">
              <img src={readcar} alt="#" />
            </div>
          </div>

          <div className="relative">
            <img src={readtwo} alt="#" />
            <div className="bg-white w-[219.99px] h-[126.99px] rounded-lg shadow-lg px-12.5 absolute 
            -bottom-18 left-6.25">
              <h2 className="font-bold text-[20px] w-[112.6px] pt-[48.5px]">Agriculture Products</h2>
            </div>
            <div className="absolute bottom-5 left-25">
              <img src={readflower} alt="#" />
            </div>
          </div>

          <div className="relative">
            <img src={readthree} alt="#" />
            <div className="bg-white w-[219.99px] h-[126.99px] rounded-lg shadow-lg px-12.5 absolute 
            -bottom-18 left-6.25">
              <h2 className="font-bold text-[20px] w-[112.6px] pt-[48.5px]">Agriculture Products</h2>
            </div>
            <div className="absolute bottom-5 left-25">
              <img src={readfruit} alt="#" />
            </div>
          </div>

          <div className="relative">
            <img src={readfour} alt="#" />
            <div className="bg-white w-[219.99px] h-[126.99px] rounded-lg shadow-lg px-12.5 absolute 
            -bottom-18 left-6.25">
              <h2 className="font-bold text-[20px] w-[112.6px] pt-[48.5px]">Agriculture Products</h2>
            </div>
            <div className="absolute bottom-5 left-25">
              <img src={drags} alt="#" />
            </div>
          </div>

        </div>

      </Container>
      
    </div>
  )
}

export default Read
