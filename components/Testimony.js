import Slider from "react-slick";

class Testimony extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
		};
	}

	componentDidMount() {
	} 

	render () {
		var settings = {
			arrow: true,
			infinite: true,
			speed: 500,
			centerPadding: '40px',
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		};
		return 	(
				<div className="Testimony">
					<div className="container">
						<div className="Testimony-title">
							<h2>Opiniones</h2>
							<img src="/static/img/Fb-rates.png" alt=""/>
							<p>Clientes satisfechos</p>
						</div>

						<div className="Testimony-slider">
							<Slider {...settings}>
								<figure className="Testimony-item">
									<figcaption>
										<div className="Testimony-image">
											<img src="/static/img/daniloviacava.JPG" alt=""/>
											<strong>Sergio Gabaldoni</strong>
										</div>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi itaque maxime reprehenderit blanditiis tempora, dolorum distinctio debitis, iusto quos, quia eos repellat corrupti dolorem explicabo placeat nesciunt labore dolores.
										</p>
									</figcaption>
								</figure>
								<figure className="Testimony-item">
									<figcaption>
										<div className="Testimony-image">
											<img src="/static/img/daniloviacava.JPG" alt=""/>
											<strong>Pablo Paredes</strong>
										</div>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, aperiam corporis. Quidem maxime laudantium accusantium labore, placeat est cumque harum quas officia repellendus, consequuntur libero. Velit ratione tenetur magni, ad!
										</p>
									</figcaption>
								</figure>
								<figure className="Testimony-item">
									<figcaption>
										<div className="Testimony-image">
											<img src="/static/img/daniloviacava.JPG" alt=""/>
											<strong>Cristina Rubio</strong>
										</div>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, aperiam corporis. Quidem maxime laudantium accusantium labore, placeat est cumque harum quas officia repellendus, consequuntur libero. Velit ratione tenetur magni, ad!
										</p>
									</figcaption>
								</figure>
								<figure className="Testimony-item">
									<figcaption>
										<div className="Testimony-image">
											<img src="/static/img/daniloviacava.JPG" alt=""/>
											<strong>Juan Perez</strong>
										</div>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, aperiam corporis. Quidem maxime laudantium accusantium labore, placeat est cumque harum quas officia repellendus, consequuntur libero. Velit ratione tenetur magni, ad!
										</p>
									</figcaption>
								</figure>
							</Slider>
						</div>
						
					</div>

					<style jsx global>{`
						.Testimony {
							margin-top: 60px;
							margin-bottom: 20px;
						}
						.Testimony .container {
							display: flex;
							justity-content: center;
							align-items: flex-start;
						}
						.Testimony-title {
							margin-right: 30px;
							width: 20%;
						}
						.Testimony-title h2 {
							font-size: 22px;
							font-family: Viga;
							margin-bottom: 15px;
						}
						.Testimony-title img {
							margin-bottom: 10px;
						}

						.Testimony-slider {
							width: 80%;
							text-align: left;
						}
						.Testimony-item {
							align-items: center;
							padding: 0 20px;
							box-sizing: border-box;
						}
						.Testimony-image {
							display: flex;
							align-items: center;
							margin-bottom: 10px;
						}
						.Testimony-item img {
							margin-right: 15px;
							margin-left: 0;
							width: 50px;
							height: 50px;
							border-radius: 50%;
							overflow: hidden;
						}
						.Testimony-item figcaption {
						}
						.Testimony-item strong {
							font-size: 16px;
							margin-bottom: 10px;
							display: block;
							font-family: Viga;
						}
						.Testimony-item p {
							font-size: 13px;
						}
 
						.Testimony-slider .slick-prev,
						.Testimony-slider .slick-next {
							line-height: 51px;
							border-radius: 50%;
							top: 0;
							width: 30px;
							height: 30px;
							z-index: 9;
							background: #00BCD4;
						}
 
						.Testimony-slider .slick-prev {
							left: inherit;
							right: 35px;
						}
						.Testimony-slider .slick-next {
							right: 0;
						}

						@media screen and (max-width: 767px) {
							.Testimony .container {
								flex-direction: column;
								text-align: center;
							}
							.Testimony-title {
								width: 100%;
								margin: auto;
								margin-bottom: 30px;
							}
							.Testimony-title img {
								margin: 10px auto;
							}
							.Testimony-slider {
								width: 100%;
							}
							.Testimony-slider .slick-prev, 
							.Testimony-slider .slick-next {
								top: 0px;
							}
						}
						

					`}</style>
				</div>
		);
	}
}

export default Testimony;