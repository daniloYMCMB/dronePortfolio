import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import ProfessionalEquipment from '../components/ProfessionalEquipment'
import PhotoAndVideo from '../components/PhotoAndVideo'
import WebsiteFree from '../components/WebsiteFree'
import HowMuch from '../components/HowMuch'

class imagenesDrone extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
				<BannerServicesInterna 
					iframe="itFF4hKUC4Y"
					title="Imágenes de drones"
					text="Ideal para propietarios de hoteles y resorts. 
							Servicios de fotografía aérea y video 
							en la más alta calidad."
					btn="Saber más"
				/>
				
				<ProfessionalEquipment 
					titleLeft="EQUIPOS PROFESIONALES" 
					descriptionLeft="Usamos el avión no tripulado profesional para proporcionar fotos de alta calidad y videos 4K UHD. Suministramos ángulos innovadores, nunca antes vistos, que pueden ofrecer innumerables ventajas para casi cualquier negocio." 
					bgRight="url(/static/img/DJI-Mavic-Pro.png)"
				/>

				<PhotoAndVideo 
					title="HOTEL Y RESORT m b
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
export default imagenesDrone