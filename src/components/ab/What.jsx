
import Container from '../container/Container'
import whatone from "../../assets/whatone.png"
import whatwo from "../../assets/whatwo.png"
import whathree from "../../assets/whathree.png"

const What = () => {
  return (
    <div 
    style={{backgroundImage: `url(${whatone})`}}
    className='py-30 bg-cover'>

      <Container>
        <div>
          <p className='font-primary text-[24px] text-[#EEC044] text-center'>Our Testimonials</p>
          <h1 className='font-bold text-[48px] text-[#1F1E17] text-center'>What They Say</h1>
          <div className='flex justify-between'>

          <div className='mt-12'>
            <div className='bg-white py-10 w-125 rounded-lg relative'>
              <p className='text-[#878680] ml-30 text-[18px] font-medium w-[340.79px]'>There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.</p>
              <div className='text-right mr-10 mt-3'>
                <h3 className='font-bold text-[20px] text-[#1F1E17]'>Bonnie Tolbet</h3>
                <p className='font-medium text-[16px] text-[#878680]'>Customer</p>
              </div>
              <div className='absolute top-8 -left-17'>
                <img src={whatwo} alt="#" />
              </div>
            </div>
          </div>

          <div className='mt-12'>
              <div className='bg-white py-10 w-125 rounded-lg relative'>
              <p className='text-[#878680] ml-30 text-[18px] font-medium w-[340.79px]'>There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.</p>
              <div className='text-right mr-10 mt-3'>
                <h3 className='font-bold text-[20px] text-[#1F1E17]'>Sarah Albert</h3>
                <p className='font-medium text-[16px] text-[#878680]'>Customer</p>
              </div>
              <div className='absolute top-8 -left-17'>
                <img src={whathree} alt="#" />
              </div>
            </div>
          </div>

        </div>
        </div>
      </Container>
      
    </div>
  )
}

export default What
