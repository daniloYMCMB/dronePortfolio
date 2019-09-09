import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import DisenoEstetico from '../components/DisenoEstetico'
import AvailableMobiles from '../components/AvailableMobiles'
import WebsiteFree from '../components/WebsiteFree'
import UxEditable from '../components/UxEditable'
import HowMuch from '../components/HowMuch'

class Disenoweb extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
				<BannerServicesInterna 
					iframe="0AVP-nxv3aw"
					title="Diseño web"
					text="Brindamos servicios digitales frescos y creativos. A empresas que quieran crecer online. El diseño web es nuestro servicio clave."
					btn="Iniciar un proyecto"
				/>
				<DisenoEstetico />
				<AvailableMobiles />
				<WebsiteFree />
				<UxEditable />
				<HowMuch 
					title="¿CUÁNTO CUESTA?"
					description="No tenemos una lista de precios fijos. Cada proyecto se valora individualmente en función del número de pestañas y el nivel de complejidad del sitio web. Rellene el formulario para obtener la cotización exacta."
					btn="COMENZAR PROYECTO"
				/>
				
			</Layout>
		)
	}

}
export default Disenoweb




