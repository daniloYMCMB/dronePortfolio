import Link from 'next/link'

class WebsiteFree extends React.Component {

	render() {
		return 	<div className="websitefree">

					<div className="df" style={{alignItems: 'stretch'}}>

						<figure className="websitefree-free-bg">
						</figure>

						<div className="df websitefree-web">
							<div className="websitefree-about">
								<div className="websitefree-about-bg"></div>
								<div className="websitefree-about-text">
									<h2>CONSTRUYA SU SITIO WEB 
										<br/> GRATIS
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
						.websitefree {
							margin-top: 60px;
						}

						.websitefree-web {
							padding: 70px 40px;
							box-sizing: border-box;
							width: 50%;
							padding-left: 50px;
							background: #f2f2f2;
							border: 1px solid black;
							border-right: none;
							border-left: none;
							text-align: left;
						}

						.websitefree-web h2 {
							font-size: 22px;
							margin-bottom: 10px;
							box-sizing: border-box;
							font-family: Viga;
							position: relative;
						}
						.websitefree-web h2:before {
							content: "";
							position: absolute;
							width: 50px;
							height: 3px;
							background: #00BCD4;
							top: -15px;
							left: 0;
						}
						.websitefree-web p {
							line-height: 1.2;
							letter-spacing: 0.5px;
							max-width: 500px;
						}
						.websitefree-web a {
							margin: auto;
							display: inline-block;
							padding: 13px 15px;
							color: white;
							box-sizing: border-box;
							margin-top: 10px;
							border-radius: 4px;
							font-family: Viga;
							background: #00BCD4;
						}

						.websitefree-free-bg {
							width: 50%;
							background: url(static/img/Build-website-for-free.jpg) right center no-repeat;
							background-size: cover;
						}

						@media screen and (max-width: 767px) {
							.websitefree {
								margin-top: 40px;
							}
							.websitefree .df {
								flex-direction: column-reverse;
							}
							.websitefree-free-bg {
								width: 100%;
								height: 300px;
							}
							.websitefree-web {
								width: 100%;
							}
						}

						@media screen and (max-width: 600px) {
							.websitefree {
								margin-top: 20px;
							}
							.websitefree-web {
								padding: 70px 20px;
							}
							.websitefree-web h2,
							.websitefree-web p,
							.websitefree-web a {
								margin: 10px 20px;
							}
							.websitefree-web h2 br {
								display: none;
							}
					`}</style>
				</div>
	}
}

export default WebsiteFree