import Layout from '../components/Layout'
import BannerServices from '../components/BannerServices'
import Services from '../components/Services'
import Portafolio from '../components/Portafolio'
import Prices from '../components/Prices'
import Contact from '../components/Contact'

import ReactPlayer from 'react-player'

// import { i18n, withNamespaces } from '../i18n'

class Contacto extends React.Component {

	state = {
		playing: true
	}

	handlePlayPause = (e) => {
		this.setState({ playing: !this.state.playing })
	}

	handlePause = () => {
		this.setState({ playing: false })
	}

	handlePlay = () => {
		this.setState({ playing: true })
	}

	render () {
		const { playing } = this.state
		return (
			<Layout>
				<ReactPlayer
					url="https://www.youtube.com/embed/xJAwnCMgqCg?enablejsapi=1&autoplay=1"
					playing={playing}
					onPause={this.handlePause}
					className="react-player"
				/>
				<button onClick={this.handlePause}>
					Pause
				</button>
				<button onClick={this.handlePlay}>
					Play
				</button>
				<style>{`
					.react-player {
						width: 100% !important;
						height: 100% !important;
					}
				`}</style>
			</Layout>
		)
	}

};
export default Contacto




