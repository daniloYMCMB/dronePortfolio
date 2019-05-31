import React from 'react';
import ReactDOM from 'react-dom';

class ViajaKambistaImgDesktop extends React.Component {

	handleDown () {
		fullpage_api.moveSectionDown();
	}

	render () {
		return 	<div className="ViajaKambistaImg">
					<div className="ViajaKambistaImg-container">

						<figure className="ViajaKambistaImage">
							<img 
								src="./static/img/telefono2.svg" 
								alt=""
								className="telefono2" />
							<img 
								src="./static/img/nubes2.svg" 
								alt=""
								className="nube2" />
							<img 
								src="./static/img/AvionLatam2.svg"
								alt=""
								className="avion2" />
						</figure>
						<span 
							onClick={this.handleDown} 
							className="ViajaKambista-down">
						</span>

					</div>

					<style jsx>{`
						.ViajaKambistaImg {
							position: relative;
							text-align: center;
						}
						.ViajaKambistaImg:before {
							content:"";
							background: url(./static/img/nubes1.svg) -35px 0px;
							background-size: cover;
							position: absolute;
							bottom: 0;
							left: 0;
							right: 0;
							width: 100%;
							height: 30vh;
							display: none;
						}
						.ViajaKambista-down {
							display: none;
						}
						.ViajaKambistaImg-container {
							width: 90%;
							margin: auto;
						}
						.telefono2 {
							width: 630px;
						}
						.nube2 {
							position: absolute;
							top: 50px;
							bottom: 0;
							left: 30px;
							margin: auto;
							width: 140%;
							opacity: .9;
						}
						.avion2 {
							position: absolute;
							top: -30px;
							bottom: 0;
							left: 180px;
							margin: auto;
							max-width: 100%;
						}

						@media screen and (max-width: 1024px){
							.ViajaKambistaImg {
								display: none;
							}
						}

						@media screen and (max-width: 374px){
							.telefono2 {
								width: 470px;
								right: -30px;
							}
						}

						
					`}</style>
				</div>
	}
}

export default ViajaKambistaImgDesktop;