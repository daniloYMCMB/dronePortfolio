import Link from 'next/link'

class Header extends React.Component {

	
	componentDidMount() {

		setTimeout(function(){ 
			var header = document.querySelector(".header-logo")
			header.classList.add('active')

			var socials = document.querySelector(".header-menu")
			socials.classList.add('active')
		}, 500);

		const widthScreen = window.innerWidth
		if(widthScreen < 767) {
			setTimeout(function(){ 
				var socials = document.querySelector(".header-menu")
				socials.classList.remove('active')
			}, 501);
		}

	}

	menuMobile(e) {
		const menu_mobile = document.getElementById("header_menu");
		menu_mobile.classList.toggle('active');
		const menu_mobile_btn = document.getElementById("menu-mobile-btn");
		menu_mobile_btn.classList.toggle('active');
		const cortina = document.getElementById("cortina");
		cortina.classList.toggle('active');
	}

	cortina() {
		const menu_mobile = document.getElementById("header_menu");
		menu_mobile.classList.remove('active');
		const menu_mobile_btn = document.getElementById("menu-mobile-btn");
		menu_mobile_btn.classList.remove('active');
		const cortina = document.getElementById("cortina");
		cortina.classList.remove('active');
	}

	render () {
		return 	<div className="">
					<header className="header">
						<nav className="df container">

							<Link href="/">
								<a className="header-logo">
									TECNOVA.IO
								</a>
							</Link>

							<div className="menu-mobile-btn" onClick={this.menuMobile} id="menu-mobile-btn" ></div>

							<ul id="header_menu" className="header-menu">
								<li>
									<Link href="/diseno-web">
										<a >
											<p>Diseño web</p>
										</a>
									</Link>
								</li>
								<li>
									<Link href="/imagenes-de-drones">
										<a >
											<p>Imágenes de drones</p>
										</a>
									</Link>
								</li>
								<li>
									<a href="/portafolio">
										<p>Portafolio</p>
									</a>
								</li>
								<li>
									<Link href="/conocenos">
										<a >
											<p>Conócenos</p>
										</a>
									</Link>
								</li>
								<li className="sub-menu-btn">
									<a >
										<p>#TECNOVA.IO</p>
									</a>
									<div className="sub-menu">
										<div>
											<Link href="/viaje-de-trabajo">
												<a >
													<p>Viaje de trabajo</p>
												</a>
											</Link>
										</div>
										<div>
											<Link href="/viajes">
												<a >
													<p>Viajes</p>
												</a>
											</Link>
										</div>
									</div>
								</li>
								<li>
									<Link href="/contacto">
										<a >
											<p>Contacto</p>
										</a>
									</Link>
								</li>
							</ul>
						</nav>

						<div className="header-socialNetwork">
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
						</div>
					</header>
					<div onClick={this.cortina} id="cortina" className="cortina"></div>

					<style jsx>{`
						.cortina {
							background: black;
							opacity: .7;
							position: fixed;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							display: none;
							z-index: 991;
						}
						.cortina.active {
							display: block;
						}

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
						.header:before {
							content: "";
							background: linear-gradient(180deg,#9292926b 0,#ffffff00);
							position: absolute;
							top: -10px;
							left: 0;
							width: 100%;
							height: 200%;
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
							font-size: 20px;
						}
						.header-logo.active {
							opacity: 1;
							transform: translateY(0);
						}
						.header-menu {
							display: flex;
							opacity: 0;
							transform: translateY(20px);
							transition: .5s;
							transition-delay: 1.5s;
						}
						.header-menu.active {
							opacity: 1;
							transform: translateY(0);
						}
						.header-menu a,
						.header-socialNetwork a {
							margin: 5px;
							padding: 5px;
							transition: .25s linear;
							position: relative;
						}
						.header-menu a:before,
						.header-socialNetwork a:before {
							content: "";
							position: absolute;
							background: white;
							bottom: 0px;
							width: 0%;
							height: 2px;
							transition: .25s ease;
							right: 0;
							left: 0;
							margin: auto;
						}
						.header-menu a:hover :before,
						.header-socialNetwork a:hover :before {
							width: 100%;
						}
						.sub-menu {
							position: absolute;
							font-size: 10px;
							opacity: 0;
							visibility: hidden;
							transition: .25s linear;
						}
						.sub-menu-btn {
							cursor: pointer;
						}
						.sub-menu-btn:hover .sub-menu {
							opacity: 1;
							visibility: visible;
						}
						.header-socialNetwork {
							display: flex;
							align-items: center;
							justify-content: center;
							display: none;
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

						.menu-mobile-btn {
							display: none;
							cursor: pointer;
						}

						@media screen and (max-width: 900px) {
							.header-menu a {
								font-size: 12px;
								margin: 2px;
								padding: 5px;
							}
						}

						@media screen and (max-width: 767px) {
							.header-menu {
								position: absolute;
								flex-direction: column;
								right: -185px;
								top: 10px;
								background: #00bcd4;
								padding: 20px;
								transition-delay: inherit;
								border-radius: 4px;
								transition: .25s ease;
								transform: inherit;
							}
							.header-menu.active {
								right: 20px;
							}

							.menu-mobile-btn {
								display: block;
								position: absolute;
								top: 10px;
								right: 20px;
								width: 30px;
								height: 30px;
								border-radius: 4px;
								transition: .25s ease;
								background: white;
							}
							.menu-mobile-btn:before {
								content: "";
								position: absolute;
								top: 10px;
								left: 0;
								right: 0;
								margin: auto;
								background: #bababa;
								width: 18px;
								height: 2px;
								border-radius: 4px;
								transition: .25s ease;
							}
							.menu-mobile-btn:after {
								content: "";
								position: absolute;
								top: 18px;
								left: 0;
								right: 0;
								margin: auto;
								background: #bababa;
								width: 18px;
								height: 2px;
								border-radius: 4px;
								transition: .25s ease;
							}
							.menu-mobile-btn.active:before {
								transform: rotate(45deg);
								top: 14px;
							}
							.menu-mobile-btn.active:after {
								transform: rotate(-45deg);
								top: 14px;
							}
							.menu-mobile-btn.active {
								right: 210px;
							}

							.sub-menu {
								position: relative;
								opacity: 1;
								visibility: visible;
							}
						}

						@media screen and (max-width: 650px) {
							.header-socialNetwork a {
								margin: 0;
							}
						}

			            @media screen and (max-width: 400px){
			                .header {
			                    font-size: 12px;
			                    padding-top: 18px;
			                }
			                .header a {
			                	margin: 0;
			                }
			            }
					`}</style>
				</div>
	}
}

export default Header;