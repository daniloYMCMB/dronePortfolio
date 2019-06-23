import Layout from '../components/Layout'
import ReactFullpageDesktop from '../components/ReactFullpageDesktop'

// import { i18n, withNamespaces } from '../i18n'

class Index extends React.Component {

	static async getInitialProps() {
		return {
			namespacesRequired: ['common'],
		}
	}

	render() {

		let page = <ReactFullpageDesktop/>
		return (
			<Layout title="Viaja con Danilo">
				{page}
			</Layout>
		)
	}

}
export default Index




