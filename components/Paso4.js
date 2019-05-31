import React from 'react';
import ReactDOM from 'react-dom';

class Paso4 extends React.Component {

	handleDown () {
		fullpage_api.moveSectionDown();
	}

	render () {
		return 	<div className="Paso4">
					<div className="Paso4-container">

						<div className="Paso4-title">
							<h3>¿Cuántas <strong>Millas LATAM Pass</strong> <br/>
								podrás acumular?
							</h3>
						</div>

						<figure className="Paso4-Image">
							<img 
								src="./static/img/ganamillas.svg" 
								alt=""
								className="avion2" />
						</figure>

						<p className="Paso4-footer">
							(*) Regístrate por 1era vez en kambista, ingresa tu número de socio LATAM Pass y haz tu primer cambio por $500 o más. 
						</p>
						
					</div>

					<style jsx>{`
						.Paso4 {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							position: relative;
							text-align: center;
						}
						.Paso4-container {
							margin: auto;
							display: flex;
							height: 100%;
							flex-direction: column;
							justify-content: space-evenly;
						}
						.Paso4-title {
							display: none;
						}
						.Paso4-title h3 {
							color: #a6a6a6;
							font-size: 18px;
							margin-top: 60px;
						}
						.Paso4-title strong {
							color: #041082;
							letter-spacing: -1px;
							font-size: 23px;
						}
						.Paso4-Image {
							margin-bottom: 20px;
						}
						.Paso4-Image img {
								max-width: 100%;
								height: auto;
								display: block;
								margin: auto;
							}
						.Paso4-footer {
							font-family: 'Montserrat';
							color: #E5E5E5;
							text-align: left;
							max-width: 220px;
							margin: 0 auto;
							position: relative;
							z-index: 9;
							margin-top: -150px;
							font-size: 14px;
						}
						.ViajaKambista-down {
							background: url(./static/img/arrow-down.svg);
							background-size: cover;
							position: absolute;
							bottom: 40px;
							left: 0;
							right: 0;
							margin: auto;
							width: 30px;
							height: 30px;
						}

						@media screen and (max-width: 767px){

							.Paso4-title {
								display: block;
							}
							.Paso4-footer {
								display: block;
								max-width: 320px;
								margin-top: 0;
							}
						}		

						@media screen and (max-width: 374px){
							.Paso4-container {
								width: 80%;
							}
							.Paso4-title {
								display: block;
							}
							.Paso4-title h3 {
								font-size: 14px;
							}
							.Paso4-title strong {
								font-size: 17px;
							}
							.Paso4-footer {
								max-width: 250px;
								margin: 0 auto;
								font-size: 12px;
							}
							img {
								max-width: 80%;
								margin: auto;
							}
						}
					`}</style>
				</div>
	}
}

export default Paso4;