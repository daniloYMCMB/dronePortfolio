import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import Testimony from '../components/Testimony'
import PortafolioI from '../components/Portafolio'

import Head from 'next/head'

class Portafolio extends React.Component {
	
	render() {

		return (
			<Layout title="Portafolio">
				
				<Head>
					<title>Portafolio | Diseño web | Imágenes de drone - TECNOVA.IO - Tecnova.io</title>
					<meta name="title" content="Portafolio | Diseño web | Imágenes de drone - TECNOVA.IO - Tecnova.io"></meta>
					<meta name="description" content="Mira nuestros proyectos recientes. Diseño web profesional e imágenes de drones. ¡Conviértete en nuestro cliente ahora! Portafolio | Diseño web | Imágenes de drones."></meta>
					
					<meta property="og:type" content="website"></meta>
					<meta property="og:url" content="https://www.tecnova.io/portafolio"></meta>
					<meta property="og:title" content="Portafolio | Diseño web | Imágenes de drone - TECNOVA.IO - Tecnova.io"></meta>
					<meta property="og:description" content="TMira nuestros proyectos recientes. Diseño web profesional e imágenes de drones. ¡Conviértete en nuestro cliente ahora! Portafolio | Diseño web | Imágenes de drones."></meta>
					<meta property="og:image" content=""></meta>
					
					<meta property="twitter:card" content="summary_large_image"></meta>
					<meta property="twitter:url" content="https://www.tecnova.io/portafolio"></meta>
					<meta property="twitter:title" content="Portafolio | Diseño web | Imágenes de drone - TECNOVA.IO - Tecnova.io"></meta>
					<meta property="twitter:description" content="Mira nuestros proyectos recientes. Diseño web profesional e imágenes de drones. ¡Conviértete en nuestro cliente ahora! Portafolio | Diseño web | Imágenes de drones."></meta>
					<meta property="twitter:image" content=""></meta>
				</Head>
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