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
											<img src="https://www.observatoriorh.com/wp-content/uploads/2018/09/Daniel-Ruiz-BQ2.png" alt=""/>
											<strong>Ubaldo Moreno</strong>
										</div>
										<p>
											Es intuitivo y está lleno de facilidades, de todos los servicios que he probado. Tecnova es el mejor con diferencia.
										</p>
									</figcaption>
								</figure>
								<figure className="Testimony-item">
									<figcaption>
										<div className="Testimony-image">
											<img src="https://cnnespanol2.files.wordpress.com/2019/08/cnn-hecc81roes-2.jpeg?quality=100&strip=info&strip=info" alt=""/>
											<strong>Angelo Montalvo</strong>
										</div>
										<p>
											Yo no puedo más que recomendar los servicios de Tecnova. Lo mejor es la rapidéz y amable gestión del soporte. 100% efectivo y profesional.
										</p>
									</figcaption>
								</figure>
								<figure className="Testimony-item">
									<figcaption>
										<div className="Testimony-image">
											<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDx-lW7jFxxuyqSBYZ8SOHPowYKw32W-I15m07B50_yjjqURYIJA" alt=""/>
											<strong>Cristina Aparicio</strong>
										</div>
										<p>
											Estoy muy contenta con la web: se ven bien las fotos, es rápida y dinámica. Me ha sorprendido gratamente las opciones del sistema. 
										</p>
									</figcaption>
								</figure>
								<figure className="Testimony-item">
									<figcaption>
										<div className="Testimony-image">
											<img src="https://cdn.sindyk.com/?src=https://www.lanacion.com.co/wp-content/uploads/2019/09/0V9A1711-696x507.jpg&w=640&q=80" alt=""/>
											<strong>Antonio Pascual</strong>
										</div>
										<p>
											La confianza que nos inspiran es absoluta y se basa en los extraordinarios resultados que bridan.
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