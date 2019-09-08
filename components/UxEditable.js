import Link from 'next/link'

class UxEditable extends React.Component {

	render () {
		return 	<div className="UxEditable">

					<div className="df">
						<div className="services-web">
							<h2>EXPERIENCIA POSITIVA <br/>DE USUARIO</h2>
							<p>
								Proyecto moderno e individual que se adapta a su negocio e industria. Estamos interesados ​​en el diseño web de tal manera que el producto sea funcional, intuitivo y atractivo para el usuario.
							</p>
                            <Link href="/portafolio">
                                <a>
								VER PORTAFOLIO
								</a>	
							</Link>
						</div>

						<div className="services-free-bg">
							<div className="services-free">
								<h2>COMPLETAMENTE <br/>EDITABLE!</h2>
								<p>
									Sistema de gestión de contenido simple e intuitivo que le permite cambiar el contenido de su sitio web de forma independiente y gratuita.  Le enseñaremos cómo editar su sitio web en el futuro.
								</p>
							</div>
						</div>
					</div>

					<style jsx>{`
						.UxEditable {
							margin: 80px auto;
						}
						.UxEditable-item {
							margin: 10px auto;
							height: 570px;
							width: 950px;
							background: url(/static/img/Macbook.svg) center center no-repeat;
							background-size: cover;
							position: absolute;
							left: -30px;
						}

						.UxEditable-item-mascara {
							height: 492px;
							overflow: hidden;
							position: relative;
						}

						.UxEditable-item-img {
							max-width: 100%;
							width: 76%;
							height: auto;
							display: block;
							position: absolute;
							top: 41px;
							right: 0;
							left: 0;
							margin: auto;
							border-radius: 2px;
							height: 453px;
							background-size: cover;
						}

						.services {
							padding-top: 80px;
						}

						.services-web {
							background: linear-gradient(to right, rgba(0,165,194,1) 0%,rgba(0,196,214,1) 100%);
							padding: 100px 130px 100px 40px;
							box-sizing: border-box;
							text-align: left;
							color: white;
							box-shadow: 0 40px 120px -20px rgba(0,0,0,0.6);
						}

						.services-web h2 {
							font-size: 22px;
							max-width: 300px;
							margin: 0 auto 10px;
							box-sizing: border-box;
							margin-left: 100px;
							font-family: 'Viga';
						}
						.services-web p {
							line-height: 1.2;
							letter-spacing: 0.5px;
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
							font-size: 16px;
							border-radius: 4px;
							font-family: Viga;
						}

						.services-free-bg {
							width: 40%;
							position: relative;
						}				

						.services-free {
							background: linear-gradient(to right, rgba(255,255,255,0.2) 0%, rgba(237,237,237,0.4) 100%);
							position: relative;
							box-shadow: 0 40px 120px -20px rgba(0,0,0,0.6);
							padding: 70px 150px;
							text-align: left;
							position: absolute;
							left: -90px;
							box-sizing: border-box;
							top: -160px;
						}

						.services-free h2{
							font-size: 22px;
							margin-bottom: 10px;
							position: relative;
							z-index: 1;
							font-family: Viga;
						}

						.services-free p {
							margin-bottom: 10px;
							position: relative;
							line-height: 1.2;
							z-index: 1;
						}

						.services-free a {
							margin: auto;
							display: inline-block;
							padding: 13px 15px;
							background: #00BCD4;
							color: white;
							box-sizing: border-box;
							margin-top: 10px;
							font-size: 16px;
							border-radius: 4px;
							font-family: Viga;
						}

						@media screen and (max-width: 1180px) {
							.services-web {
								margin-left: 30px;
								padding-left: 10px;
							}
							.services-web h2,
							.services-web p,
							.services-web a {
								margin-left: 50px;
							}
							.services-free-bg {
								width: 45%;
							}
							.services-free {
								top: -140px;
								padding 70px 40px 70px 80px;
								left: -60px;
								margin-right: 30px;
							}
						}

						@media screen and (max-width: 900px) {
							.services-free {
								top: -160px;
							}
							.services-web {
								padding-right: 70px;
							}
						}

						@media screen and (max-width: 767px) {
							.UxEditable {
								margin: 50px auto;
							}
							.UxEditable .df {
								flex-direction: column;
							}

							.services-web {
								margin: 0;
								width: 90%;
								padding: 60px 110px;
							}
							.services-web h2,
							.services-web p,
							.services-web a {
								margin-left: 0px;
								max-width: 100%;
							}

							.services-free-bg {
								width: 80%;
							}
							.services-free {
								position: relative;
								top: -30px;
								width: 100%;
								padding: 80px 60px 50px 60px;
								left: 0;
								right: 0;
								margin: auto;
							}
						}

						@media screen and (max-width: 530px) {
							.UxEditable .df {
								flex-direction: column;
							}

							.services-web {
								padding: 50px 30px;
							}
							.services-web a {
								font-size: 14px;
							}
							.services-free {
								padding: 50px 30px 40px 30px;
							}
						}
					`}</style>
				</div>
	}
}

export default UxEditable