import Container from "../container/Container"
import easy from "../../assets/easy.png"
import agri from "../../assets/agri.png"
import eco from "../../assets/eco.png"
import orag from "../../assets/orag.png"
import fresh from "../../assets/fresh.png"
import food from "../../assets/fresh.png"

const Images = () => {
  return (
    <div className="py-30">

      <Container>

        <div className="">
        
        <div className="flex justify-between">
          <img src={easy} alt="" />
          <img src={agri} alt="" />
          <img src={eco} alt="" />
        </div>

        <div className="flex justify-between mt-7.5">
          <img src={orag} alt="" />
          <img src={fresh} alt="" />
          <img src={food} alt="" />
        </div>

        </div>

      </Container>
      
    </div>
  )
}

export default Images
