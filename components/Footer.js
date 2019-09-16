import Link from 'next/link'

class Footer extends React.Component {

	render () {
		return 	<footer className="footer header">
					<div className="container">
						<div className="footer-left">
							<div className="header-socialNetwork">
								<a target="_blank" href="https://www.facebook.com/1793-FilmMaker-762119844128165" >
									<img src="/static/img/facebookIcon.svg" alt=""/>
								</a>
								<a target="_blank" href="https://www.instagram.com/1793filmmakerr/" >
									<img src="/static/img/instagramIcon.svg" alt=""/>
								</a>
								<a target="_blank" href="https://api.whatsapp.com/send?phone=51931447041&text=Hola,%20quiero%20realizar%20mi%20proyecto" >
									<img src="/static/img/whatsapp.png" alt=""/>
								</a>
							</div>
						</div>
						<div className="footer-right">
							<p>Privacy Policy | © TECNOVA.IO 2019</p>
						</div>
					</div>

					<style jsx>{`
						.footer {
							background: #00bcd4;
						}
						.footer .container {
							display: flex;
							justify-content: space-between;
							align-items: center;
							padding: 10px 0;
						}
						.footer-left {
							flex: 1
							text-align: left;
						}
						.footer-right {
							flex: 1
							text-align: right;
							color: white;
							font-size: 14px;
						}
						.header-socialNetwork {
							display: flex;
							align-items: center;
							justify-content: center;
							// display: none;
						}
						.header-socialNetwork a:hover img {
							box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.85);
						}
						.header-socialNetwork figure {
							display: flex;
							align-items: center;
						}
						.header-socialNetwork figcaption {
							margin: 10px;
							color: white;
						}
						.header-socialNetwork img {
							border-radius: 6px;
							box-shadow: none;
							transition: .3s;
							box-sizing: border-box;
							width: 18px;
							height: 18px;
						}
						.header-socialNetwork a {
							margin: 0 15px;
						}
					`}</style>
				</footer>
	}
}

export default Footer;