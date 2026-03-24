
import Container from '../container/Container'
import cow from "../../assets/cow.png"
import stro from "../../assets/stro.png"
import master from "../../assets/master.png"
import div from "../../assets/div.png"

const Similar = () => {
  return (
    <div className='mt-[109.99px]'>

      <Container>
      
      <div className='text-center'>
        <h3 className='text-[#EEC044] font-primary text-[24px]'>Recently Completed</h3>
        <h1 className='text-[#1F1E17] font-bold text-[48px]'>Similar Projects</h1>
      </div>

      <div className='flex justify-between mt-[50.29px]'>
        <img className='w-[280.5px]  hover:scale-y-150 duration-300' src={cow} alt="#" />
        <img className='w-[280.5px]  hover:scale-y-150 duration-300' src={stro} alt="#" />
        <img className='w-[280.5px]  hover:scale-y-150 duration-300' src={master} alt="#" />
        <img className='w-[280.5px]  hover:scale-y-150 duration-300' src={div} alt="#" />
      </div>

      </Container>
      
    </div>
  )
}

export default Similar
