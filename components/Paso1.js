import React from 'react';
import ReactDOM from 'react-dom';

class Paso1 extends React.Component {

	handleDown () {
		fullpage_api.moveSectionDown();
	}

	render () {
		return 	<div className="Paso1">
					<div className="Paso1-container">

						<div className="Paso1-title">
							<h3>¿Qué plan prefieres para tus clientes?</h3>
							<p>Empieza a ganar más clientes <br/><strong>ahora</strong></p>
						</div>

						<figure className="Paso1-Image">
							<img 
								src={this.props.image} 
								alt=""
								className="avion2" />
						</figure>

						<p className="Paso1-footer">
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
						.Paso1 {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							position: relative;
							text-align: center;
							min-width: 300px;
						}
						.Paso1-container {
							width: 90%; 
							margin: auto;
						}
						.Paso1-title {
							// margin-top: -70px;
							display: none;
						}
						.Paso1-title h3 {
							color: #041082;
							font-size: 35px;
						}
						.Paso1-title p {
							color: gray;
							font-size: 14px;
							margin-bottom: 30px;
							margin-top: 5px;
						}
						.Paso1-title strong {
							color: #041082;
							font-size: 15px;
						}
						.Paso1-Image {
							margin-bottom: 20px;
						}
						.Paso1-Image img{
							max-width: 150px;
							width: 100%;
							margin: auto;
							display: block;
						}
						.Paso1-footer {
							color: gray;
						}
						.Paso1-footer strong{
							color: #041082;
						}
						.ViajaKambista-down {
							background: url(./static/img/arrow.svg);
							background-size: cover;
							position: absolute;
							bottom: 20px;
							top: 0;
							right: 0;
							margin: auto;
							width: 5px;
							height: 25px;
							transform: rotate(-90deg);
						}

						@media screen and (max-width: 767px){
							.Paso1-title {
								display: block;
							}
							.ViajaKambista-down {
								background: url(./static/img/arrow.svg);
								background-size: cover;
								position: absolute;
								bottom: 20px;
								left: 0;
								right: 0;
								margin: auto;
								width: 5px;
								height: 25px;
								transform: inherit;
								top: inherit;
							}
						}

						@media screen and (max-width: 374px){
							.Paso1-title p {
								font-size: 12px;
							}
							.Paso1-title strong {
								font-size: 13px;
								margin-top: 5px;
								font-weight: bold;
							}
							.Paso1-footer {
								font-size: 13px;
							}
						}

					`}</style>
				</div>
	}
}

export default Paso1;