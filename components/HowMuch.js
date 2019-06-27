import Link from 'next/link'

class HowMuch extends React.Component {

	render() {
		return 	<div className="howMuch">

					<div className="df" style={{alignItems: 'stretch'}}>

						<div className="df howMuch-web">
							<div className="howMuch-about">
								<div className="howMuch-about-bg"></div>
								<div className="howMuch-about-text">
									<h2>CUÁNTO CUESTA
									</h2>
									<p>No tenemos una lista de precios fijos. Cada proyecto se valora individualmente en función del número de pestañas y el nivel de complejidad del sitio web. Rellene el formulario para obtener la cotización exacta.
									</p>
									<a>
										OBTENGA UNA CUOTA GRATIS
									</a>	
								</div>
							</div>
						</div>

						<div className="howMuch-free-bg">
						</div>

					</div>

					<style jsx>{`
						.howMuch .df {
							flex-direction: column;
						}

						.howMuch-web {
							padding: 70px 10px;
							box-sizing: border-box;
							width: 50%;
							background: #f2f2f2;
							border: 1px solid black;
							border-right: none;
							border-left: none;
						}

						.howMuch-web h2 {
							font-size: 22px;
							margin-bottom: 10px;
							box-sizing: border-box;
							font-family: Viga;
						}
						.howMuch-web p {
							line-height: 1.2;
							letter-spacing: 0.5px;
							max-width: 500px;
						}
						.howMuch-web a {
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
						.howMuch-web-item {
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.howMuch-web-item img {
							width: 180px;
							height: 180px;
							margin-left: 20px;
						}

						.howMuch-free-bg {
							width: 50%;
							background: url(static/img/How-much-does-it-cost.jpg) center center no-repeat;
							background-size: cover;
						}

						.howMuch-about-text {
							text-align: left;
							padding-top: 3%;
							padding-left: 4%;
							padding-right: 2%;
							box-sizing: border-box;
						}
						.howMuch-about-text h2 {
							font-size: 22px;
							margin-bottom: 10px;
							font-family: Viga;
							position: relative;
						}

						.howMuch-about-text h2:before {
							content: "";
							position: absolute;
							width: 50px;
							height: 3px;
							background: #00BCD4;
							top: -15px;
							left: 0;
						}
						.howMuch-about-text p {
							line-height: 1.2;
							letter-spacing: -0.1px;
							color: #656565;
						}

						
						@media screen and (max-width: 900px) {
							.howMuch-web h2,
							.howMuch-web p,
							.howMuch-web a {
								margin-left: 30px;
							}
						}

						@media screen and (max-width: 767px) {
							.howMuch-web {
								width: 100%;
							}
							.howMuch-free-bg {
								height: 300px;
								width: 100%;
							}
							.howMuch-about-text {
								padding: 0 20px 0 0;
							}
						}
					`}</style>
				</div>
	}
}

export default HowMuch