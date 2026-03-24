import frame from "../../assets/frame.png"
import Container from '../container/Container'


const Proj = () => {
  return (
    <div>

      <div
        style={{backgroundImage: `url(${frame})`}}
        className='py-50 bg-cover'>
          <Container>
            {/* ------------------------banner part stat------------------ */}
            <div className="text-center">
              <p className="text-white font-semibold text-[14px] ">Home / Projects</p>
              <h1 className="text-white font-bold text-[50px] ">Projects 1</h1>
            </div>
            {/* ------------------------banner part end------------------ */}
          </Container>
        </div>
      
    </div>
  )
}

export default Proj
