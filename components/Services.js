import Link from 'next/link'

import ButtonWhite from './Buttons'

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
									<h2 >WEB Y DISEÑO DE MEDIOS DIGITALES</h2>
									<p>
										Su sitio web tiene solo unos segundos para interesar a posibles clientes. Con nosotros, su nuevo sitio web atraerá la atención y la pintará en la dirección correcta. Diseñamos sitios web modernos y creamos una imagen profesional de su empresa. Nuestro trabajo es nuestra pasión. Es por eso que nuestros sitios web están en línea con las últimas tendencias y tecnologías.
									</p>
									<ButtonWhite href="/diseno-web" name="CREAR MI SITIO WEB"></ButtonWhite>
								</div>
								<div className="services-drone">
									<h2>SERVICIO DE FOTOGRAFIA Y VIDEO AÉREO</h2>
									<p>
										Muestra tu resort, hotel o cualquier cosa que desees desde una perspectiva completamente diferente. Haga que su oferta se destaque en Booking.com o tripAdvisor entre otros.
									</p>
									<Link href="/disenoweb">
										Saber más
									</Link>	
								</div>
							</div>

							<div className="services-free-bg">
								<div className="services-free">
									<h2>SERVICIO GRATUITO</h2>
									<p>
										¿Quieres un nuevo sitio web pero no tienes tiempo para administrarlo? ¿No tienes fotos o materiales? ¿Es posible construir un sitio web de forma gratuita? En lugar de la oferta estándar, elija la opción Trabajo y viaje.
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
							color: black;
							padding-top: 80px;
						}
						.services-about {
							align-items: stretch;
						}
						.services-about-text {
							text-align: left;
							width: 50%;
							padding-top: 3%;
							padding-left: 4%;
							padding-right: 2%;
							box-sizing: border-box;
						}
						.services-about-text h2 {
							font-size: 22px;
							margin-bottom: 10px;
							font-family: Viga;
						}
						.services-about-text p {
							max-width: 410px;
							line-height: 1.2;
							letter-spacing: -0.1px;
							color: #656565;
						}
						.services-about-bg {
							background: url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/daniloviacava.JPG?alt=media&token=c4626005-0e32-4e7c-a36f-678a3c68c517) center center no-repeat;
							background-size: cover;
							width: 50%;
							height: 280px;
						}

						.services-items {
							align-items: start;
						}

						.services-left {
							color: white;
							width: 70%;
						}

						.services-web {
							background: #00BCD4;
							padding: 80px 20px;
							box-sizing: border-box;
							text-align: left;
							margin-top: -20px;
							// margin-left: -50px;
						}

						.services-web h2 {
							font-size: 22px;
							max-width: 300px;
							margin: 0 auto 10px;
							padding-right: 70px;
							box-sizing: border-box;
							margin-left: 100px;
							font-family: Viga;
						}
						.services-web p {
							line-height: 1.2;
							letter-spacing: -0.1px;
							max-width: 300px;
							margin-left: 100px;
						}
						.services-web a {
							margin: auto;
							display: inline-block;
							padding: 13px 15px;
							background: white;
							color: #00BCD4;
							box-sizing: border-box;
							margin-top: 10px;
							margin-left: 100px;
							font-size: 14px;
							border-radius: 4px;
							font-family: Viga;
						}

						.services-drone {
							background: url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/rupac.JPG?alt=media&token=60f399cd-9e02-4859-be73-665e7fe6cc05) center left no-repeat;
							background-size: cover;
							max-width: 230px;
							padding: 80px 90px;
							margin: -60px 0px 0px 60px;
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
							max-width: 180px;
							margin: 0 auto 10px;
							box-sizing: border-box;
							position: relative;
							z-index: 1;
							font-family: Viga;
						}

						.services-drone p {
							max-width: 300px;
							margin: 0 auto 10px;
							padding-left: 25px;
							box-sizing: border-box;
							position: relative;
							z-index: 1;
							line-height: 1.2;
						}

						.services-drone a {
							max-width: 300px;
							padding-left: 25px;
							box-sizing: border-box;
							margin-top: 10px;
							position: relative;
							z-index: 1;
							font-size: 14px;
						}

						.services-free-bg {
							width: 40%;
						}

						.services-free {
							background: url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/emmaPetersen.JPG?alt=media&token=3175db9b-ef8c-461b-b6e8-50b28fe13e9e) -130px 0px no-repeat;
							background-size: cover;
							color: white;
							padding: 280px 100px 230px 100px;
							box-sizing: border-box;
							margin-top: -50px;
							margin-left: -110px;
							text-align: right;
							max-width: 460px;
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
							font-size: 22px;
							margin-bottom: 10px;
							position: relative;
							z-index: 1;
							font-family: Viga;
						}

						.services-free p {
							font-size: 16px;
							margin-bottom: 10px;
							position: relative;
							line-height: 1.2;
							z-index: 1;
						}

						.services-free a {
							font-size: 14px;
							position: relative;
							z-index: 1;
						}

						@media screen and (max-width: 900px) {
							.services-about-text {
								margin-right: 2%;
								padding-top: 5%;
							}
							
							.services-web h2,
							.services-web p,
							.services-web a {
								margin-left: 30px;
							}

							.services-drone {
								margin-left: 20px;
							}

							.services-drone h2 {
								margin-left: 0px;
							}
							.services-drone p,
							.services-drone a {
								padding-left: 0;
							}

							.services-free {
								margin-left: -90px;
								padding: 280px 60px 230px 60px;
								background-position: -170px 0px;
							}
						}

						@media screen and (max-width: 767px) {
							.services-about {
								flex-direction: column;
								max-width: 600px;
								margin: auto;
								text-align: center;
							}
							.services-about-bg,
							.services-about-text {
								width: 100%;
							}
							.services-about p {
								max-width: 100%;
							}

							.services-items {
								flex-direction: column;
							}
							.services-left {
								width: 100%;
							}
							.services-web {
								margin-top: 40px;
								padding: 40px 120px;
							}
							.services-web h2,
							.services-web p {
								max-width: 100%;
							}

							.services-drone {
								margin: 30px auto;
								max-width: 100%;
								padding: 80px 170px;
							}
							.services-drone h2 {
								margin-left: 0;
								max-width: 100%;
							}
							.services-drone a,
							.services-drone p {
								margin-left: 0;
							}

							.services-free-bg {
								width: 100%;
							}
							.services-free {
								margin: 0;
								max-width: 100%;
								padding: 70px 210px;
								background-position: 0 -80px;
							}

							.services-free {
								margin: 0;
								max-width: 100%;
								padding: 70px 140px;
								background-position: 0 -80px;
							}
						}

						@media screen and (max-width: 600px) {
							.services {
								padding-top: 40px;
							}
							.services-web {
								padding: 40px 20px;
							}
							.services-web h2,
							.services-web p,
							.services-web a {
								margin: 10px 20px;
							}
							.services-drone {
								padding: 80px 50px;
							}
							.services-free {
								padding: 80px 50px;
								background-position: 0px 0px;
							}
						}



						
					`}</style>
				</div>
	}
}

export default Services;