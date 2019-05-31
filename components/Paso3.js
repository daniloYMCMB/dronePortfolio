import React from 'react';
import ReactDOM from 'react-dom';

class Paso3 extends React.Component {

	handleDown () {
		fullpage_api.moveSectionDown();
	}

	render () {
		return 	<div className="Paso3">
					<div className="Paso3-container">

						<div className="Paso3-title">
							<h4>Paso a Paso</h4>
							<p>Empieza a ganar millas siguiendo estos  
								<strong>3 simples pasos</strong>
							</p>
						</div>

						<figure className="Paso3-Image">
							<img 
								src={this.props.image} 
								alt=""
								className="avion2" />
						</figure>

						<p className="Paso3-footer">
							{this.props.footerFirst} <br/>
							<a target="_blank" href="https://www.kambista.com"><strong>{this.props.footerStrong}</strong></a> <br/>
							{this.props.footerEnd}
						</p>

						<span 
							onClick={this.handleDown} 
							className="ViajaKambista-down">
						</span>

					</div>

					<style jsx>{`
						.Paso3 {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							position: relative;
							text-align: center;
							min-width: 300px;
						}
						.Paso3-container {
							width: 90%; 
							margin: auto;
						}
						.Paso3-title {
							display: none;
						}
						.Paso3-container h4 {
							color: #041082;
							font-size: 35px;
							// margin-top: -115px;
							margin-bottom: 5px;
						}
						.Paso3-container p {
							color: gray;
							margin-bottom: 30px;
						}
						.Paso3-container p strong {
							color: #041082;
							display: block;
						}
						.Paso3-title {
							// margin-top: -70px;
						}
						.Paso3-title h3 {
							color: #041082;
							font-size: 35px;
						}
						.Paso3-title p {
							color: gray;
							font-size: 14px;
							margin-bottom: 30px;
							margin-top: 5px;
						}
						.Paso3-title strong {
							color: #041082;
							font-size: 15px;
						}
						.Paso3-Image {
							margin-bottom: 20px;
						}
						.Paso3-Image img{
							max-width: 110px;
							width: 100%;
							margin: auto;
							display: block;
							margin-top: 55px;
						}
						.Paso3-footer {
							color: gray;
						}
						.Paso3-footer strong{
							color: #041082;
						}
						.ViajaKambista-down {
							background: url(/static/img/arrow.svg);
							background-size: cover;
							position: absolute;
							bottom: 20px;
							left: 0;
							right: 0;
							margin: auto;
							width: 5px;
							height: 25px;
							transform: rotate(-90deg);
							display: none;
						}

						@media screen and (max-width: 767px){
							.Paso3-container p {
								font-size: 12px;
							}
							.Paso3-title {
								display: block;
							}
							.ViajaKambista-down {
								background: url(/static/img/arrow.svg);
								background-size: cover;
								position: absolute;
								bottom: 20px;
								left: 0;
								right: 0;
								margin: auto;
								width: 5px;
								height: 25px;
								transform: inherit;
								display: block;
							}
						}	

						@media screen and (max-width: 374px){
							.Paso3-title p {
								font-size: 12px;
							}
							.Paso3-title strong {
								font-size: 13px;
								margin-top: 5px;
								font-weight: bold;
							}
							.Paso3-footer {
								font-size: 13px;
							}
						}

					`}</style>
				</div>
	}
}

export default Paso3;