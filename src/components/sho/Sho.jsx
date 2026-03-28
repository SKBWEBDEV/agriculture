import talha from "../../assets/talha.png"
import Container from '../container/Container'

const Sho = () => {
  return (
    <div>

      <div
        style={{backgroundImage: `url(${talha})`}}
        className='py-50 bg-cover'>
          <Container>
            {/* ------------------------banner part stat------------------ */}
            <div className="text-center">
              <p className="text-white font-semibold text-[14px] ">Home / Shop</p>
              <h1 className="text-white font-bold text-[50px] ">SHOP</h1>
            </div>
            {/* ------------------------banner part end------------------ */}
          </Container>
        </div>
      
    </div>
  )
}

export default Sho
