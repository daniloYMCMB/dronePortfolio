import React from 'react';
import ReactDOM from 'react-dom';

class Paso2 extends React.Component {

	handleDown () {
		fullpage_api.moveSectionDown();
	}

	render () {
		return 	<div className="Paso2">
					<div className="Paso2-container">

						<div className="Paso2-title desktop">
							<h3>{this.props.title2}</h3>
							<p>{this.props.subtitle} <strong>{this.props.subtitleStrong}</strong></p>
						</div>

						<div className="Paso2-title">
							<h4>Paso a Paso</h4>
							<p>Empieza a ganar millas siguiendo estos  
								<strong>3 simples pasos</strong>
							</p>
						</div>


						<figure className="Paso2-Image">
							<img 
								src={this.props.image} 
								alt=""
								className="avion2" />
						</figure>

						<p className="Paso2-footer">
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
						.Paso2 {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							position: relative;
							text-align: center;
							min-width: 300px;
						}
						.Paso2-container {
							width: 90%; 
							margin: auto;
						}
						.Paso2-container h4 {
							color: #041082;
							font-size: 35px;
							margin-bottom: 5px;
						}
						.Paso2-container p {
							color: gray;
							margin-bottom: 30px;
						}
						.Paso2-container p strong {
							color: #041082;
							display: block;
						}
						.Paso2-title.desktop {
							display: block;
							margin-top: -35px;
						}
						.Paso2-title {
							display: none;
						}
						.Paso2-title h3 {
							color: #041082;
							font-size: 20px;
						}
						.Paso2-title p {
							color: gray;
							font-size: 14px;
							margin-bottom: 30px;
							margin-top: 5px;
						}
						.Paso2-title strong {
							color: #041082;
							font-size: 15px;
						}
						.Paso2-Image {
							margin-bottom: 20px;
						}
						.Paso2-Image img{
							max-width: 110px;
							width: 100%;
							margin: auto;
							display: block;
						}
						.Paso2-footer {
							color: gray;
						}
						.Paso2-footer strong{
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
							.Paso2-container p {
								font-size: 12px;
							}
							.Paso2-title.desktop {
								display: none;
							}
							.Paso2-title {
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
								left: 0;
							}
						}						

						@media screen and (max-width: 374px){
							.Paso2-title p {
								font-size: 12px;
							}
							.Paso2-title strong {
								font-size: 13px;
								margin-top: 5px;
								font-weight: bold;
							}
							.Paso2-footer {
								font-size: 13px;
							}
						}

					`}</style>
				</div>
	}
}

export default Paso2;