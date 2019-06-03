class BannerServices extends React.Component {


    componentDidMount() {
        setTimeout(function(){ 
            var videoBanner = document.querySelector(".videoBanner-title")
            videoBanner.classList.add('active')

            var videoBannerSkills = document.querySelector(".videoBanner-skills")
            videoBannerSkills.classList.add('active')
        }, 500);

    }

	handleDown () {
		fullpage_api.moveSectionDown();
	}

	render () {
		return 	<div className="videoBanner">
					<div className="videoBanner-container">

                        <div className="vimeo-wrapper">
                            <video data-autoplay loop muted>
                                <source src="/static/video/IvanOspinaFMX.mp4" type="video/mp4"></source>
                            </video>
                            <div className="container videoBanner-text">
                                <h1 className="videoBanner-title">¿Necesita mostrar <br/> su proyecto eficientemente?
                                </h1>
                            </div>
                            <ul className="df container videoBanner-skills">
                                <li>
                                    <a href="">
                                        <figure className="df">
                                            <img src="/static/img/responsive.svg" alt=""/>
                                            <h2>DESARROLLO WEB</h2>
                                        </figure>
                                        <p>
                                            Páginas web profesionales y únicas son nuestro servicio clave. Disponible en dispositivos móviles, listo para SEO (Google).
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <figure className="df">
                                            <img src="/static/img/drone.svg" alt=""/>
                                            <h2>IMÁGENES DE DRONES</h2>
                                        </figure>
                                        <p>
                                            Brindamos servicios de fotografía y video aéreo con vehículos no tripulados. Certificados con licencia para conducir drones.
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <figure className="df">
                                            <img src="/static/img/profiles.svg" alt=""/>
                                            <h2>PORTAFOLIO</h2>
                                        </figure>
                                        <p>
                                            Vea nuestros últimos de proyectos de sitios web y videos de drones, únase a nuestra lista de clientes satisfechos.                                          </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <figure className="df">
                                            <img src="/static/img/handshake.svg" alt=""/>
                                            <h2>SERVICIO GRATUITO</h2>
                                        </figure>
                                        <p>
                                            Consulte nuestra oferta de trabajo y viaje para obtener información ahora y obtener nuestros servicios gratuitos
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>

					</div>

					<style jsx>{`
						
                    .vimeo-wrapper {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 99;
                        overflow: hidden;
                    }
                    .vimeo-wrapper:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left 0;
                        height: 100%;
                        width: 100%;
                        background: black;
                        opacity: 0.6;
                        z-index: 1;
                    }
                        
                    .vimeo-wrapper video {
                        width: 100vw;
                        height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
                        min-height: 100vh;
                        min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
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
                        font-family: Montserrat;
                        text-align: center;
                    }

                    .videoBanner-title {
                        font-size: 55px;
                        font-weight: bold;
                        opacity: 0;
                        transform: translateY(30px);
                        transition: .5s;
                        transition-delay: 1s;
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
                        bottom: 0;
                        left: 0;
                        right: 0;
                        font-size: 12px;
                        z-index: 99;
                        text-align: left;
                        font-family: Montserrat;
                        align-items: stretch;
                        opacity: 0;
                        transform: translateY(30px);
                        transition: .5s;
                        transition-delay: 1.5s;
                    }

                    .videoBanner-skills.active {
                        opacity: 1;
                        transform: translateY(0px);
                    }

                    .videoBanner-skills li {
                        margin-bottom: 35px;
                        background: white;
                        padding: 25px 20px;
                        margin: 0 .5px;
                        min-height: 60px;
                        box-sizing: border-box;
                        width: 25%;
                        opacity: 0;
                        transform: translateY(20px);
                        transition: .5s;
                        transition-delay: 1.5s;
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

                    @media screen and (max-width: 768px){
                        .videoBanner-title br {
                            display: block;
                        }
                    }

                    @media screen and (max-width: 600px){
                        .vimeo-wrapper video {
                            left: 80%;
                        }
                        .videoBanner-text {
                            top: -290px;
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