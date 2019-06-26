import Link from 'next/link'

class WebsiteFree extends React.Component {

	render() {
		return 	<div className="disenoEstetico">

					<div className="df" style={{alignItems: 'stretch'}}>

						<div className="services-free-bg">
							<figure className="responsive">
								<img src="static/img/Build-website-for-free.jpg" alt=""/>
							</figure>
						</div>

						<div className="services-web">
							<div className="df services-about">
								<div className="services-about-bg"></div>
								<div className="services-about-text">
									<h2>CONSTRUYA SU SITIO WEB 
										<br/>GRATIS
									</h2>
									<p>El proyecto será gratuito a cambio de una estancia de vacaciones en su lugar. Tomaremos el equipo necesario para diseñar el sitio web y realizaremos materiales promocionales, fotos y videos de alta calidad.</p>
									<a>
										VIAJE DE TRABAJO
									</a>	
								</div>
							</div>
						</div>
					</div>

					<style jsx>{`
						.disenoEstetico {
							margin: 40px auto;
							margin-top: 170px;
						}

						.services-web {
							padding: 40px;
							box-sizing: border-box;
							width: 50%;
							padding-left: 50px;
							background: #f2f2f2;
							border: 1px solid black;
							border-right: none;
							border-left: none;
						}

						.services-web h2 {
							font-size: 22px;
							margin-bottom: 10px;
							box-sizing: border-box;
							font-family: Viga;
						}
						.services-web p {
							line-height: 1.2;
							letter-spacing: 0.5px;
							max-width: 500px;
						}
						.services-web a {
							margin: auto;
							display: inline-block;
							padding: 13px 15px;
							color: white;
							box-sizing: border-box;
							margin-top: 10px;
							font-size: 14px;
							border-radius: 4px;
							font-family: Viga;
							background: #00BCD4;
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
							width: 50%;
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

export default WebsiteFree