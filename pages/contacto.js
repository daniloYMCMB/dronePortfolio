import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import Contact from '../components/Contact'

import Head from 'next/head'

class Contacto extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
				<Head>
					<title>Contáctenos | Cotización Gratis - TECNOVA.IO - Tecnova.io</title>
					<meta name="title" content="Contáctenos | Cotización Gratis - TECNOVA.IO - Tecnova.io"></meta>
					<meta name="description" content="Contáctenos | TECNOVA.IO | Email: hola.tecnova@gmail.com | WhatsApp: +51 931 447 041 | Facebook: TECNOVA.IO | Instagram: TECNOVA.IO"></meta>
					
					<meta property="og:type" content="website"></meta>
					<meta property="og:url" content="https://www.tecnova.io/contacto"></meta>
					<meta property="og:title" content="Contáctenos | Cotización Gratis - TECNOVA.IO - Tecnova.io"></meta>
					<meta property="og:description" content="Contáctenos | TECNOVA.IO | Email: hola.tecnova@gmail.com | WhatsApp: +51 931 447 041 | Facebook: TECNOVA.IO | Instagram: TECNOVA.IO"></meta>
					<meta property="og:image" content=""></meta>
					
					<meta property="twitter:card" content="summary_large_image"></meta>
					<meta property="twitter:url" content="https://www.tecnova.io/contacto"></meta>
					<meta property="twitter:title" content="Contáctenos | Cotización Gratis - TECNOVA.IO - Tecnova.io"></meta>
					<meta property="twitter:description" content="Contáctenos | TECNOVA.IO | Email: hola.tecnova@gmail.com | WhatsApp: +51 931 447 041 | Facebook: TECNOVA.IO | Instagram: TECNOVA.IO"></meta>
					<meta property="twitter:image" content=""></meta>
				</Head>
				
				<BannerServicesInterna 
					iframe="0AVP-nxv3aw"
					title="Contáctenos"
					text="¿Listo para comenzar un proyecto? ¿Tienes alguna pregunta? Solo contáctenos y conviértase en nuestro cliente."
					btn="Enviar un mensaje"
					styleBg={{height: '100vh', background: 'url(/static/img/eiffel2.jpg) center top no-repeat', backgroundSize: 'cover'}}
					styleNone={{display: 'none'}}
					contactBefore="contactBefore"
					href="#contact"
				/>
				<Contact></Contact>
				
				<style>{`
					#contactBefore .react-player {
						display: none;
					}
					.btn-white {
						display: none;
					}
					.colorWhite .btn-white {
						display: inline-block;
						opacity: 1;
					}
				`}</style>
			</Layout>
		)
	}

}
export default Contacto




