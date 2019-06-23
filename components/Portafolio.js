import Slider from "react-slick"
import Title from './TitleBlack'


class Portafolio extends React.Component {
render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
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

			<Title title="Nuestro trabajo, es nuestra pasión." subtitle="Ver proyectos" classSubtitle="white" subtitleStrong="recientes"></Title>

			<Slider {...settings} className="container">
				<a href="https://www.profealtoque.com.pe/" target="_blank">
					<figure className="portafolio-item">
						<div className="portafolio-item-mascara">
							<div className="portafolio-item-img" style={{background: "url(static/img/profe.png) center center no-repeat", backgroundSize: 'cover'}}></div>
						</div>
					</figure>
				</a>
				<a href="http://www.sanpiox.edu.pe/" target="_blank">
					<figure className="portafolio-item">
						<div className="portafolio-item-mascara">
							<div className="portafolio-item-img" style={{background: "url(static/img/sanpiox.png) center center no-repeat", backgroundSize: 'cover'}}></div>
						</div>
					</figure>
				</a> 

				<a href="http://www.deliperuano.com/" target="_blank">
					<figure className="portafolio-item">
						<div className="portafolio-item-mascara">
							<div className="portafolio-item-img" style={{background: "url(static/img/deliperuano.png) center center no-repeat", backgroundSize: 'cover'}}></div>
						</div>
					</figure>
				</a>
				<a href="https://www.pagadespues.pe" target="_blank">
					<figure className="portafolio-item">
						<div className="portafolio-item-mascara">
							<div className="portafolio-item-img" style={{background: "url(static/img/pagadespues.png) center center no-repeat", backgroundSize: 'cover'}}></div>
						</div>
					</figure>
				</a>  
				<a href="https://www.acuantoestaeldolar.com/" target="_blank">
					<figure className="portafolio-item">
						<div className="portafolio-item-mascara">
							<div className="portafolio-item-img" style={{background: "url(static/img/cambiodolar.png) center center no-repeat", backgroundSize: 'cover'}}></div>
						</div>
					</figure>
				</a>
				<a href="https://www.clinicainternacional.com.pe/" target="_blank">
					<figure className="portafolio-item" >
						<div className="portafolio-item-mascara">
							<div className="portafolio-item-img" style={{background: "url(static/img/clinicaInternacional.png) center center no-repeat", backgroundSize: 'cover'}}></div>
						</div>
					</figure>
				</a>
				<a href="https://www.canalipe.tv/" target="_blank">
					<figure className="portafolio-item">
						<div className="portafolio-item-mascara">
							<div className="portafolio-item-img" style={{background: "url(static/img/canalipe.png) center center no-repeat", backgroundSize: 'cover'}}></div>
						</div>
					</figure>
				</a>
				<a href="https://www.mifuturogr.com" target="_blank">
					<figure className="portafolio-item" >
						<div className="portafolio-item-mascara">
							<div className="portafolio-item-img" style={{background: "url(static/img/mifuturo.png) center center no-repeat", backgroundSize: 'cover'}}></div>
						</div>
					</figure>
				</a>
				<a href="https://www.marina.mil.pe" target="_blank">
					<figure className="portafolio-item">
						<div className="portafolio-item-mascara">
							<div className="portafolio-item-img" style={{background: "url(static/img/marina.png) center center no-repeat", backgroundSize: 'cover'}}></div>
						</div>
					</figure>
				</a>
				<a href="http://www.clubterrazas.com.pe/" target="_blank">
					<figure className="portafolio-item" >
						<div className="portafolio-item-mascara">
							<div className="portafolio-item-img" style={{background: "url(static/img/terrazas.png) center center no-repeat", backgroundSize: 'cover'}}></div>
						</div>
					</figure>
				</a>
			</Slider>

			<style jsx>{`
				.portafolio {
					text-align: center;
					margin: 60px 0 0 0;
					background: #00BCD4;
					padding: 70px 0;
					box-sizing: border-box;
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
			`}</style>

   		</div>
    );
  }
}

export default Portafolio;

























