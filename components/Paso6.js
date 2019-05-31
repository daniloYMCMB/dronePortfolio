import React from 'react';
import ReactDOM from 'react-dom';

class Paso6 extends React.Component {

	handleDown () {
		fullpage_api.moveTo(1, 0);;
	}

	render () {
		return 	<div className="Paso6">
					<div className="Paso6-container">

						<div className="Paso6-title">
							<h3>¿Cuántas <strong>Millas LATAM Pass</strong> <br/>
								podrás acumular?
							</h3>
						</div>

						<figure className="Paso6-Image">
							<img 
								src="/static/img/paso6.svg" 
								alt=""
								className="avion2" />
						</figure>


						<a className="Paso6-btn-desktop" href="">Términos y Condiciones</a>

						<div className="btns">
							<a className="Paso6-btn" href="">Términos y Condiciones</a>
							<span
								className="Paso6-btn active"
								onClick={this.handleDown} 
							>Volver al Inicio</span>
						</div>

					</div>

					<style jsx>{`
						.Paso6 {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							position: relative;
							text-align: center;
							z-index: 9;
						}
						.Paso6-container {
							width: 100%;
							margin: auto;
							display: flex;
							height: 100%;
							flex-direction: column;
							justify-content: space-evenly;
						}
						.Paso6-title {
							display: none;
						}
						.Paso6-title h3 {
							color: #a6a6a6;
							font-size: 18px;
							margin-top: 40px;
						}
						.Paso6-title strong {
							color: #041082;
							letter-spacing: -1px;
							font-size: 23px;
						}
						.Paso6-Image {
							margin-bottom: 20px;
						}
						.Paso6-footer {
							font-family: 'Montserrat';
							color: #E5E5E5;
							text-align: left;
						}
						img {
							max-width: 100%;
							height: auto;
							display: block;
							margin: auto;
						}
						.ViajaKambista-down {
							background: url(/static/img/arrow-down.svg);
							background-size: cover;
							position: absolute;
							bottom: 40px;
							left: 0;
							right: 0;
							margin: auto;
							width: 30px;
							height: 30px;
						}
						.Paso6-btn-desktop {
							display: block;
							background: white;
							color: gray;
							box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.35);
							padding: 12px 0px;
							width: 240px;
							margin: 0 auto 10px auto;
							border-radius: 5px;
							font-size: 13px;
							box-sizing: border-box;
							transition: .4s linear;
							margin-top: -150px;
						}
						.btns {
							display: none;
						}
						.Paso6-btn {
							display: block;
							background: white;
							color: gray;
							box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.35);
							margin-bottom: 10px;
							padding: 12px 0px;
							width: 240px;
							margin: 0 auto 10px auto;
							border-radius: 5px;
							font-size: 13px;
							box-sizing: border-box;
							transition: .4s linear;
						}
						.Paso6-btn.active,
						.Paso6-btn:hover {
							background: #041082;
							color: white;
						}

						@media screen and (max-width: 767px){
							.btns,
							.Paso6-title {
								display: block;
							}
							.Paso6-btn-desktop {
								display: none;
							}
						}

						@media screen and (max-width: 374px){
							.Paso6-title h3 {
								font-size: 14px;
							}
							.Paso6-title strong {
								font-size: 17px;
							}
							img {
								max-width: 70%;
								margin: auto;
							}
						}
					`}</style>
				</div>
	}
}

export default Paso6;