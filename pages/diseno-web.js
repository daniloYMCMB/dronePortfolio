import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import DisenoEstetico from '../components/DisenoEstetico'
import AvailableMobiles from '../components/AvailableMobiles'
import WebsiteFree from '../components/WebsiteFree'
import UxEditable from '../components/UxEditable'
import HowMuch from '../components/HowMuch'

import Head from 'next/head'

class Disenoweb extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
				<Head>
					<title>Diseño web profesional y estético TECNOVA.IO - Tecnova.io</title>
					<meta name="title" content="Diseño web profesional y estético TECNOVA.IO - Tecnova.io"></meta>
					<meta name="description" content="El diseño web de TECNOVA.IO se distingue por: profesionalismo, diseño estético, atención especial a los detalles, disponibilidad en teléfonos inteligentes, SEO amigable."></meta>
					
					<meta property="og:type" content="website"></meta>
					<meta property="og:url" content="https://www.tecnova.io/diseno-web"></meta>
					<meta property="og:title" content="Diseño web profesional y estético TECNOVA.IO - Tecnova.io"></meta>
					<meta property="og:description" content="El diseño web de TECNOVA.IO se distingue por: profesionalismo, diseño estético, atención especial a los detalles, disponibilidad en teléfonos inteligentes, SEO amigable."></meta>
					<meta property="og:image" content=""></meta>
					
					<meta property="twitter:card" content="summary_large_image"></meta>
					<meta property="twitter:url" content="https://www.tecnova.io/diseno-web"></meta>
					<meta property="twitter:title" content="Diseño web profesional y estético TECNOVA.IO - Tecnova.io"></meta>
					<meta property="twitter:description" content="El diseño web de TECNOVA.IO se distingue por: profesionalismo, diseño estético, atención especial a los detalles, disponibilidad en teléfonos inteligentes, SEO amigable."></meta>
					<meta property="twitter:image" content=""></meta>
				</Head>
				<BannerServicesInterna 
					iframe="0AVP-nxv3aw"
					title="Diseño web"
					text="Brindamos servicios digitales frescos y creativos. A empresas que quieran crecer online. El diseño web es nuestro servicio clave."
					btn="Iniciar un proyecto"
					href="/contacto"
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




