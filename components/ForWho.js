import Link from 'next/link'

class ForWho extends React.Component {

	render() {
		return 	<div className="ForWho">

					<div className="df" style={{alignItems:'stretch'}}>

						<div className="ForWho-text" style={this.props.styleLeft}>
							<h2>{this.props.titleLeft}</h2>
							<p>
								{this.props.descriptionLeft}
							</p>
						</div>

						<figure className="ForWho-responsive" style={{backgroundImage: this.props.bgRight}}>
						</figure>
					</div>

					<style jsx>{`
						.ForWho {
							margin: auto;
						}
						.ForWho-text {
							text-align: left;
							margin-top: 60px;
							padding-top: 3%;
							padding-left: 4%;
							padding-right: 2%;
							box-sizing: border-box;
							width: 40%;
							margin-left: 5%;
						}
						.ForWho-text h2 {
							font-size: 22px;
							margin-bottom: 10px;
							font-family: Viga;
							position: relative;
						}
						.ForWho-text h2:before {
							content: "";
							position: absolute;
							width: 50px;
							height: 3px;
							background: #00BCD4;
							top: -15px;
							left: 0;
						}
						.ForWho-text p {
							line-height: 1.3;
							letter-spacing: -0.1px;
							color: #656565;
						}
						.ForWho-responsive {
							background: url(/static/img/DJI-Mavic-Pro.png) top center no-repeat;
							background-size: cover;
							width: 60%;
							margin-top: 50px;
							height: 320px;
						}

						@media screen and (max-width: 1180px) {
							.ForWho-text {
								width: 50%;
								margin-left: 0;
							}
							.ForWho-responsive {
								height: 250px;
							}
						}

						@media screen and (max-width: 767px) {
							.ForWho .df {
								flex-direction: column;
							}
							.ForWho-text {
								margin: 60px auto 20px auto;
								width: 90%;
							}
							.ForWho-responsive {
								height: 232px;
								width: 80%;
								margin: auto;
							}
						}

						@media screen and (max-width: 500px) {
							.ForWho-text {
								width: 95%;
								padding: 0 10px;
							}
							.ForWho-responsive {
								height: 200px;
								width: 95%;
							}
						}

						@media screen and (max-width: 400px) {
							.ForWho-responsive {
								height: 179px;
							}
						}

					`}</style>
				</div>
	}
}

export default ForWho