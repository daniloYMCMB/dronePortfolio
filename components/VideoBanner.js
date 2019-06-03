class VideoBanner extends React.Component {


	handleDown () {
		fullpage_api.moveSectionDown();
	}

	render () {
		return 	<div className="videoBanner">
					<div className="videoBanner-container">

                        <div className="vimeo-wrapper">
                            <video data-autoplay loop muted>
                                <source src="./static/video/IvanOspinaFMX.mp4" type="video/mp4"></source>
                            </video>
                            <div className="df container videoBanner-text">
                                <h1 className="videoBanner-title">¿Necesita mostrar su proyecto eficientemente?</h1>
                                <ul className="videoBanner-skills">
                                    <li>
                                        <p>
                                            Especialistas en filmaciones y fotos aéreas
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            La mejor calidad de video - 4k
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Videos para empresas, inmobiliares, eventos, etc
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

					</div>

					<style jsx>{`
						
                    .vimeo-wrapper {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 99;
                        overflow: hidden;
                    }
                    .vimeo-wrapper:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left 0;
                        height: 100%;
                        width: 100%;
                        background: black;
                        opacity: 0.5;
                        z-index: 1;
                    }
                        
                    .vimeo-wrapper video {
                        width: 100vw;
                        height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
                        min-height: 100vh;
                        min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }

                    .videoBanner-text {
                        position: absolute;
                        left: 0;
                        right: 0;
                        width: 100%;
                        top: 0;
                        bottom: 0;
                        height: 150px;
                        text-align: left;
                        color: white;
                        z-index: 9;
                    }

                    .videoBanner-title {
                        font-size: 50px;
                        width: 50%;
                    }

                    .videoBanner-skills {
                        width: 50%;
                        font-size: 20px;
                        padding-left: 4%;
                        box-sizing: border-box;
                    }

                    .videoBanner-skills li {
                        margin-bottom: 35px;
                    }

                    .videoBanner-skills li:last-child {
                        margin-bottom: 0px;
                    }

                    @media and screen(max-width: 980px) {

                    }
					`}</style>
				</div>
	}
}

export default VideoBanner;