import Slider from "react-slick"
import Title from './TitleBlack'
// import Instafeed from 'instafeed.js'

class Portafolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true
		}
		// this.fetchInstagrama()
	}

	async componentDidMount () {
		// await this.fetchInstagrama()

		// setTimeout(function(){ 
		// 	var myElement = `<div class="elfsight-app-8a863662-90b2-482c-a0ee-88aa2c740771"></div>`
		// 	var insta = document.getElementById("#insta")
		// 	insta.appendChild(myElement)
		// 	console.log(insta)
		// }, 500);
		
	}

	async componentWillUnmount () {
		// await this.fetchInstagrama()
	}
	// async fetchInstagrama () {
	// 	const { data } = await axios.get("https://apps.elfsight.com/p/platform.js")
	// }

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
	   		<div className="portafolio" id="portafolio">

				<div className="container web">
					<Title title="Nuestro trabajo, es nuestra pasión." classTitle="white" subtitle="Proyectos Web" classSubtitle="white mb20" subtitleStrong=""></Title>
					<Slider {...settings} className="">
						<a href="https://millas-latam.web.app/" target="_blank">
							<figure className="portafolio-item" >
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/millas-latam.png?alt=media&token=f0c7f428-7bf4-4d49-99fe-cf4ac7893897) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
						<a href="http://superbidperu.com" target="_blank">
							<figure className="portafolio-item" >
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/superbid.png?alt=media&token=39c3874c-1ac2-4474-a41b-78cd967cd332) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
						<a href="https://viva-air-a056f.web.app/" target="_blank">
							<figure className="portafolio-item" >
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/viva-air.png?alt=media&token=69a6c905-0731-426e-bb3a-6a30f57f8d3b) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
						<a href="https://www.clinicainternacional.com.pe/" target="_blank">
							<figure className="portafolio-item" >
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/clinicaInternacional.jpg?alt=media&token=c367036f-5b56-43b9-bf3c-aaf74ad08b95) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
						<a href="https://www.canalipe.tv/" target="_blank">
							<figure className="portafolio-item">
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/canalipe.jpg?alt=media&token=a6774d89-f051-4614-bf8c-ad43b0c2d536) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
						<a href="https://www.mifuturogr.com" target="_blank">
							<figure className="portafolio-item" >
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/mifuturo.jpg?alt=media&token=b6a77482-bbce-47cb-bf34-307c7f156d64) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
						<a href="https://www.marina.mil.pe" target="_blank">
							<figure className="portafolio-item">
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/marina.jpg?alt=media&token=9f68e122-ad8c-4275-8986-88d75c0a05b4) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
						<a href="https://www.profealtoque.com.pe/" target="_blank">
							<figure className="portafolio-item">
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/profe.jpg?alt=media&token=e02ac6a9-5665-4e85-98ce-c272b0de9693) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
						<a href="http://www.sanpiox.edu.pe/" target="_blank">
							<figure className="portafolio-item">
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/sanpiox.jpg?alt=media&token=55944382-8c24-49bb-b7e3-2d1384fb72d3) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a> 

						<a href="http://www.deliperuano.com/" target="_blank">
							<figure className="portafolio-item">
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/deliperuano.png?alt=media&token=42939ff5-1a28-4670-8994-8e50d7f1f4b2) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
						<a href="https://www.pagadespues.pe" target="_blank">
							<figure className="portafolio-item">
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/pagadespues.jpg?alt=media&token=1102af10-f293-4492-9c94-d84a64016c74) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>  
						<a href="https://www.acuantoestaeldolar.com/" target="_blank">
							<figure className="portafolio-item">
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/cambiodolar.png?alt=media&token=46f05c5e-49fb-4e1f-a415-2d42de2cc066) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
						<a href="http://www.clubterrazas.com.pe/" target="_blank">
							<figure className="portafolio-item" >
								<div className="portafolio-item-mascara">
									<div className="portafolio-item-img" style={{background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/terrazas.jpg?alt=media&token=94c03751-ab06-4e2e-89fd-33efabce4117) center center no-repeat", backgroundSize: 'cover'}}></div>
								</div>
							</figure>
						</a>
					</Slider>
				</div>


				<style jsx global="true">{`
					.portafolio {
						text-align: center;
						margin: 60px 0 0 0;
						background: #00BCD4;
						padding: 60px 0 20px 0;
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
						z-index: 9;
					} 
					.portafolio .slick-prev {
						left: 0px;
						z-index: 9;
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
						font-family: Poppins;
						color: white;
						padding: 40px 20px;
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

























