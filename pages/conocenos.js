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
				/>

				<WorkSmart />
				<WebsiteFree bg="url(https://144ontour.com/wp-content/uploads/2017/11/Get-in-touch.jpg)" />
				
			</Layout>
		)
	}

}
export default Conocenos




