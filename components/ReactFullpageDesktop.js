import ReactFullpage from '@fullpage/react-fullpage'
import VideoBanner from './VideoBanner'
import Paso1 from './Paso1'
import Paso2 from './Paso2'
import Paso3 from './Paso3'
import Paso4 from './Paso4'
import Paso5 from './Paso5'
import Paso6 from './Paso6'

import Header from './Header'
import HeaderColor from './HeaderColor'

const Fullpage = () => (

  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id="section1">
            
            <div className="">
              <VideoBanner />
            </div>

          </div>

          <div className="section" id="section2">
            
            <div className="secondSection">
                <Paso1 
                  image=""
                  footerFirst="BASIC"
                  footerStrong="30 minutos de grabación"
                  footerEnd="video de 30 segundos"
                />
                <Paso2
                  title2="¿Cómo prefieres que te vean?"
                  subtitle="Empieza a ganar más clientes"
                  subtitleStrong="ahora"
                  style="margin-top: 0px;"
                  image=""
                  footerFirst="PRO"
                  footerStrong="60 minutos de grabación"
                  footerEnd="video de 60 segundos"
                />
                <Paso3
                  image=""
                  footerFirst="BUSINESS"
                  footerStrong="180 minutos de grabación"
                  footerEnd="video de 180 segundos"
                />
            </div>

          </div>

          {/* <div className="section" id="section3"> 
            
            <div className="secondSection section3">
              <Paso4 />
              <Paso5 />
              <Paso6 />
            </div>

          </div>*/}

          <style>{`
            .firstSection {
              display: flex;
              justify-content: center;
              align-items: center;
              background: url(./static/img/bg1.svg) -233px 0px;
              background-size: cover;
              height: 100%;
              position: relative;
            }

            .firstSection:before {
              content:"";
              background: url(./static/img/nubes1.svg) -35px 0px;
              background-size: cover;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              width: 100%;
              height: 30vh;
            }

            .secondSection {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .section3 {
              position: relative;
            }


            .section3:before {
              content: "";
              background: url(./static/img/nubes3.svg) center center no-repeat;
              background-size: cover;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              z-index: 9;
              height: 30vh;
            }

            @media screen and (max-width: 1024px) {
              .section3:before {
                height: 30vh;
                z-index: 10;
                background-size: inherit;
              }
            }

            @media screen and (max-width: 767px) {
              .slide {
                overflow: hidden;
              }
              .fp-right {
                display: none;
              }
              .fp-controlArrow.fp-prev {
                border: none;
                background: url(./static/img/arrow-down.svg);
                background-size: cover;
                width: 30px;
                height: 30px;
                transform: rotate(90deg);
                left: 10px;
              }
              .fp-controlArrow.fp-next {
                border: none;
                background: url(./static/img/arrow-down.svg);
                background-size: cover;
                width: 30px;
                height: 30px;
                transform: rotate(-90deg);
                right: 10px;
              }
            }
          `}</style>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;