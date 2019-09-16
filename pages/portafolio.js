import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import Testimony from '../components/Testimony'
import PortafolioI from '../components/Portafolio'

class Portafolio extends React.Component {
	
	render() {

		return (
			<Layout title="Portafolio">
				
				<BannerServicesInterna 
					iframe="oTALBxiERRQ"
					title="Portafolio"
					text="Nuestro trabajo es nuestra pasión.
					Ver proyectos recientes."
					btn="Ver proyectos recientes"
					href="#portafolio"
				/>
				<Testimony />
				<PortafolioI />
				
			</Layout>
		)
	}

}
export default Portafolio