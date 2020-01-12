import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import ProfessionalEquipment from '../components/ProfessionalEquipment'
import PhotoAndVideo from '../components/PhotoAndVideo'
import WebsiteFree from '../components/WebsiteFree'
import HowMuch from '../components/HowMuch'
import Head from 'next/head'

class ImagenesDrone extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				<Head>
				<title>Imágenes de drones | Video y fotografía - TECNOVA.IO - Tecnova.io</title>
				<meta name="title" content="Imágenes de drones | TECNOVA.IO - Tecnova.io"></meta>
				<meta name="description" content="Brindamos servicios de fotografía y video aéreo basados ​​en drones. Pon tu TripAdvisor o Booking.com a un nivel completamente nuevo | Imágenes de drones."></meta>
				
				<meta property="og:type" content="website"></meta>
				<meta property="og:url" content="https://www.tecnova.io/imagenes-de-drones"></meta>
				<meta property="og:title" content="Imágenes de drones | TECNOVA.IO - Tecnova.io"></meta>
				<meta property="og:description" content="Brindamos servicios de fotografía y video aéreo basados ​​en drones. Pon tu TripAdvisor o Booking.com a un nivel completamente nuevo | Imágenes de drones."></meta>
				<meta property="og:image" content=""></meta>
				
				<meta property="twitter:card" content="summary_large_image"></meta>
				<meta property="twitter:url" content="https://www.tecnova.io/imagenes-de-drones"></meta>
				<meta property="twitter:title" content="Imágenes de drones | TECNOVA.IO - Tecnova.io"></meta>
				<meta property="twitter:description" content="Brindamos servicios de fotografía y video aéreo basados ​​en drones. Pon tu TripAdvisor o Booking.com a un nivel completamente nuevo | Imágenes de drones."></meta>
				<meta property="twitter:image" content=""></meta>
				</Head>
				
				<BannerServicesInterna 
					iframe="itFF4hKUC4Y"
					title="Imágenes de drones"
					text="Ideal para propietarios de hoteles y resorts. 
							Servicios de fotografía aérea y video 
							en la más alta calidad."
					btn="Saber más"
					href="#ProfessionalEquipment"
				/>
				
				<ProfessionalEquipment 
					titleLeft="EQUIPOS PROFESIONALES" 
					descriptionLeft="Usamos el avión no tripulado profesional para proporcionar fotos de alta calidad y videos 4K UHD. Suministramos ángulos innovadores, nunca antes vistos, que pueden ofrecer innumerables ventajas para casi cualquier negocio." 
					bgRight="url(/static/img/DJI-Mavic-Pro.png)"
				/>

				<PhotoAndVideo 
					title="HOTEL Y RESORT
							FOTOGRAFÍA Y VIDEO."
					description="Actualiza tu oferta en línea. ¡Destaquemos de los demás! Muestre su objeto desde una perspectiva completamente nueva y sorprenda a sus clientes potenciales. Lleve sus ofertas de Booking.com o TripAdvisor a un nivel completamente nuevo."
				/>
				<WebsiteFree />
				<HowMuch 
					title="CUÁNTO CUESTA"
					description="No tenemos una lista de precios fijos. Cada proyecto se valora individualmente en función del número de pestañas y el nivel de complejidad del sitio web. Rellene el formulario para obtener la cotización exacta."
					btn="OBTENGA UNA CUOTA GRATIS"
				/>
				
			</Layout>
		)
	}

}
export default ImagenesDrone