import Link from 'next/link'

class AvailableMobiles extends React.Component {

	render() {
		return 	<div className="disenoEstetico">

					<div className="df">

						<div className="services-free-bg">
							<figure className="responsive">
								<img src="static/img/responsive.png" alt=""/>
							</figure>
							<div className="df services-about">
								<div className="services-about-bg"></div>
								<div className="services-about-text">
									<h2>DISPONIBLE EN MÓVILES</h2>
									<p>Nos especializamos en la creación de sitios web totalmente sensibles que se ajustan perfectamente a cualquier tipo de dispositivo. El proyecto realizado en tal técnica se muestra bien en teléfonos inteligentes, tabletas, pantallas grandes o incluso televisores.</p>
								</div>
							</div>
						</div>

						<div className="services-web">
							<div className="services-web-item">
								<div className="services-web-text">
									<h2>GOOGLE ANALYTICS</h2>
									<p>
										Compruebe quién y cuándo ha visitado su sitio, cómo lo encontró y qué es lo que más interesa a sus visitantes. Con Google Analytics integrado, tendrá acceso a todos los datos.
									</p>
								</div>
								<img src="static/img/ico-results.svg" alt=""/>
							</div>
							<div className="services-web-item">
								<div className="services-web-text">
									<h2>SEO AMIGABLE</h2>
									<p>
										Nuestros proyectos están diseñados y optimizados para posicionamiento en Google.
									</p>
								</div>
								<img src="static/img/seo.png" alt=""/>
							</div>
						</div>
					</div>

					<style jsx>{`
						.disenoEstetico {
							margin: 40px auto;
							margin-top: 170px;
						}

						.services-web {
							background: #fca926;
							padding: 40px;
							box-sizing: border-box;
							text-align: right;
							color: white;
							width: 45%;
							margin-left: 4%;
						}

						.services-web h2 {
							font-size: 22px;
							max-width: 300px;
							margin-bottom: 10px;
							box-sizing: border-box;
							font-family: Viga;
						}
						.services-web p {
							line-height: 1.2;
							letter-spacing: 0.5px;
							max-width: 300px;
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
						}
						.services-web-item {
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.services-web-item img {
							width: 180px;
							height: 180px;
							margin-left: 20px;
						}

						.services-free-bg {
							width: 40%;
						}

						.responsive {
							margin-left: -70px;
						}

						.services-about {
							align-items: stretch;
						}
						.services-about-text {
							text-align: left;
							padding-top: 3%;
							padding-left: 4%;
							padding-right: 2%;
							box-sizing: border-box;
						}
						.services-about-text h2 {
							font-size: 22px;
							margin-bottom: 10px;
							font-family: Viga;
							position: relative;
						}

						.services-about-text h2:before {
							content: "";
							position: absolute;
							width: 50px;
							height: 3px;
							background: #00BCD4;
							top: -15px;
							left: 0;
						}
						.services-about-text p {
							line-height: 1.2;
							letter-spacing: -0.1px;
							color: #656565;
						}

						
						@media screen and (max-width: 900px) {
							.services-web h2,
							.services-web p,
							.services-web a {
								margin-left: 30px;
							}
						}

						@media screen and (max-width: 767px) {
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

							.services-free-bg {
								width: 100%;
							}
						}

						@media screen and (max-width: 600px) {
							.services-web {
								padding: 40px 20px;
							}
							.services-web h2,
							.services-web p,
							.services-web a {
								margin: 10px 20px;
							}
						}
					`}</style>
				</div>
	}
}

export default AvailableMobiles