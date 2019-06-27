import Link from 'next/link'

class AvailableMobiles extends React.Component {

	render() {
		return 	<div className="availableMobile">

					<div className="df">

						<div className="availableMobile-free-bg">
							<figure className="availableMobile-responsive">
								<img src="static/img/responsive.png" alt=""/>
							</figure>
							<div className="df availableMobile-about">
								<div className="availableMobile-about-text">
									<h2>DISPONIBLE EN MÓVILES</h2>
									<p>Nos especializamos en la creación de sitios web totalmente sensibles que se ajustan perfectamente a cualquier tipo de dispositivo. <br/>El proyecto realizado en tal técnica se muestra bien en teléfonos inteligentes, tabletas, pantallas grandes o incluso televisores.</p>
								</div>
							</div>
						</div>

						<div className="availableMobile-web">
							<div className="availableMobile-web-item">
								<div className="availableMobile-web-text">
									<h2>GOOGLE ANALYTICS</h2>
									<p>
										Compruebe quién y cuándo ha visitado su sitio, cómo lo encontró y qué es lo que más interesa a sus visitantes. Con Google Analytics integrado, tendrá acceso a todos los datos.
									</p>
								</div>
								<img src="static/img/ico-results.svg" alt=""/>
							</div>
							<div className="availableMobile-web-item">
								<div className="availableMobile-web-text">
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
						.availableMobile {
							margin-top: 140px;
							margin-bottom: 0;
						}

						.availableMobile-web {
							background: #fca926;
							padding: 50px 20px;
							box-sizing: border-box;
							text-align: right;
							color: white;
							width: 45%;
							margin-left: 4%;
							box-shadow: 0 40px 120px -20px rgba(0,0,0,0.6);
							margin-top: 40px;
						}

						.availableMobile-web h2 {
							font-size: 22px;
							max-width: 300px;
							margin-bottom: 10px;
							box-sizing: border-box;
							font-family: Viga;
						}
						.availableMobile-web p {
							line-height: 1.2;
							letter-spacing: 0.5px;
							max-width: 300px;
						}
						.availableMobile-web a {
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
						.availableMobile-web-item {
							display: flex;
							align-items: center;
							justify-content: center;
							margin: 10px 0;
						}
						.availableMobile-web-item img {
							width: 180px;
							height: 180px;
							margin-left: 20px;
						}

						.availableMobile-free-bg {
							width: 40%;
						}

						.availableMobile-responsive {
							margin-left: -70px;
						}

						.availableMobile-about {
							align-items: stretch;
						}
						.availableMobile-about-text {
							text-align: left;
							margin-top: 40px;
							padding-top: 3%;
							padding-left: 4%;
							padding-right: 2%;
							box-sizing: border-box;
						}
						.availableMobile-about-text h2 {
							font-size: 22px;
							margin-bottom: 10px;
							font-family: Viga;
							position: relative;
						}

						.availableMobile-about-text h2:before {
							content: "";
							position: absolute;
							width: 50px;
							height: 3px;
							background: #00BCD4;
							top: -15px;
							left: 0;
						}
						.availableMobile-about-text p {
							line-height: 1.3;
							letter-spacing: -0.1px;
							color: #656565;
						}

						@media screen and (max-width: 1150px) {
							.availableMobile-web-item img {
								width: 120px;
								height: 120px;
							}
						}

						@media screen and (max-width: 1024px) {
							.availableMobile-web {
								width: 50%;
							}
						}

						@media screen and (max-width: 900px) {
							.availableMobile-web {
								padding: 50px 10px 50px 10px;
							}
							.availableMobile-web-item img {
								width: 90px;
								height: 90px;
							}
						}

						@media screen and (max-width: 767px) {
							.availableMobile {
								margin-top: 50px;
							}
							.availableMobile .df {
								flex-direction: column;
							}
							.availableMobile-free-bg {
								width: 90%;
								margin: auto;
							}
							.availableMobile-responsive {
								margin-left: 0;
							}

							.availableMobile-web {
								width: 80%;
								margin: 40px auto;
								padding: 50px 80px;
							}

							.availableMobile-items {
								flex-direction: column;
							}
							.availableMobile-left {
								width: 100%;
							}
							.availableMobile-web h2,
							.availableMobile-web p {
								max-width: 100%;
							}
						}

						@media screen and (max-width: 600px) {
							.availableMobile-web {
								padding: 40px 20px;
								width: 90%;
							}
							.availableMobile-web h2,
							.availableMobile-web p,
							.availableMobile-web a {
								margin: 10px 20px;
							}
							.availableMobile-web-item {
								flex-direction: column;
								text-align: center;
							}
						}
					`}</style>
				</div>
	}
}

export default AvailableMobiles