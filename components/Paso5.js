import React from 'react';
import ReactDOM from 'react-dom';

class paso5 extends React.Component {

	handleDown () {
		fullpage_api.moveSectionDown();
	}

	render () {
		return 	<div className="paso5">
					<div className="paso5-container">

						<div className="paso5-title">
							<h3>¿Cuántas <strong>Millas LATAM Pass</strong> <br/>
								podrás acumular?
							</h3>
						</div>

						<figure className="paso5-image">
							<img
								src="./static/img/paso5.svg" 
								alt=""
								className="avion2" />
						</figure>

					</div>

					<style jsx>{`
						.paso5 {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							position: relative;
							text-align: center;
						}
						.paso5-container {
							width: 100%;
							margin: auto;
							display: flex;
							height: 100%;
							flex-direction: column;
							justify-content: space-evenly;
						}
						
						.paso5-title h3 {
							color: #a6a6a6;
							font-size: 18px;
							margin-top: 100px;
						}
						.paso5-title strong {
							color: #041082;
							letter-spacing: -1px;
							font-size: 23px;
						}
						.paso5-image {
							max-width: 400px;
						}
						.paso5-image img {
							max-width: 240%;
							height: auto;
							display: block;
							margin: auto;
							margin-left: -180px;
							margin-bottom: -20px;
							position: relative;
							z-index: 9;
						}
						.paso5-footer {
							font-family: 'Montserrat';
							color: #E5E5E5;
							text-align: left;
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

						@media screen and (max-width: 1024px){
							.paso5-image img {
								margin-left: -140px;
							}
						}

						@media screen and (max-width: 767px){
							.paso5-title {
								display: block;
							}
							.paso5-image img {
								margin-bottom: -40px;
							}
						}

						@media screen and (max-width: 374px){
							.paso5-title h3 {
								font-size: 14px;
							}
							.paso5-title strong {
								font-size: 17px;
							}
						}
					`}</style>
				</div>
	}
}

export default paso5;