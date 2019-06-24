import Slider from "react-slick"
import Title from './TitleBlack'
// import Instafeed from 'instafeed.js'

class Portafolio extends React.Component {

	componentDidMount() {
		// var feed = new Instafeed({
		// 	get: 'user',
		// 	userId: '2082061113',
		// 	accessToken: '2082061113.1677ed0.1fc0b170d58e49e389ad4a27a6064fbc',
		// 	target: 'instafeed',
		// 	sortBy: 'most-liked',
		// 	resolution: 'low_resolution',
		// 	template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>'
		// });
		// feed.run();
	}

	render() {
		var settings = {
			dots: false,
			infinite: true,
			arrows: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 2,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
		    {
		      breakpoint: 1060,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 640,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	    };
    return (
   		<div className="portafolio">

			<div className="container web">
				<Title title="Nuestro trabajo, es nuestra pasión." subtitle="Proyectos Web" classSubtitle="white" subtitleStrong="recientes"></Title>
				<Slider {...settings} className="">
					<a href="https://www.profealtoque.com.pe/" target="_blank">
						<figure className="portafolio-item">
							<div className="portafolio-item-mascara">
								<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/profe.jpg) center center no-repeat", backgroundSize: 'cover'}}></div>
							</div>
						</figure>
					</a>
					<a href="http://www.sanpiox.edu.pe/" target="_blank">
						<figure className="portafolio-item">
							<div className="portafolio-item-mascara">
								<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/sanpiox.jpg) center center no-repeat", backgroundSize: 'cover'}}></div>
							</div>
						</figure>
					</a> 

					<a href="http://www.deliperuano.com/" target="_blank">
						<figure className="portafolio-item">
							<div className="portafolio-item-mascara">
								<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/deliperuano.png) center center no-repeat", backgroundSize: 'cover'}}></div>
							</div>
						</figure>
					</a>
					<a href="https://www.pagadespues.pe" target="_blank">
						<figure className="portafolio-item">
							<div className="portafolio-item-mascara">
								<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/pagadespues.jpg) center center no-repeat", backgroundSize: 'cover'}}></div>
							</div>
						</figure>
					</a>  
					<a href="https://www.acuantoestaeldolar.com/" target="_blank">
						<figure className="portafolio-item">
							<div className="portafolio-item-mascara">
								<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/cambiodolar.png) center center no-repeat", backgroundSize: 'cover'}}></div>
							</div>
						</figure>
					</a>
					<a href="https://www.clinicainternacional.com.pe/" target="_blank">
						<figure className="portafolio-item" >
							<div className="portafolio-item-mascara">
								<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/clinicaInternacional.jpg) center center no-repeat", backgroundSize: 'cover'}}></div>
							</div>
						</figure>
					</a>
					<a href="https://www.canalipe.tv/" target="_blank">
						<figure className="portafolio-item">
							<div className="portafolio-item-mascara">
								<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/canalipe.jpg) center center no-repeat", backgroundSize: 'cover'}}></div>
							</div>
						</figure>
					</a>
					<a href="https://www.mifuturogr.com" target="_blank">
						<figure className="portafolio-item" >
							<div className="portafolio-item-mascara">
								<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/mifuturo.jpg) center center no-repeat", backgroundSize: 'cover'}}></div>
							</div>
						</figure>
					</a>
					<a href="https://www.marina.mil.pe" target="_blank">
						<figure className="portafolio-item">
							<div className="portafolio-item-mascara">
								<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/marina.jpg) center center no-repeat", backgroundSize: 'cover'}}></div>
							</div>
						</figure>
					</a>
					<a href="http://www.clubterrazas.com.pe/" target="_blank">
						<figure className="portafolio-item" >
							<div className="portafolio-item-mascara">
								<div className="portafolio-item-img" style={{background: "url(static/img/portafolio/terrazas.jpg) center center no-repeat", backgroundSize: 'cover'}}></div>
							</div>
						</figure>
					</a>
				</Slider>
			</div>

			<div className="container instagramWidget">
				<div class="elfsight-app-8a863662-90b2-482c-a0ee-88aa2c740771"></div>
			</div>

			<style jsx global="true">{`
				.portafolio {
					text-align: center;
					margin: 60px 0 0 0;
					background: #00BCD4;
					padding: 60px 0 0px 0;
					box-sizing: border-box;
				}
				.portafolio .web {
					overflow: hidden;
				}
				.portafolio .slick-next:before,
				.portafolio .slick-prev:before {
					font-size: 30px;
				}
				.portafolio .slick-next {
					right: 10px;
				} 
				.portafolio .slick-prev {
					left: 0px;
				}
				.portafolio-item {
					margin: 10px auto;
					height: 180px;
					width: 300px;
					background: url(/static/img/Macbook.svg) center center no-repeat;
					background-size: cover;
				}

				.portafolio-item-mascara {
					height: 158px;
					overflow: hidden;
					position: relative;
				}

				.portafolio-item-img {
					max-width: 100%;
					width: 76%;
					height: auto;
					display: block;
					position: absolute;
					top: 12px;
					right: 0;
					left: 0;
					margin: auto;
					border-radius: 2px;
					height: 143px;
					background-size: cover;
				}

				.portafolio .slick-dots li button:before {
					background: green;
				}

				.slick-dots li button:before {
					background; red;
				}

				.instagramWidget {
					position: relative;
					margin-top: 40px !important;
				} 
				.instagramWidget:before {
					content: "";
					position: absolute;
					bottom: 0px;
					right: 0;
					width: 100%;
					height: 44px;
					background: #00BCD4;
					z-index: 999999;
				}
				.instagramWidget:after {
					content: "";
					position: absolute;
					top: 10px;
					right: 0;
					left: 0;
					width: 250px;
					height: 60px;
					background: #00bcd4;
					z-index: 999999;
					margin: auto;
					display: none;
				} 

				.eapps-instagram-feed-title {
					font-size: 17px !important;
					font-family: Montserrat;
					color: white;
				}
				.eapps-instagram-feed-container {
					position: relative;
					z-index: 999999;
				}
			`}</style>

   		</div>
    );
  }
}

export default Portafolio;

























