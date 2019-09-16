import Link from 'next/link'

class ProfessionalEquipment extends React.Component {

	render() {
		return 	<div className="professionalEquipment" id="ProfessionalEquipment">

					<div className="df" style={{alignItems:'stretch'}}>

						<div className="professionalEquipment-text" style={this.props.styleLeft}>
							<h2>{this.props.titleLeft}</h2>
							<p>
								{this.props.descriptionLeft}
							</p>
						</div>

						<figure className="professionalEquipment-responsive" style={{backgroundImage: this.props.bgRight}}>
						</figure>
					</div>

					<style jsx>{`
						.professionalEquipment {
							margin: auto;
						}
						.professionalEquipment-text {
							text-align: left;
							margin-top: 60px;
							padding-top: 3%;
							padding-left: 4%;
							padding-right: 2%;
							box-sizing: border-box;
							width: 40%;
						}
						.professionalEquipment-text h2 {
							font-size: 22px;
							margin-bottom: 10px;
							font-family: Viga;
							position: relative;
						}
						.professionalEquipment-text h2:before {
							content: "";
							position: absolute;
							width: 50px;
							height: 3px;
							background: #00BCD4;
							top: -15px;
							left: 0;
						}
						.professionalEquipment-text p {
							line-height: 1.3;
							letter-spacing: -0.1px;
							color: #656565;
						}
						.professionalEquipment-responsive {
							background: url(/static/img/DJI-Mavic-Pro.png) top center no-repeat;
							background-size: cover;
							width: 50%;
							margin-top: 50px;
							height: 320px;
						}

						@media screen and (max-width: 1100px) {
							.professionalEquipment-text {
								width: 50%;
							}
							.professionalEquipment-responsive {
								height: 250px;
							}
							.leftSide {
								width: auto;
								padding-left: 0;
								margin-top: 0;
							}
						}

						@media screen and (max-width: 767px) {
							.professionalEquipment .df {
								flex-direction: column;
							}
							.professionalEquipment-text {
								margin: 60px auto 20px auto;
								width: 90%;
							}
							.professionalEquipment-responsive {
								height: 232px;
								width: 80%;
								margin: auto;
							}
						}

						@media screen and (max-width: 500px) {
							.professionalEquipment-text {
								width: 95%;
							}
							.professionalEquipment-responsive {
								height: 200px;
								width: 95%;
							}
						}

						@media screen and (max-width: 400px) {
							.professionalEquipment-responsive {
								height: 179px;
							}
						}

					`}</style>
				</div>
	}
}

export default ProfessionalEquipment