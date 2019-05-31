import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
		};

		// document.querySelector('#moveSectionDown').addEventListener('click', function(e){
		// 	e.preventDefault();
		// 	fullpage_api.moveSectionDown();
		// });
	}

	handleAddSection() {
		this.setState(state => {
		  const { fullpages } = state;
		  const { length } = fullpages;
		  fullpages.push({
		    text: `section ${length + 1}`,
		    id: Math.random(),
		  });

		  return {
		    fullpages: [...fullpages],
		  };
		});
	}

	handleRemoveSection() {
		this.setState(state => {
		  const { fullpages } = state;
		  const newPages = [...fullpages];
		  newPages.pop();

		  return { fullpages: newPages };
		});
	}


	render () {

		// var x = "hola"
		// console.log(x)

		return 	<header className="header">
					<nav className="container">

						<div className="header-logos">
							<a target="_blank" href="https://kambista.com/" className="header-logo">
								<figure className="header-logo-kambista">
									<img src="./static/img/kambista-logo.svg" alt=""/>
								</figure>
							</a>
							<a target="_blank" href="https://www.latam.com/es_pe/?gclid=CjwKCAiAv9riBRANEiwA9Dqv1QYQ40vM47knl33LWk2E7aCk-fShIGvWL14Np6tG7GsO1WbT7x-vLBoCAvwQAvD_BwE&gclsrc=aw.ds" className="header-logo">
								<figure className="header-logo-latam">
									<img src="./static/img/latam-logo.svg" alt=""/>
								</figure>
							</a>
						</div>

						<ul className="header-socialNetwork">
							<li>
								<a target="_blank" href="https://kambista.com/" >
									<figure>
										<figcaption>
											Volver a <strong>Kambista</strong>
										</figcaption>
										<img src="./static/img/house.svg" alt=""/>
									</figure>
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
							z-index: 9;
						}
						.header .container {
							display: flex;
							justify-content: space-between;
							align-items: center;
							max-width: 1200px;
							width: 96%;
							margin: auto;
						}
						.header-logos {
							display: flex;
						}
						.header-logo {
							display: inline-block;
							margin: 10px;
						}
						.header-logo-kambista {
							position: relative;
							padding-right: 15px;
						}
						.header-logo-kambista:before {
							content: "";
							position: absolute;
							top: 0;
							right: 0;
							bottom: 0;
							margin: auto;
							background: white;
							opacity: .5;
							width: 1px;
							height: 60%;
						}
						.header-socialNetwork {
							display: flex;
							color: white;
						}
						.header-socialNetwork a:hover img {
							background: #051392;
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
							padding: 10px;
							border-radius: 6px;
							box-shadow: none;
							transition: .3s;
							width: 35px;
							height: 35px;
							box-sizing: border-box;
							margin: 0 2px;
						}

						@media (max-width: 650px) {
							.header .container {
								justify-content: center;
							}
							.header-socialNetwork {
								display: none;
							}
						}
					`}</style>
				</header>
	}
}

export default Header;