import About from "../about/About"
import Explor from "../explor/Explor"
import Footer from "../footer/Footer"
import Headers from "../headers/Headers"
import Market from "../market/Market"
import Navber from "../navber/Navber"
import News from "../news/News"
import Offer from "../offer/Offer"
import Organic from "../organic/Organic"
import Vdo from "../vdo/Vdo"

const Home = () => {
  return (
    <div>
      <Headers/>
      <Navber/>
      <Organic/>
      <Offer/>
      <Vdo/>
      <Explor/>
      <About/>
      <Market/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Home
