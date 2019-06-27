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
				
				<BannerServicesInterna />
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




