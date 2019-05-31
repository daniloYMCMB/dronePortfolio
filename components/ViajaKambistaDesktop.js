import React from 'react';
import ReactDOM from 'react-dom';

class ViajaKambistaDesktop extends React.Component {

	handleDown () {
		fullpage_api.moveSectionDown();
	}
	
	render () {
		return 	<div className="ViajaKambista">
					<div className="ViajaKambista-container">

						<h1 className="ViajaKambista-title">
							¡Viaja <span>con</span> <br/>
							<i>Kambista!</i>
						</h1>
						<p className="ViajaKambista-subtitle">
							Acumular <strong>Millas LATAM Pass</strong> <br/>
							cambiando con <strong>Kambista</strong>
						</p>
						<a href="" className="ViajaKambista-btn">
							Empieza a <strong>Acumular Millas</strong>
							<img className="ViajaKambista-btn-img" src="./static/img/avion.svg" alt=""/>
						</a>
						<span 
							onClick={this.handleDown} 
							className="ViajaKambista-down">
						</span>

					</div>

					<style jsx>{`
						.ViajaKambista {
							color: white;
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							position: relative;
							text-align: center;
						}
						.ViajaKambista-down {
							display: none;
						}
						.ViajaKambista-container {
							width: 310px;
							margin: auto;
						}
						.ViajaKambista-title {
							font-family: 'Viga';
							font-size: 50px;
							letter-spacing: -1px;
							text-align: left;
							width: 100%;
						}
						.ViajaKambista-title span {
							font-size: 35px;
						}
						.ViajaKambista-title i {
							font-size: 68px;
						}
						.ViajaKambista-subtitle {
							font-family: 'Montserrat';
							font-size: 16px;
							text-align: left;
						}
						.ViajaKambista-subtitle strong {
							font-weight: bold;
							font-size: 18px;
						}
						.ViajaKambista-btn {
							background: #0A19A1;
							box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
							border-radius: 8px;
							padding: 17px 0px 15px 20px;
							box-sizing: border-box;
							color: white;
							display: block;
							margin-top: 15px;
							text-align: left;
							font-size: 16px;
							font-family: 'Montserrat';
							position: relative;
						}
						.ViajaKambista-btn strong{
							font-weight: bold;
						}
						.ViajaKambista-btn-img{
							position: absolute;
							top: -6px;
							right: 0;
							background: #041082;
							width: 60px;
							height: 60px;
							padding: 19px 10px;
							border-radius: 8px;
							box-sizing: border-box;
							box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.55);
						}

						@media screen and (max-width: 374px){
							.ViajaKambista-container {
								max-width: 250px;
							}
							.ViajaKambista-title {
								font-size: 45px;
							}
							.ViajaKambista-title span {
								font-size: 30px;
							}
							.ViajaKambista-title i {
								font-size: 56px;
							}
							.ViajaKambista-subtitle {
								font-size: 14px;
							}
							.ViajaKambista-btn {
								font-size: 12px;
								padding-left: 10px;
							}
						}

					`}</style>
				</div>
	}
}

export default ViajaKambistaDesktop;