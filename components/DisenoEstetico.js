import Link from 'next/link'

class DisenoEstetico extends React.Component {

	render () {
		return 	<div className="disenoEstetico">

					<div className="df" style={{alignItems: 'flex-start'}}>
						<div className="services-web">
							<h2>DISEÑO ESTÉTICO</h2>
							<p>
								Destacarse de la multitud. La mayoría de nosotros elegimos productos no solo por su funcionalidad, sino también porque son agradables a la vista. Un buen sitio web es también un diseño estético. Nuestra empresa presta especial atención a los detalles. Sin él, ningún producto será perfecto.
							</p>
							<a>
								DESCUBRIR
							</a>	
						</div>

						<div className="services-free-bg">
							<figure className="portafolio-item">
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/profe.jpg) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</div>
					</div>

					<style jsx>{`
						.disenoEstetico {
							margin: 80px auto;
						}
						.portafolio-item {
							margin: 10px auto;
							height: 630px;
							width: 1034px;
							background: url(/static/img/Macbook.svg) center center no-repeat;
							background-size: cover;
							position: absolute;
							left: -50px;
						}

						.portafolio-item-mascara {
							height: 543px;
							overflow: hidden;
							position: relative;
						}

						.portafolio-item-img {
							max-width: 100%;
							width: 77%;
							height: auto;
							display: block;
							position: absolute;
							top: 45px;
							right: 0;
							left: 0;
							margin: auto;
							border-radius: 2px;
							height: 503px;
							background-size: cover;
						}

						.services {
							padding-top: 80px;
						}

						.services-web {
							background: linear-gradient(to right, rgba(0,165,194,1) 0%,rgba(0,196,214,1) 100%);
							padding: 130px 150px 130px 60px;
							box-sizing: border-box;
							text-align: left;
							color: white;
						}

						.services-web h2 {
							font-size: 22px;
							max-width: 300px;
							margin: 0 auto 10px;
							padding-right: 70px;
							box-sizing: border-box;
							margin-left: 100px;
							font-family: 'Poppins';
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
							font-size: 14px;
							border-radius: 4px;
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
						}

						.services-drone p {
							max-width: 300px;
							margin: 0 auto 10px;
							padding-left: 25px;
							box-sizing: border-box;
							position: relative;
							z-index: 1;
							font-family: Montserrat;
							font-size: 14px;
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

							position: relative;
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
							max-width: 410px;
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
						}

						.services-free p {
							font-size: 14px;
							font-family: Montserrat;
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

export default DisenoEstetico;