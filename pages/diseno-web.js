import Layout from '../components/Layout'
import BannerServicesInterna from '../components/BannerServicesInterna'
import DisenoEstetico from '../components/DisenoEstetico'
import AvailableMobiles from '../components/AvailableMobiles'
import WebsiteFree from '../components/WebsiteFree'

class disenoweb extends React.Component {

	render() {

		return (
			<Layout title="Viaja con Danilo">
				
				<BannerServicesInterna />
				<DisenoEstetico />
				<AvailableMobiles />
				<WebsiteFree />
				
			</Layout>
		)
	}

}
export default disenoweb




