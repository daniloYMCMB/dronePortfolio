import ReactFullpage from '@fullpage/react-fullpage'
import Header from './Header'
import BannerServices from './BannerServices'
import Services from './Services'
import Prices from './Prices'
import Contact from './Contact'

const Fullpage = () => (

  

  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id="section1">
            <Header></Header>
            <BannerServices />
          </div>

          <div className="section" id="section3"> 
            <Services></Services>
          </div>

          <div className="section" id="section3"> 
            <Contact></Contact>
          </div>

          <style>{`

          `}</style>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;