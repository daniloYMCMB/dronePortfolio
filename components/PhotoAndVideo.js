import Link from 'next/link'

class PhotoAndVideo extends React.Component {

	render () {
		return 	<div className={`PhotoAndVideo ${this.props.classPhotoAndVideo}`} style={this.props.stylePhotoAndVideo}>

					<div className="df">
						<div className={`PhotoAndVideo-web ${this.props.classForWhomWeb}`} style={this.props.styleWeb}>
						</div>

						<div className="PhotoAndVideo-free-bg">
							<div className={`PhotoAndVideo-free ${this.props.classForWhomFree}`} style={this.props.styleFree}>
								<h2>{this.props.title}</h2>
								<p>
									{this.props.description}
								</p>
								<Link href="/portafolio">
									<a className="btn-action" style={this.props.btnSky}>
										PROYECTOS RECIENTES
									</a>	
								</Link>
							</div>
						</div>
					</div>

					<style jsx>{`
						.PhotoAndVideo {
							margin-top: -30px;
							margin-bottom: 100px;
							color: white;
						}

						.PhotoAndVideo-web {
							background: url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/viena.jpg?alt=media&token=2e560d83-91ca-457f-b532-cd726213558a) center center no-repeat;
							background-size: cover;
							box-sizing: border-box;
							text-align: left;
							color: white;
							box-shadow: 0 40px 120px -20px rgba(0,0,0,0.6);
							width: 40%;
							height: 600px;
							margin-left: -30px;
						}

						.PhotoAndVideo-free-bg {
							width: 40%;
							position: relative;
						}				

						.PhotoAndVideo-free {
							background: linear-gradient(to right,rgba(0,165,194,1) 0%,rgba(0,196,214,1) 100%);
							position: relative;
							box-shadow: 0 40px 120px -20px rgba(0,0,0,0.6);
							padding: 120px 150px;
							text-align: left;
							position: absolute;
							left: -70px;
							box-sizing: border-box;
							top: -230px;
						}

						.PhotoAndVideo-free h2{
							font-size: 22px;
							margin-bottom: 10px;
							position: relative;
							z-index: 1;
							font-family: Viga;
						}

						.PhotoAndVideo-free p {
							margin-bottom: 10px;
							position: relative;
							line-height: 1.2;
							z-index: 1;
						}

						.PhotoAndVideo-free a {
							margin: auto;
							display: inline-block;
							padding: 13px 15px;
							background: white;
							color: #00BCD4;
							box-sizing: border-box;
							margin-top: 10px;
							font-size: 16px;
							border-radius: 4px;
							font-family: Viga;
						}

						@media screen and (max-width: 1310px) {
							.forWhom-Free {
								padding-bottom: 110px !important;
							}
						}

						@media screen and (max-width: 1180px) {
							.PhotoAndVideo-web {
								margin-left: 10px;
								width: 50%;

							}
							.PhotoAndVideo-web h2,
							.PhotoAndVideo-web p,
							.PhotoAndVideo-web a {
								margin-left: 50px;
							}
							.PhotoAndVideo-free-bg {
								width: 45%;
							}
							.PhotoAndVideo-free {
								top: -180px;
								padding 70px 40px 70px 80px;
								left: -60px;
								margin-right: 30px;
							}

							.forWhom {
								margin-top: -10px !important;
							}
							.forWhom-Web {
								width: 50% !important;
								margin-left: 3% !important;
							}
							.forWhom-Free {
								top: -250px !important;
								padding-left: 130px !important;
								padding-bottom: 200px !important;
							}
						}

						@media screen and (max-width: 1000px) {
							.PhotoAndVideo-free-bg {
								width: 50%;
							}
							.PhotoAndVideo-free {
								top: -200px;
							}
							.PhotoAndVideo-web {
								width: 55%;
								margin-left: 3%;
								background-position: -40px 0px;
							}
							
							.forWhom {
								margin-top: 10px !important;
							}
							.forWhom-Web {
								margin-left: 3% !important;
							}
							.forWhom-Free {
								padding: 100px 60px 100px 130px!important;
							}
						}

						@media screen and (max-width: 767px) {
							.PhotoAndVideo {
								margin: 20px auto 0 auto;
							}
							.PhotoAndVideo .df {
								flex-direction: column;
							}

							.PhotoAndVideo-web {
								margin: 0;
								width: 80%;
								background-position: top center ;
							}
							.PhotoAndVideo-web h2,
							.PhotoAndVideo-web p,
							.PhotoAndVideo-web a {
								margin-left: 0px;
								max-width: 100%;
							}

							.PhotoAndVideo-free-bg {
								width: 65%;
							}
							.PhotoAndVideo-free {
								position: relative;
								top: -30px;
								width: 100%;
								left: 0;
								right: 0;
								margin: auto;
								padding: 70px 50px;
							}

							.forWhom {
								margin-top: 50px !important;
							}

							.forWhom .df {
								flex-direction: column-reverse;
							}
							.forWhom-Web {
								width: 70% !important;
								margin-left: 0 !important; 
								margin-top: -30px;
								margin-bottom: 60px;
							}
							.forWhom .PhotoAndVideo-free-bg {
								width: 90%;
							}
							.forWhom-Free {
								width: 100%;
								top: 0 !important;
								left: 0 !important;
								right: 0;
								margin: auto;
								padding: 50px 50px 70px 50px!important;
							}
						}

						@media screen and (max-width: 530px) {
							.PhotoAndVideo {
								margin: 0;
							}
							.PhotoAndVideo .df {
								flex-direction: column;
							}

							.PhotoAndVideo-web {
								padding: 50px 30px;
								width: 90%;
								height: 350px;
							}
							.PhotoAndVideo-web a {
								font-size: 14px;
							}
							.PhotoAndVideo-free-bg {
								width: 80%;
							}
							.PhotoAndVideo-free {
								padding: 40px 20px;
							}
							.PhotoAndVideo-free a {
								font-size: 13px;
							}

							.forWhom {
								margin-top: 40px !important;
							}
							.forWhom .df {
								flex-direction: column-reverse;
							}
							.forWhom-Free {
								padding: 40px 20px 60px 20px!important;
							}
							.forWhom-Web {
								width: 80% !important;
							}
						}
					`}</style>
				</div>
	}
}

export default PhotoAndVideo