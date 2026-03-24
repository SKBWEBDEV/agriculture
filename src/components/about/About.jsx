import Container from "../container/Container";
import avater from '../../assets/avater.png'
const About = () => {
  return (
    <div className="bg-[#F8F7F0] py-[114.99px]">
      <Container>
        <div className="flex justify-between">
          <div>
            <p className="text-[#EEC044] text-[24px] font-normal">
              Our Testimonials
            </p>
            <h1 className="text-[#1F1E17] leading-14 text-[48px] font-bold w-[323.78px]">
              What They're Talking About Agrios
            </h1>
            <p className="text-[#878680] mt-5 text-[16px] font-medium w-[329.25px]">
              There are many variations of passages of available but the
              majortity have sufferred alteration in some form by injected humor
              or random word which don't look even.
            </p>
            <button className="bg-[#4BAF47] text-white font-bold mt-5 py-[14.99px] px-[49.99px] rounded-lg">
              View All Testimonials
            </button>
          </div>

          <div className="bg-white items-center h-50 flex px-[49.99px] ">

            <div>
              <p className="text-[#878680] mt-5 text-[18px] font-medium w-[486.31px]">
                There are many variations of passages of available but the
                majority have suffered alteration in some form by injected humor
                or random word which don't look even.
              </p>
              <h3 className="text-[#1F1E17] mt-5 text-[24px] font-bold">
                Bonnie Tolbert
              </h3>
            </div>

            <div>
              <img src={avater} alt="" />
            </div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default About;
