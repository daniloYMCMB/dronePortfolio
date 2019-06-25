import Link from 'next/link'

class Header extends React.Component {

	
	componentDidMount() {
		setTimeout(function(){ 
			var header = document.querySelector(".header-logo")
			header.classList.add('active')

			var socials = document.querySelector(".header-socialNetwork li")
			socials.classList.add('active')
		}, 500);

	}

	down (e) {
		e.preventDefault()
		// fullpage_api.moveSectionDown();
	}

	render () {
		return 	<header className="header">
					<nav className="df container">

						<Link href="/">
							<a className="header-logo">
								Danilo Viacava
							</a>
						</Link>

						<ul className="header-socialNetwork">
							<li>
								<Link href="/diseno-web">
									<a >
										<p>Diseño web</p>
									</a>
								</Link>
								<Link href="/imagenes-de-drone">
									<a >
										<p>Imágenes de drones</p>
									</a>
								</Link>
								<a target="_blank" href="https://www.facebook.com/profile.php?id=100009455848617" >
									<img src="/static/img/facebookIcon.svg" alt=""/>
								</a>
								<a target="_blank" href="https://www.instagram.com/danilojesusv/" >
									<img src="/static/img/instagramIcon.svg" alt=""/>
								</a>
								<a target="_blank" href="https://api.whatsapp.com/send?phone=51931447041&text=Hola,%20quiero%20realizar%20mi%20proyecto" >
									<img src="/static/img/whatsapp.png" alt=""/>
								</a>
								<a onClick={this.down} href="">
									Cotización Gratis
								</a>
							</li>
						</ul>
					</nav>

					<style jsx>{`
						.header {
							background: transparent;
							margin-top: 10px;
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							z-index: 999;
							letter-spacing: 1px;
							font-size: 13px;
							font-weight: bold;
						}
						.header a {
							color: white;
						}
						.header .container {
							justify-content: space-between;
						}
						.header-logo {
							display: inline-block;
							margin: 10px;
							opacity: 0;
							transform: translateY(20px);
							transition: .5s;
							transition-delay: 1s;
							font-family: Viga;
							font-size: 16px;
						}
						.header-logo.active {
							opacity: 1;
							transform: translateY(0);
						}
						.header-socialNetwork li {
							display: flex;
							opacity: 0;
							transform: translateY(20px);
							transition: .5s;
							transition-delay: 1.5s;
						}
						.header-socialNetwork li.active {
							opacity: 1;
							transform: translateY(0);
						}
						.header-socialNetwork a {
							margin: 5px;
							padding: 5px;
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
							width: 15px;
							height: 15px;
						}

						@media screen and (max-width: 650px) {
							.header-socialNetwork a {
								margin: 0;
							}
						}

			            @media screen and (max-width: 400px){
			                .header {
			                    font-size: 12px;
			                }
			                .header a {
			                	margin: 0;
			                }
			            }
					`}</style>
				</header>
	}
}

export default Header;