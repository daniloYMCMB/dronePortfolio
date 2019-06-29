import Link from 'next/link'

class ProfessionalEquipment extends React.Component {

	render() {
		return 	<div className="professionalEquipment">

					<div className="df" style={{alignItems:'stretch'}}>

						<div className="professionalEquipment-text">
							<h2>EQUIPOS PROFESIONALES</h2>
							<p>Usamos el avión no tripulado profesional para proporcionar fotos de alta calidad y videos 4K UHD. Suministramos ángulos innovadores, nunca antes vistos, que pueden ofrecer innumerables ventajas para casi cualquier negocio.
							</p>
						</div>

						<figure className="professionalEquipment-responsive">
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
								height: 220px;
								width: 50%;
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