import Link from 'next/link'
import ReactPlayer from 'react-player'

class BannerServices extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(function(){ 
            var videoBanner = document.querySelector(".videoBanner-title")
            videoBanner.classList.add('active')
        }, 3000);

        setTimeout(function(){ 
            var videoBannerSkills = document.querySelector(".videoBanner-skills")
            videoBannerSkills.classList.add('active')
        }, 3500);
    }

	render () {
		return 	<div className="videoBanner">
					<div className="videoBanner-container">

                        <div className="vimeo-wrapper">
                            
                            <iframe 
                                src="https://www.youtube.com/embed/xJAwnCMgqCg?enablejsapi=1&autoplay=1&controls=0&vq=hd480&loop=1&mute=1&playlist=xJAwnCMgqCg" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen></iframe>

                            <div className="container videoBanner-text">
                                <h1 className="videoBanner-title">¿Necesita mostrar <br/> su proyecto eficientemente?
                                </h1>
                            </div>
                            <ul className="df container videoBanner-skills">
                                <li>
                                    <Link href="/diseno-web">
                                        <a>
                                            <figure className="df">
                                                <img src="/static/img/responsive.svg" alt=""/>
                                                <h2>DISEÑO WEB</h2>
                                            </figure>
                                            <p>
                                                Páginas web profesionales y únicas son nuestro servicio clave. <span>Disponible en dispositivos móviles, listo para SEO (Google).</span>
                                            </p>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/imagenes-de-drones">
                                        <a>
                                            <figure className="df">
                                                <img src="/static/img/drone.svg" alt=""/>
                                                <h2>IMÁGENES DE DRONES</h2>
                                            </figure>
                                            <p>
                                                Brindamos servicios de fotografía y video aéreo con drones. <span>Certificados con licencia para conducir drones.</span>
                                            </p>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portafolio">
                                        <a>
                                            <figure className="df">
                                                <img src="/static/img/profiles.svg" alt=""/>
                                                <h2>PORTAFOLIO</h2>
                                            </figure>
                                            <p>
                                                Vea nuestros últimos proyectos de sitios web y videos aéreos. <span>Únase a nuestra lista de clientes satisfechos.</span></p>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/viaje-de-trabajo">
                                        <a>
                                            <figure className="df">
                                                <img src="/static/img/handshake.svg" alt=""/>
                                                <h2>SERVICIO GRATUITO</h2>
                                            </figure>
                                            <p>
                                                Consulte nuestra oferta de trabajo y viaje <span>para obtener información ahora y obtener nuestros servicios gratuitos</span>
                                            </p>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
					</div>

					<style jsx>{`

                    .videoBanner {
                        height: 100vh;
                        box-shadow: 0 40px 120px -20px rgba(0,0,0,.6);
                    }
						
                    .vimeo-wrapper {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 99;
                        overflow: hidden;
                        // background: url(/static/img/eiffel2.jpg) center center no-repeat;
                        // background: url(/static/img/bolzano.jpg) center top no-repeat;
                        
                        background-position: center top;
                        background-size: cover;
                    }
                    .vimeo-wrapper:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left 0;
                        height: 100%;
                        width: 100%;
                        background: black;
                        opacity: 0.4;
                        z-index: 1;
                        pointer-events: none;
                    }
                        
                    .vimeo-wrapper iframe {
                        width: 100vw;
                        height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
                        min-height: 106vh;
                        min-width: 201.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
                        position: absolute;
                        top: 47%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        // display: none;
                    }

                    .videoBanner-text {
                        position: absolute;
                        left: 0;
                        right: 0;
                        width: 100%;
                        top: -100px;
                        bottom: 0;
                        height: 130px;
                        color: white;
                        z-index: 9;
                        font-family: Viga;
                        text-align: center;
                    }

                    .videoBanner-title {
                        font-size: 55px;
                        font-weight: bold;
                        opacity: 0;
                        transform: translateY(30px);
                        transition: .5s;
                        // font-family: Odachi;
                        line-height: 60px;
                    }

                    .videoBanner-title.active {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .videoBanner-title br {
                        display: none;
                    }

                    .videoBanner-skills {
                        font-size: 17px;
                        box-sizing: border-box;
                        position: absolute;
                        bottom: 1px;
                        left: 0;
                        right: 0;
                        font-size: 12px;
                        z-index: 99;
                        text-align: left;
                        align-items: stretch;
                        opacity: 0;
                        transform: translateY(30px);
                        transition: .5s;
                    }

                    .videoBanner-skills.active {
                        opacity: 1;
                        transform: translateY(0px);
                    }

                    .videoBanner-skills li {
                        margin-bottom: 35px;
                        background: white;
                        margin: 0 .5px;
                        min-height: 60px;
                        box-sizing: border-box;
                        width: 25%;
                        opacity: 0;
                        transform: translateY(20px);
                        transition: .5s;
                    }
                    .videoBanner-skills li a {
                        padding: 25px 20px;
                    }
                    .videoBanner-skills li:hover {
                        background: #00BCD4;
                    }

                    .videoBanner-skills li {
                        opacity: 1;
                        transform: translateY(0px);
                    }

                    .videoBanner-skills figure {
                        margin-bottom: 15px;
                        justify-content: start;
                    }

                    .videoBanner-skills img {
                        width: 30px;
                        height: 30px;
                        margin-right: 10px;
                    }

                    .videoBanner-skills h2 {
                        font-size: 13px;
                        font-family: Viga;
                        color: black;
                        text-align: left;
                    }

                    .videoBanner-skills p {
                        color: black;
                        line-height: 1.2;
                    }

                    .html5-video-player .video-stream {
                        top: 0 !important;
                    }

                    @media screen and (max-width: 768px){
                        .videoBanner-title br {
                            display: block;
                        }
                    }

                    @media screen and (max-width: 600px){
                        .videoBanner {
                            box-shadow: none
                        }
                        .vimeo-wrapper video {
                            left: 80%;
                        }
                        .videoBanner-text {
                            top: -130px;
                        }
                        .videoBanner-title  {
                            font-size: 35px;
                        }
                        .videoBanner-skills {
                            flex-wrap: wrap;
                        }
                        .videoBanner-skills li {
                            width: 49%;
                            border-top: 1px solid black;
                            padding: 15px 10px;
                        }
                        .videoBanner-skills li a {
                            padding: 0px;
                        }
                        .videoBanner-skills p span {
                            display: none;
                        }
                    }

                    @media screen and (max-width: 450px){
                        .videoBanner-text {
                            top: -60px;
                            height: 130px;
                        }
                        .videoBanner-title {
                            font-size: 25px;
                            line-height: 30px;
                        }
                        .videoBanner-skills figure {
                            margin-bottom: 10px;
                        }
                        .videoBanner-skills img {
                            width: 25px;
                            height: 25px;
                        }
                        .videoBanner-skills h2 {
                            font-size: 11px !important;
                            line-height: 1 !important;
                        }
                        .videoBanner-skills p {
                            font-size: 9px;
                        }
                    }

                    @keyframes translateBottomToTop {
                        0% {
                            transform: translateY(30px);
                            opacity: 0;
                        }
                        50% {
                            transform: translateY(10px);
                            opacity: 0;
                        }
                        100% {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }
					`}</style>
				</div>
	}
}

export default BannerServices;