class Services extends React.Component {

	render () {
		return 	<div className="services">
					<div className="">

						<div className="df services-about">
							<div className="services-about-bg"></div>
							<div className="services-about-text">
								<h2>QUIÉNES SOMOS</h2>
								<p>Mi nombre es Danilo y tengo 25 años, estudié en Lima, Perú. He estado viajando con mi novia Emma durante 1 año, trabajando de forma remota. La idea principal de la empresa es trabajar y viajar por todo el mundo. Ofrecemos webs profesionales y diseño de medios digitales.</p>
							</div>
						</div>

						<div className="df container services-items">
							<div className="services-left">
								<div className="services-web">
									<h2>WEB Y DISEÑO DE MEDIOS DIGITALES</h2>
									<p>
										Su sitio web tiene solo unos segundos para interesar a posibles clientes. Con nosotros, su nuevo sitio web atraerá la atención y la pintará en la dirección correcta. Diseñamos sitios web modernos y creamos una imagen profesional de su empresa. Nuestro trabajo es nuestra pasión. Es por eso que nuestros sitios web están en línea con las últimas tendencias y tecnologías.
									</p>
									<a>
										CREAR MI SITIO WEB
									</a>	
								</div>
								<div className="services-drone">
									<h2>SERVICIO DE FOTOGRAFIA Y VIDEO AÉREO</h2>
									<p>
										Muestra tu resort, hotel o cualquier cosa que desees desde una perspectiva completamente diferente. Haga que su oferta se destaque en Booking.com o tripAdvisor entre otros.
									</p>
									<a>
										Saber más
									</a>	
								</div>
							</div>

							<div className="services-free-bg">
								<div className="services-free">
									<h2>SERVICIO GRATUITO</h2>
									<p>
										Muestra tu resort, hotel o cualquier cosa que desees desde una perspectiva completamente diferente. Haz que tu oferta se destaque en Booking.com o tripadvisor entre otras.
									</p>
									<a>
										Saber más
									</a>
								</div>
							</div>
						</div>

					</div>

					<style jsx>{`
						.services {
							color: black
						}
						.services-about {
							align-items: stretch;
						}
						.services-about-text {
							text-align: left;
							width: 50%;
							padding-top: 2%;
							padding-left: 3%;
							box-sizing: border-box;
						}
						.services-about-text h2 {
							font-size: 22px;
							margin-bottom: 10px;
						}
						.services-about-text p {
							max-width: 410px;
							font-size: 15px;
							font-family: Montserrat;
							line-height: 1.2;
							letter-spacing: -0.1px;
							color: #656565;
						}
						.services-about-bg {
							background: url(/static/img/danilo.jpg) center center no-repeat;
							background-size: cover;
							width: 48%;
							height: 200px;
							margin-right: 2%;
						}

						.services-left {
							color: white;
							width: 70%;
						}

						.services-web {
							background: #00BCD4;
							padding: 40px 20px;
							box-sizing: border-box;
							text-align: left;
							margin-top: -20px;
						}

						.services-web h2 {
							font-size: 22px;
							max-width: 370px;
							margin: 0 auto 10px;
							padding-right: 120px;
							box-sizing: border-box;
						}
						.services-web p {
							font-size: 15px;
							font-family: Montserrat;
							line-height: 1.2;
							letter-spacing: -0.1px;
							max-width: 370px;
							margin: auto;
						}
						.services-web a {
							margin: auto;
							display: inline-block;
							padding: 15px 20px;
							background: white;
							color: #00BCD4;
							box-sizing: border-box;
							margin-top: 10px;
							margin-left: 100px;
						}

						.services-drone {
							background: url(/static/img/rupac.jpg) center left no-repeat;
							background-size: cover;
							max-width: 340px;
							padding: 20px;
							margin: -30px auto 0;
							text-align: left;
							position: relative;
						}

						.services-drone:before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background: black;
							opacity: .3;
						}

						.services-drone h2 {
							font-size: 22px;
							max-width: 250px;
							margin: 0 auto 10px;
							padding-right: 50px;
							box-sizing: border-box;
							position: relative;
							z-index: 1;
						}

						.services-drone p {
							max-width: 300px;
							margin: 0 auto 10px;
							padding-left: 25px;
							box-sizing: border-box;
							position: relative;
							z-index: 1;
							font-family: Montserrat;
						}

						.services-drone a {
							max-width: 300px;
							padding-left: 25px;
							box-sizing: border-box;
							margin-top: 10px;
							margin-left: 20px;
							position: relative;
							z-index: 1;
						}

						.services-free-bg {
							width: 40%;
						}

						.services-free {
							background: url(/static/img/emma.jpg) center left no-repeat;
							background-size: cover;
							color: white;
							padding: 100px 70px 90px 80px;
							box-sizing: border-box;
							margin-top: -70px;
							margin-left: -70px;
							text-align: right;
							max-width: 300px;
							font-size: 15px;
							position: relative;
						}

						.services-free:before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background: black;
							opacity: .4;
						}

						.services-free h2{
							font-size: 16px;
							margin-bottom: 10px;
							position: relative;
							z-index: 1;
						}

						.services-free p {
							font-size: 14px;
							font-family: Montserrat;
							margin-bottom: 10px;
							position: relative;
							z-index: 1;
						}

						.services-free a {
							font-size: 14px;
							position: relative;
							z-index: 1;
						}


						@media screen and (max-width: 1024px) {
							.services-about-text h2 {
								font-size: 16px;
							}
							.services-about-text p {
								font-size: 14px;
								line-height: 1;
							}
							.services-web {
								padding-top: 20px;
							}
							.services-web h2,
							.services-drone h2 {
								font-size: 16px;
							}
							.services-web p,
							.services-drone p {
								font-size: 14px;
								line-height: 1;
							}
							.services-web a,
							.services-drone a {
								font-size: 14px;
								line-height: 1;
								padding: 10px;
								margin-top: 10px;
							}
							.services-drone a {
								margin-left: 35px;
								margin-top: -10px;
							}
						}


						
					`}</style>
				</div>
	}
}

export default Services;