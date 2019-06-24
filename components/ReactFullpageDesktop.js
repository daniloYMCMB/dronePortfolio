import Header from './Header'
import BannerServices from './BannerServices'
import Services from './Services'
import Portafolio from './Portafolio'
import Prices from './Prices'
import Contact from './Contact'

const Fullpage = () => (

     
     <div className="">
          <div className="section" id="section1">
            <Header></Header>
            <BannerServices />
          </div>

          <div className="section" id="section3"> 
            <Services></Services>
          </div>

          <Portafolio></Portafolio>

          <Prices></Prices>

          <div className="section" id="section3"> 
            <Contact></Contact>
          </div>

          <style>{`

          `}</style>
       </div>
);

export default Fullpage;