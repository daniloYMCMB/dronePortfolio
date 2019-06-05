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

						<div className="services-items">
							<div className="services-item-left">
								<div className="services-web">
									<h2>WEB Y DISEÑO DE MEDIOS DIGITALES</h2>
									<p>
										Su sitio web tiene solo unos segundos para interesar a posibles clientes. Con nosotros, su nuevo sitio web atraerá la atención y la pintará en la dirección correcta. Diseñamos sitios web modernos y creamos una imagen profesional de su empresa. Nuestro trabajo es nuestra pasión. Es por eso que nuestros sitios web están en línea con las últimas tendencias y tecnologías.
									</p>
									<a>
										BUILD MY WEBSITE
									</a>	
								</div>

								<div className="services-drone">
									<h2>SERVICIO DE FOTOGRAFIA Y VIDEO AÉREO</h2>
									<p>
										Su sitio web tiene solo unos segundos para interesar a posibles clientes. Con nosotros, su nuevo sitio web atraerá la atención y la pintará en la dirección correcta. Diseñamos sitios web modernos y creamos una imagen profesional de su empresa. Nuestro trabajo es nuestra pasión. Es por eso que nuestros sitios web están en línea con las últimas tendencias y tecnologías.
									</p>
									<a>
										Saber más
									</a>	
								</div>
							</div>

							<div className="services-free-bg">
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
							font-size: 27px;
							margin-bottom: 10px;
						}
						.services-about-text p {
							max-width: 410px;
							font-size: 17px;
							font-family: Montserrat;
							line-height: 1.2;
							letter-spacing: -0.1px;
							color: #656565;
						}
						.services-about-bg {
							background: url(/static/img/danilo.jpg) center center no-repeat;
							background-size: cover;
							width: 48%;
							height: 250px;
							margin-right: 2%;
						}

						
					`}</style>
				</div>
	}
}

export default Services;