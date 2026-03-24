import gom from "../../assets/gom.png";
import tree from "../../assets/tree.png";
import matien from "../../assets/matien.png";
import Container from "../container/Container";
import { CgProfile } from "react-icons/cg";
import { TbMessageCircleFilled } from "react-icons/tb";

const News = () => {
  return (
    <div className="py-25">
      <Container>
        <div className="text-center">
          <p className="font-primary font-normal text-[#EEC044] text-[24px]">
            From the Blog
          </p>
          <h1 className=" font-bold text-[#1F1E17] text-[48px]">
            News & Articles
          </h1>
        </div>

        <div className="flex justify-between mt-10">
          <div
            className="w-[369.98px] h-[514.1px] relative rounded-lg"
            style={{ backgroundImage: `url(${gom})` }}
          >
            <div
              className="bg-white w-[368.98px] right-0 h-[214.5px] absolute bottom-0 shadow-xl/30 
            rounded-bl-lg rounded-br-lg"
            >
              <p className="bg-[#4BAF47] mx-auto absolute left-[30%] top-[-10%] px-5 text-white font-normal text-[17px] py-2.5 w-[134.77px] rounded-lg">
                16 mar 2026
              </p>

              <div className="flex items-center gap-2.5 mt-10 justify-around">
                <p className="flex gap-5 items-center text-[#878680] font-normal text-[14px]">
                  <span className="text-[#EEC044] text-[20px]">
                    <CgProfile />
                  </span>
                  Kevin Martin
                </p>
                <p className="flex gap-5 items-center text-[#878680] font-normal text-[14px]">
                  <span className="text-[#EEC044] text-[20px]">
                    <TbMessageCircleFilled />
                  </span>
                  1 Comment
                </p>
              </div>

              <h1 className="text-[#1F1E17] font-bold text-[26px] w-[245.59px] text-center mx-auto">
                Bringing Food Production Back To Cities
              </h1>
            </div>
          </div>

          <div
            className="w-[369.98px] h-[514.1px] relative rounded-lg"
            style={{ backgroundImage: `url(${tree})` }}
          >
            <div
              className="bg-white w-[355.98px] right-0 h-[214.5px] absolute bottom-0 shadow-xl/30 
            rounded-bl-lg rounded-br-lg"
            >
              <p className="bg-[#4BAF47] mx-auto absolute left-[30%] top-[-10%] px-5 text-white font-normal text-[17px] py-2.5 w-[134.77px] rounded-lg">
                16 mar 2026
              </p>

              <div className="flex items-center gap-2.5 mt-10 justify-around">
                <p className="flex gap-5 items-center text-[#878680] font-normal text-[14px]">
                  <span className="text-[#EEC044] text-[20px]">
                    <CgProfile />
                  </span>
                  Kevin Martin
                </p>
                <p className="flex gap-5 items-center text-[#878680] font-normal text-[14px]">
                  <span className="text-[#EEC044] text-[20px]">
                    <TbMessageCircleFilled />
                  </span>
                  1 Comment
                </p>
              </div>
              <h1 className="text-[#1F1E17] font-bold text-[26px] w-[245.59px] text-center mx-auto">
                The Future of Farming, Smart Irrigation Solutions
              </h1>
            </div>
          </div>

          <div
            className="w-[369.98px] h-[514.1px] relative rounded-lg"
            style={{ backgroundImage: `url(${matien})` }}
          >
            <div
              className="bg-white w-[355.98px] h-[214.5px] absolute right-0 bottom-0 shadow-xl/30 
            rounded-bl-lg rounded-br-lg"
            >
              <p className="bg-[#4BAF47] mx-auto absolute left-[30%] top-[-10%] px-5 text-white font-normal text-[17px] py-2.5 w-[134.77px] rounded-lg">
                16 mar 2026
              </p>

              <div className="flex items-center gap-2.5 mt-10 justify-around">
                <p className="flex gap-5 items-center text-[#878680] font-normal text-[14px]">
                  <span className="text-[#EEC044] text-[20px]">
                    <CgProfile />
                  </span>
                  Kevin Martin
                </p>
                <p className="flex gap-5 items-center text-[#878680] font-normal text-[14px]">
                  <span className="text-[#EEC044] text-[20px]">
                    <TbMessageCircleFilled />
                  </span>
                  1 Comment
                </p>
              </div>

              <h1 className="text-[#1F1E17] font-bold text-[26px] w-[245.59px] text-center mx-auto">
                Agronomy and relation to Other Sciences
              </h1>
            </div>
          </div>
        </div>
      </Container>

     

    </div>
  );
};

export default News;
