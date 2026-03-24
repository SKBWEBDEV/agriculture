import ceone from "../../assets/ceone.png"
import { RiPlayLargeFill } from "react-icons/ri";
import Container from "../container/Container";

const Ceo = () => {
  return (
    <div>

      <div
      style={{backgroundImage: `url(${ceone})`}}
      className="bg-cover py-42.5 relative">
      
      <Container>
        <div className="text-center">
        <p className="bg-white inline-block px-5 py-5 rounded-full text-[25px]"><RiPlayLargeFill/></p>
        <h1 className="text-white mx-auto font-extrabold text-[60px] w-[800.5px] mt-23.75 mb-20">
          ECO-Friendly Products can be Made from Scratch</h1>
      </div>

      </Container>

      <div className="bg-[#1F1E17] absolute bottom-0 w-full text-[#A5A49A] font-medium text-[18px] py-15">
        <Container>
          <ul className="text-center flex justify-between">
          <li>Agriculture Products</li>
          <li>Projects Completed</li>
          <li>Satisfied Clients</li>
          <li>Experts Farmers</li>
        </ul>
        </Container>
      </div>

      </div>
      
    </div>
  )
}

export default Ceo
