class TitleBlack extends React.Component {

	render () {
		return 	<div className="title-container">

					<div className="title">
						<h3>{this.props.title}</h3>
						<p className={this.props.classSubtitle}>{this.props.subtitle} <strong className={this.props.classSubtitle}>{this.props.subtitleStrong}</strong>
						</p>
					</div>

					<style jsx>{`
						.title-container {
							font-family: Viga;
							color: black;
						}

						.title h3 {
							font-size: 22px;
						}

						.title p {
							color: gray;
							font-size: 17px;
							margin-bottom: 50px;
							margin-top: 5px;
							font-family: Poppins;
							letter-spacing: -0.3px;
						}

						.title .white {
							color: white;
						}

						.title strong {
							color: black;
							font-weight: bold;
						}

						.mb20 {
							margin: 40px 0 20px 0 !important
						}
					`}</style>
				</div>
	}
}

export default TitleBlack;