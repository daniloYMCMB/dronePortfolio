import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import ForWho from '../components/ForWho'
import PhotoAndVideo from '../components/PhotoAndVideo'
import HowMuch from '../components/HowMuch'

class TrabajoYviaje extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
				<BannerServicesInterna 
					iframe="itFF4hKUC4Y"
					title="Viaje de trabjo"
					text='Ahorre su dinero 
						y elija la opción "Trabajar y viajar". 
						Obtenga su sitio web o imágenes de drones de forma gratuita!'
					btn="Saber más"
					href="#forWho"
				/>
				
				<ForWho 
					titleLeft="¿Para quién?" 
					descriptionLeft='Nos encanta viajar y por eso decidimos trabajar de forma remota. Como nuestra oficina puede ser cualquier lugar del mundo, decidimos presentar la oferta "Trabajo y viaje". Estamos enfocados en esto para propietarios de hoteles, resorts o casas privadas que quieran aumentar su negocio en línea de forma gratuita.'
					bgRight="url(https://144ontour.com/wp-content/uploads/2017/11/Work-Travel-offer.jpg)"
				/>
				
				<PhotoAndVideo 
					classPhotoAndVideo="forWhom"
					classForWhomWeb="forWhom-Web"
					classForWhomFree="forWhom-Free"
					stylePhotoAndVideo={{marginTop: -80}}
					styleWeb={{width: '43%', marginLeft: 10}}
					styleFree={{left: -100, background: 'linear-gradient(to right, rgba(255,255,255,0.2) 0%,rgba(237,237,237,0.4) 100%)', top: -150, color: 'black', padding: 90, paddingLeft: 180, paddingBottom: 140}}
					title="¿ES GRATIS?"
					description="¡Sí! Diseñaremos su sitio web o grabaremos el drone completamente gratis. Brindaremos nuestros servicios a cambio de una estadía de vacaciones en su lugar. Tomaremos el equipo necesario para diseñar el sitio web y realizaremos materiales promocionales, fotos y videos de alta calidad. Póngase en contacto con nosotros para organizar los detalles de intercambio, la duración de la estancia y el tipo de proyecto."
					btnSky={{background: '#00BCD4', color: 'white'}}
				/>
				<HowMuch 
					title="GANAR GANAR"
					description='¡Lo llamamos oferta "GANAR-GANAR" porque puede obtener un servicio profesional, ahorrar su dinero y podemos cumplir nuestros sueños y viajar alrededor del mundo casi gratis!'
					btn="CONTÁCTANOS"
				/>
				
			</Layout>
		)
	}

}
export default TrabajoYviaje