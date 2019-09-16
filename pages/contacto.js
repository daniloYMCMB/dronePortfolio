import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import Contact from '../components/Contact'

class Contacto extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
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
				
			</Layout>
		)
	}

}
export default Contacto




