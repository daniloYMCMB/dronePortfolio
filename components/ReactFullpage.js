import ReactFullpage from '@fullpage/react-fullpage'
import VideoBanner from './VideoBanner'
import ViajaKambistaImg from './ViajaKambistaImg'
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
            
            <Header />

            <VideoBanner />>

          </div>

          <div className="section" id="section2">
            
            <HeaderColor />

            <div className="slide">
                <Paso1 
                  title="Paso 1"
                  image="/static/img/paso1.svg"
                  footerFirst="Ingresa a nuestra app o a"
                  footerStrong="www.kambista.com"
                  footerEnd="y regístrate, si todavia no lo has hecho."
                />
            </div>
            <div className="slide">
                <Paso2
                  title="Paso 2"
                  image="/static/img/paso2.svg"
                  footerFirst="Ingresa a la sección"
                  footerStrong="Millas LATAM Pass"
                  footerEnd="en tu perfil y pon tu número de socio LATAM Pass"
                />
            </div>
            <div className="slide">
                <Paso3
                  title="Paso 3"
                  image="/static/img/paso3.svg"
                  footerFirst="Empieza a cambiar tu dinero con"
                  footerStrong="Kambista"
                  footerEnd="y cada vez que lo hagas acumularás millas."
                />
            </div>

          </div>

          <div className="section" id="section3">
            
            <HeaderColor />
            
            <div className="slide">
                <Paso4 />
            </div>
            <div className="slide">
                <Paso5 />
            </div>
            <div className="slide">
                <Paso6 />
            </div>

          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;