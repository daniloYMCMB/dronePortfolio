import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import DisenoEstetico from '../components/DisenoEstetico'
import AvailableMobiles from '../components/AvailableMobiles'
import WebsiteFree from '../components/WebsiteFree'
import UxEditable from '../components/UxEditable'
import HowMuch from '../components/HowMuch'

class disenoweb extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
				<BannerServicesInterna 
					title="Diseño web"
					text="Brindamos servicios digitales frescos y creativos. a empresas que quieran crecer online. El diseño web es nuestro servicio clave."
				/>
				<DisenoEstetico />
				<AvailableMobiles />
				<WebsiteFree />
				<UxEditable />
				<HowMuch />
				
			</Layout>
		)
	}

}
export default disenoweb




