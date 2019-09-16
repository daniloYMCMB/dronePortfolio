import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import WorkSmart from '../components/WorkSmart'
import WebsiteFree from '../components/WebsiteFree'

class Conocenos extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
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




