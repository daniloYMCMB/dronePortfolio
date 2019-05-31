import Layout from '../components/Layout'
import ReactFullpage from '../components/ReactFullpage'
import ReactFullpageDesktop from '../components/ReactFullpageDesktop'

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: ""
		}
	}

	componentDidMount() {
		const width = window.innerWidth;
		console.log(width)
		this.setState({
			width: width
		}) 

	}

	render() {
		const isMobile = this.state.width
		let page;

		if (isMobile < 767) {
			page = <ReactFullpage />
		} else {
			page = <ReactFullpageDesktop />
		}
		return (
			<Layout title="Viaja con Danilo">
				{page}
			</Layout>
		)
	}

}





