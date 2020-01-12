import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import WorkSmart from '../components/WorkSmart'
import WebsiteFree from '../components/WebsiteFree'

import Head from 'next/head'

class Conocenos extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
				
				<Head>
					<title>Conócenos TECNOVA.IO - TECNOVA.IO - Tecnova.io</title>
					<meta name="title" content="Portafolio | Diseño web | Imágenes de drone - TECNOVA.IO - Tecnova.io"></meta>
					<meta name="description" content="La idea principal de la compañía es Trabajar y Viajar alrededor del mundo. Ofrecemos diseño web profesional y medios digitales con imágenes de drones."></meta>
					
					<meta property="og:type" content="website"></meta>
					<meta property="og:url" content="https://www.tecnova.io/conocenos"></meta>
					<meta property="og:title" content="Portafolio | Diseño web | Imágenes de drone - TECNOVA.IO - Tecnova.io"></meta>
					<meta property="og:description" content="La idea principal de la compañía es Trabajar y Viajar alrededor del mundo. Ofrecemos diseño web profesional y medios digitales con imágenes de drones."></meta>
					<meta property="og:image" content=""></meta>
					
					<meta property="twitter:card" content="summary_large_image"></meta>
					<meta property="twitter:url" content="https://www.tecnova.io/conocenos"></meta>
					<meta property="twitter:title" content="La idea principal de la compañía es Trabajar y Viajar alrededor del mundo. Ofrecemos diseño web profesional y medios digitales con imágenes de drones."></meta>
					<meta property="twitter:description" content=""></meta>
					<meta property="twitter:image" content=""></meta>
				</Head>
				<BannerServicesInterna 
					iframe="NNvFvEkwMPU"
					title="Conócenos"
					text="Diseño web | Diseño de medios digitales | Imágenes de drones | La vuelta al mundo | 
					Trabajo y viajes | Con sede en Lima, Perú |"
					style={{maxWidth: 390}}
					btn="Saber más"
					href="#WorkSmart"
				/>

				<WorkSmart />
				<WebsiteFree bg="url(/static/img/parlamento.jpg)" />
				
			</Layout>
		)
	}

}
export default Conocenos




