
import Container from '../container/Container'
import read from "../../assets/read.png"
import postone from "../../assets/postone.png"
import postwo from "../../assets/postwo.png"
import { FaArrowRight } from "react-icons/fa6";

const Post = () => {
  return (
    <div>

      <Container>

      <div className='text-center'>
        <h2 className='font-primary text-[24px] text-[#49A760]'>Latest News</h2>
        <h1 className='font-bold text-[#04000B] text-[42px] '>Check out our blog posts</h1>
      </div>

      <div className='flex justify-between items-center'>

        <div
        className='w-[633.5px] h-[422.5px] px-12 mt-[32.5px] py-25'
        style={{backgroundImage: `url(${read})`}}>
          <h2 className='text-white font-semibold text-[36px] w-[522.17px] leading-10 '>
             Miscovery incommode earnestly commanded if.</h2>
             <p className='text-white font-normal mt-[25.5px] text-[16px] w-[513.7px]'>Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
             <p className='flex cursor-pointer items-center mt-[35.5px] gap-2 text-white font-normal
              text-[16px] w-[513.7px]'>CONTINUE READING 
              <span><FaArrowRight /></span></p>
       </div> 

        <div className='relative'>
          <div className='mt-8'>
            <img src={postone} alt="#" />
          </div>

          <div className=''>
            <p className='text-[17px] font-normal text-[#666666] mt-[59.2px]'>Md Shakib . 26 March, 2026</p>
         <h2 className='text-[#04000B] text-[20px] font-bold w-[248.23px] '>
          Expression acceptance imprudence particular</h2>
          <p className='flex cursor-pointer items-center mt-[5.5px] gap-2 text-[#04000B] font-normal
              text-[16px]'>CONTINUE READING <span><FaArrowRight /></span></p>
         </div>
          
          <div className='bg-[#F7C35F] w-[87.95px] h-[103.5px] text-center absolute bottom-34 left-0'>
            <p className='text-[#04000B] text-[36px] font-bold'>26</p>
            <p className='mt-3 bg-[#49A760] h-9.50 py-2 font-bold text-white'>Mar,26</p>
          </div>
        </div>

       

        <div className='relative'>
          <div className='mt-8'>
            <img src={postwo} alt="#" />
          </div>

          <div className=''>
            <p className='text-[17px] font-normal text-[#666666] mt-[59.2px]'>Md Shakib . 26 March, 2026</p>
         <h2 className='text-[#04000B] text-[20px] font-bold w-[248.23px] '>
          Expression acceptance imprudence particular</h2>
          <p className='flex cursor-pointer items-center mt-[5.5px] gap-2 text-[#04000B] font-normal
              text-[16px]'>CONTINUE READING <span><FaArrowRight /></span></p>
         </div>
          
          <div className='bg-[#F7C35F] w-[87.95px] h-[103.5px] text-center absolute bottom-34 left-0'>
            <p className='text-[#04000B] text-[36px] font-bold'>26</p>
            <p className='mt-3 bg-[#49A760] h-9.50 py-2 font-bold text-white'>Mar,26</p>
          </div>
        </div>

      </div>

      </Container>
      
    </div>
  )
}

export default Post
