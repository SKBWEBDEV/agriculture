import Container from "../container/Container";
import what from "../../assets/what.png";
import apple from "../../assets/apple.png";
import tomato from "../../assets/tomato.png";
import box from "../../assets/box.png";
import re from "../../assets/re.png";
const Offer = () => {
  return (
    <div>
      <div
        className="h-100 top-25  w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${what})` }}>
        <Container>
          <div className="flex gap-12.5 absolute top-70">
            <div
              className="w-[269.99px] h-[429.99px] relative"
              style={{ backgroundImage: `url(${apple})` }}>
              <button className="bg-[#4BAF47] rounded-lg px-[30.99px] py-[10.99px] font-semibold text-[19px] text-white absolute right-13 bottom-[-5.5px]">
                Read More
              </button>
            </div>

            <div
              className="w-[269.99px] h-[429.99px] relative"
              style={{ backgroundImage: `url(${tomato})` }}>
              <button className="bg-[#4BAF47] rounded-lg px-[30.99px] py-[10.99px] font-semibold text-[19px] text-white absolute right-13 bottom-[-5.5px]">
                Read More
              </button>
            </div>

            <div
              className="w-[269.99px] h-[429.99px] relative"
              style={{ backgroundImage: `url(${box})` }}>
              <button className="bg-[#4BAF47] rounded-lg px-[30.99px] py-[10.99px] font-semibold text-[19px] text-white absolute right-13 bottom-[-5.5px]">
                Read More
              </button>
            </div>

            <div
              className="w-[269.99px] h-[429.99px] relative"
              style={{ backgroundImage: `url(${re})` }}>
              <button className="bg-[#4BAF47] rounded-lg px-[30.99px] py-[10.99px] font-semibold text-[19px] text-white absolute right-13 bottom-[-5.5px]">
                Read More
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Offer;
