import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import Testimony from '../components/testimony'
import Portafolio from '../components/portafolio'

class portafolio extends React.Component {
	
	render() {

		return (
			<Layout title="Portafolio">
				
				<BannerServicesInterna 
					iframe="oTALBxiERRQ"
					title="Portafolio"
					text="Nuestro trabajo es nuestra pasión.
					Ver proyectos recientes."
					btn="Ver proyectos recientes"
				/>
				<Testimony />
				<Portafolio />
				
			</Layout>
		)
	}

}
export default portafolio