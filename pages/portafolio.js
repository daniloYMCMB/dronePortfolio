import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import Portafolio from '../components/portafolio'

class portafolio extends React.Component {

	render() {

		return (
			<Layout title="Portafolio">
				
				<BannerServicesInterna 
					title="Portafolio"
					text="Nuestro trabajo es nuestra pasión.
					Ver proyectos recientes."
				/>
				<Portafolio />
				
			</Layout>
		)
	}

}
export default portafolio