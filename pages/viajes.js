import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import ProfessionalEquipment from '../components/ProfessionalEquipment'
import PhotoAndVideo from '../components/PhotoAndVideo'
import HowMuch from '../components/HowMuch'

class Viajes extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
				<BannerServicesInterna 
					iframe="itFF4hKUC4Y"
					title="Viajes"
					text='Aquí puedes encontrar todos nuestros viajes. 
						  Viajes de trabajo | #SKYDEV 
						  Perú | Dinamarca | Suecia'
					btn="Todos los viajes"
				/>
				
				<PhotoAndVideo 
					stylePhotoAndVideo={{marginTop: 50}}
					styleWeb={{width: '43%', marginLeft: 40}}
					styleFree={{left: -100, background: 'linear-gradient(to right, rgba(255,255,255,0.2) 0%,rgba(237,237,237,0.4) 100%)', top: -180, color: 'black', paddingLeft: 160, paddingRight: 230, paddingBottom: 190, paddingLeft: 180}}
					title="Indonesia 2018"
					description='Nuestro último viaje a Indonesia, durante el cual visitamos Bali, Nusa Lembongan, Nusa Penida e hicimos dos proyectos de "Trabajo y viaje". También nos centramos en desarrollar nuestra cuenta de Instagram.'
				/>

				<HowMuch 
					title="GANAR GANAR"
					description='¡Lo llamamos oferta "GANAR-GANAR" porque puede obtener un servicio profesional, ahorrar su dinero y podemos cumplir nuestros sueños y viajar alrededor del mundo casi gratis!'
					btn="PROYECTOS RECIENTES"
				/>
				
			</Layout>
		)
	}

}
export default Viajes