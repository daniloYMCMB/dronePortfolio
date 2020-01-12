class ButtonBanner extends React.Component {

    state = {
        playing: true
    }

    componentDidMount() {
    
        if(window.innerWidth < 1000) {
            this.setState({ playing: false })
            console.log(this.state.playing)
        }
    }

    handlePlayPause = (e) => {
        this.setState({ playing: !this.state.playing })
    }

	render () {
        const { playing } = this.state
		return 	<div>
                    <button className="btn-white" onClick={this.handlePlayPause}>
                        {playing ? 'Detener video' : 'Reanudar video'}
                    </button>
                    <button className="btn-white mobile" onClick={this.handlePlayPause}>
                        {playing ? 'Detener video' : 'Ver video'}
                    </button>


					<style>{`

                    .btn-white {
                        margin: 15px !important;
                        padding: 10px 30px !important;
                        outline: none;
                        opacity: 0;
                        transform: translateY(30px);
                        transition: .5s;
                        cursor: pointer;
                    }
                    .btn-white.mobile {
                        display: none;
                    }
                    .btn-white.active {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    @media screen and (max-width: 768px){
                        .btn-white {
                            display: none !important;
                        }
                        .btn-white.mobile {
                            display: inline-block !important;
                        }
                    }
					`}</style>
				</div>
	}
}

export default ButtonBanner;