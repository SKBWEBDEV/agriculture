import whe from "../../assets/whe.png";
import small from "../../assets/small.png";
import tom from "../../assets/tom.png";
import jerry from "../../assets/jerry.png";
import buldog from "../../assets/buldog.png";
import { IoPlaySharp } from "react-icons/io5";
import Container from "../container/Container";

const Wheat = () => {
  return (
    <div>
      <div className="mt-[84.5px]">
        <img className="w-full" src={whe} alt="#" />
      </div>
      <div style={{ backgroundImage: `url(${small})` }} 
      className="bg-cover bg-no-repeat py-26 relative">
       
       <Container>
        <div className="flex items-center justify-between">
         <h1 className="font-extrabold text-white text-[70px] w-[486.69px] mb-20">
          Agriculture Matters to the Future of Development</h1>
          <div>
        <p className="bg-white w-25 h-25 p-7 rounded-full text-[50px]"><IoPlaySharp /></p>
        <p className="text-[30px] font-primary text-[#EEC044] mt-13">Watch our video</p>
       </div>
       </div>

       <div className="flex gap-5 absolute bottom-0">
        <div className="bg-white rounded-lg py-5 px-[95.5px] w-[369.98px] relative">
          <p className="font-bold text-[18px]">Quality Standards</p>
          <div className=" absolute top-15 w-[369.98px] left-0">
            <img className="rounded-br-lg rounded-bl-lg" src={tom} alt="" /></div>
       </div>
       <div className="bg-white rounded-lg py-5 px-[95.5px] w-[369.98px] relative">
        <p className="font-bold text-[18px]">Organic Farming</p>
        <div className=" absolute top-15 w-[369.98px] left-0">
            <img className="rounded-br-lg rounded-bl-lg" src={jerry} alt="" /></div>
       </div>
       <div className="bg-white rounded-lg py-5 px-[95.5px] w-[369.98px] relative">
        <p className="font-bold text-[18px]">Agriculture Products</p>
        <div className="rounded-br-lg rounded-bl-lg absolute top-15 w-[369.98px] left-0">
            <img className="rounded-br-lg rounded-bl-lg" src={buldog} alt="" /></div>
       </div>
       </div>

       </Container>
       
      </div>
    </div>
  );
};

export default Wheat;
