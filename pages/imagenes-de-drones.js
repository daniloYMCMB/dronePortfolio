import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import ProfessionalEquipment from '../components/ProfessionalEquipment'
import PhotoAndVideo from '../components/PhotoAndVideo'
import WebsiteFree from '../components/WebsiteFree'
import HowMuch from '../components/HowMuch'

class disenoweb extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
				<BannerServicesInterna 
					title="Imágenes de drones"
					text="Ideal para propietarios de hoteles y resorts. 
							Servicios de fotografía aérea y video 
							en la más alta calidad."
				/>
				
				<ProfessionalEquipment />
				<PhotoAndVideo />
				<WebsiteFree />
				<HowMuch />
				
			</Layout>
		)
	}

}
export default disenoweb