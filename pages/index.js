import Layout from '../components/Layout'
import ReactFullpageDesktop from '../components/ReactFullpageDesktop'

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: ""
		}
	}

	componentDidMount() {

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





