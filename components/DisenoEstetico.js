import Link from 'next/link'

class DisenoEstetico extends React.Component {

	render () {
		return 	<div className="disenoEstetico">

					<div className="df" style={{alignItems: 'flex-start'}}>
						<div className="disenoEstetico-web">
							<h2 className="title-h2">DISEÑO ESTÉTICO</h2>
							<p className="paragraph-small">
								Destacarse de la multitud. La mayoría de nosotros elegimos productos no solo por su funcionalidad, sino también porque son agradables a la vista. Un buen sitio web es también un diseño estético. Nuestra empresa presta especial atención a los detalles. Sin él, ningún producto será perfecto.
							</p>
							<a className="btn-action">
								DESCUBRIR
							</a>	
						</div>

						<div className="disenoEstetico-bg">
							<figure className="disenoEstetico-item">
								<div className="disenoEstetico-item-mascara">
									<div className="disenoEstetico-item-img" style={{background: "url(static/img/portafolio/profe.jpg) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</div>
					</div>

					<style jsx>{`
						.disenoEstetico {
							margin: 80px auto;
						}

						.disenoEstetico-web {
							background: linear-gradient(to right, rgba(0,165,194,1) 0%,rgba(0,196,214,1) 100%);
							padding: 100px 130px 100px 40px;
							box-sizing: border-box;
							text-align: left;
							color: white;
							box-shadow: 0 40px 120px -20px rgba(0,0,0,0.6);
						}

						.disenoEstetico-web h2 {
							font-size: 22px;
							max-width: 300px;
							margin: 0 auto 10px;
							padding-right: 70px;
							box-sizing: border-box;
							margin-left: 100px;
							font-family: 'Viga';
						}
						.disenoEstetico-web p {
							line-height: 1.2;
							letter-spacing: 0.5px;
							max-width: 300px;
							margin-left: 100px;
						}
						.disenoEstetico-web a {
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


						.disenoEstetico-bg {
							width: 40%;
							position: relative;
						}
						.disenoEstetico-item {
							margin: 10px auto;
							height: 570px;
							width: 950px;
							background: url(/static/img/Macbook.svg) center center no-repeat;
							background-size: cover;
							position: absolute;
							left: -30px;
						}

						.disenoEstetico-item-mascara {
							height: 492px;
							overflow: hidden;
							position: relative;
						}

						.disenoEstetico-item-img {
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
						
						@media screen and (max-width: 1024px) {
							.disenoEstetico-web {
								padding: 70px 50px 70px 0;
								margin-left: 2%;
							}
							.disenoEstetico-web h2 {
								margin-left: 70px;
							}
							.disenoEstetico-web p {
								margin-left: 70px;
							}
							.disenoEstetico-web a {
								margin-left: 70px;
							}

							.disenoEstetico-item {
								height: 490px;
								width: 830px;
							}
							.disenoEstetico-item-mascara {
								height: 426px;
							}
							.disenoEstetico-item-img {
								top: 30px;
							}
						}

						@media screen and (max-width: 767px) {
							.disenoEstetico {
								margin-bottom: 0;
								margin-top: 50px;
							}
							.disenoEstetico .df {
								flex-direction: column;
							}
							.disenoEstetico-web {
								width: 80%;
								margin: auto;
								padding-right: 0;
							}
							.disenoEstetico-web h2 {
								margin: 0 auto 10px auto;
								padding: 0;
							}
							.disenoEstetico-web p {
								margin: auto;
							}
							.disenoEstetico-web a {
								margin: 10px auto 0;
								max-width: 120px;
								display: block;
							}

							.disenoEstetico-bg {
								width: 530px;
								margin: auto;
								margin-top: 40px;
							}
							.disenoEstetico-item {
								position: inherit;
								left: 0;
								width: auto;
								height: 320px;
							}
							.disenoEstetico-item-mascara {
								height: 320px;
							}
							.disenoEstetico-item-img {
								top: 23px;
								height: 256px;
							}
						}

						@media screen and (max-width: 530px) {
							.disenoEstetico-web {
								padding: 40px 20px;
								width: 90%;
							}
							.disenoEstetico-bg {
								width: 300px;
								margin: auto;
								margin-top: 40px;
							}
							.disenoEstetico-item {
								height: 180px;
							}
							.disenoEstetico-item-mascara {
								height: 160px;
							}
							.disenoEstetico-item-img {
								top: 13px;
								height: 142px;
							}
						}



						
					`}</style>
				</div>
	}
}

export default DisenoEstetico;








