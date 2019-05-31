import React from 'react';
import ReactDOM from 'react-dom';

class ViajaKambistaImg extends React.Component {

	handleDown () {
		fullpage_api.moveSectionDown();
	}

	render () {
		return 	<div className="ViajaKambistaImg">
					<div className="ViajaKambistaImg-container">

						<figure className="ViajaKambistaImage">
							<img 
								src="/static/img/telefono2.svg" 
								alt=""
								className="telefono2" />
							<img 
								src="/static/img/nubes2.svg" 
								alt=""
								className="nube2" />
							<img 
								src="/static/img/AvionLatam2.svg" 
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
							background: url(/static/img/bg1.svg) -233px 0px;
							background-size: cover;
							color: white;
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							position: relative;
							text-align: center;
						}
						.ViajaKambistaImg:before {
							content:"";
							background: url(/static/img/nubes1.svg) -35px 0px;
							background-size: cover;
							position: absolute;
							bottom: 0;
							left: 0;
							right: 0;
							width: 100%;
							height: 30vh;
						}
						.ViajaKambista-down {
							background: url(/static/img/arrow-down.svg);
							background-size: cover;
							position: absolute;
							bottom: 30px;
							left: 0;
							right: 0;
							margin: auto;
							width: 30px;
							height: 30px;
						}
						.ViajaKambistaImg-container {
							width: 90%;
							margin: auto;
						}
						.telefono2 {
							position: absolute;
							right: -70px;
							bottom: 50px;
							width: 630px;
						}
						.nube2 {
							position: absolute;
							top: -30px;
							right: -150px;
							bottom: 0;
							left: -180px;
							margin: auto;
							width: 150%;
							opacity: .9;
						}
						.avion2 {
							position: absolute;
							top: -30px;
							right: 0;
							bottom: 0;
							left: 0;
							margin: auto;
							max-width: 120%;
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

export default ViajaKambistaImg;