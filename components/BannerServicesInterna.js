

import ButtonWhite from './Buttons'

class BannerServices extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                i1: "https://www.youtube.com/embed/",
                i2: this.props.iframe + "",
                i3: "?autoplay=1&controls=0&loop=1&mute=1&playlist=xJAwnCMgqCg",
            }
    }

    componentDidMount() {
        setTimeout(function(){ 
            var videoBanner = document.querySelector(".videoBanner-title")
            videoBanner.classList.add('active')
            var videoBanner = document.querySelector(".videoBanner-paragraph")
            videoBanner.classList.add('active')
        }, 500);
    }

	handleDown () {
		// fullpage_api.moveSectionDown();
	}

	render () {

		return 	<div className="videoBanner">
					<div className="videoBanner-container">
                        <div className="vimeo-wrapper">
                            <iframe width="560" height="315" src={this.state.i1 + this.state.i2 + this.state.i3} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                            <div className="container videoBanner-text">
                                <h1 className="videoBanner-title">
                                    {this.props.title}
                                </h1>
                                <br/>
                                <p className="videoBanner-paragraph" style={this.props.style}>
                                    {this.props.text}
                                </p>
                                <ButtonWhite clase="colorWhite" href="" name={this.props.btn}></ButtonWhite>
                            </div>
                            <div className="section-down">
                                <div className="cuadrado"></div>
                                <div className="arrow-down">
                                    <div className="left"></div>
                                    <div className="right"></div>
                                </div>
                            </div>
                        </div>
					</div>

					<style jsx>{`
                        .videoBanner {
                            height: 85vh;
                            position: relative;
                        }
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
                            background: linear-gradient(to right top, transparent 33%, black 33%, black 66%, transparent 66%);
                            background-size: 3px 3px;
                            opacity: 0.6;
                            z-index: 1;
                            pointer-events: none;
                        }
                        .vimeo-wrapper iframe {
                            width: 100vw;
                            height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
                            min-height: 106vh;
                            min-width: 201.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
                            position: absolute;
                            top: 47%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }

                        .videoBanner-text {
                            position: absolute;
                            left: 0;
                            right: 0;
                            width: 100%;
                            top: -70px;
                            bottom: 0;
                            height: 90px;
                            color: white;
                            z-index: 9;
                            font-family: Viga;
                            padding-left: 20px;
                            box-sizing: border-box;
                        }

                        .videoBanner-paragraph {
                            max-width: 400px;
                            font-family: Poppins;
                            margin: 10px 0;
                            opacity: 0;
                            transform: translateY(30px);
                            transition: .5s;
                            transition-delay: 2.4s;
                        }

                        .videoBanner-paragraph.active {
                            opacity: 1;
                            transform: translateY(0);
                        }

                        .videoBanner-title {
                            font-size: 55px;
                            font-weight: bold;
                            opacity: 0;
                            transform: translateY(30px);
                            transition: .5s;
                            transition-delay: 2s;
                        }

                        .videoBanner-title.active {
                            opacity: 1;
                            transform: translateY(0);
                        }

                        .videoBanner-title br {
                            display: none;
                        }

                        @media screen and (max-width: 768px){
                            .videoBanner-title br {
                                display: block;
                            }
                        }

                        @media screen and (max-width: 600px){
                            .videoBanner {
                                box-shadow: none
                            }
                            .vimeo-wrapper video {
                                left: 80%;
                            }
                            .videoBanner-text {
                                top: -130px;
                            }
                            .videoBanner-text br {
                                display: none;
                            }
                            .videoBanner-title  {
                                font-size: 35px;
                            }
                            .videoBanner-skills {
                                flex-wrap: wrap;
                            }
                            .videoBanner-skills li {
                                width: 49%;
                                border-top: 1px solid black;
                                padding: 15px 10px;
                            }
                            .videoBanner-skills p span {
                                display: none;
                            }
                        }

                        @media screen and (max-width: 400px){
                            .videoBanner-text {
                                top: -60px;
                                height: 80px;
                            }
                            .videoBanner-title {
                                font-size: 25px;
                            }
                            .videoBanner-skills figure {
                                margin-bottom: 10px;
                            }
                            .videoBanner-skills img {
                                width: 25px;
                                height: 25px;
                            }
                            .videoBanner-skills h2 {
                                font-size: 11px;
                            }
                            .videoBanner-skills p {
                                font-size: 9px;
                            }
                        }

                        @keyframes translateBottomToTop {
                            0% {
                                transform: translateY(30px);
                                opacity: 0;
                            }
                            50% {
                                transform: translateY(10px);
                                opacity: 0;
                            }
                            100% {
                                transform: translateY(0);
                                opacity: 1;
                            }
                        }

                        .section-down {
                            position: absolute;
                            bottom: 1px;
                            height: 60px;
                            left: 0;
                            width: 100%;
                            z-index: 9;
                        }
                        .cuadrado {
                            width: 60px;
                            height: 60px;
                            border-radius: 6px 0px 0px 0px;
                            transform: rotate(45deg);
                            background: white;
                            position: absolute;
                            left: 95px;
                            bottom: -32px;
                        }
                        .arrow-down{
                            width:30px;
                            height:20px;
                            margin:0 0 0 -30px;
                            position:absolute;
                            left: 140px;
                            bottom: 0px;
                            animation: arrow .6s 1s infinite ease-out alternate;
                        }

                        .arrow-down:hover{
                            animation-play-state: paused;
                        }

                        .left{
                            position:absolute;
                            height:3px;
                            width:15px;
                            background:gray;
                            -webkit-transform:rotate(230deg);
                            top:13px;
                            left:8px;
                            border-radius:4px;
                            transform-origin:5px 50%;
                        }

                        .right{
                            position:absolute;
                            height:3px;
                            width:15px;
                            background:gray;
                            -webkit-transform:rotate(-50deg);
                            top:13px;
                            left:13px;
                            border-radius:4px;
                            transform-origin:5px 50%;
                        }

                        @keyframes arrow{
                          0% {
                            bottom:0px;
                          }
                          100%{
                            bottom:10px;
                          }
                        }

                        @keyframes leftArrow{
                          0% {
                          }
                          100%{
                            -webkit-transform:rotate(225deg);
                          }
                        }

                        @keyframes rightArrow{
                          0% {
                          }
                          100%{
                            -webkit-transform:rotate(-45deg);
                          }
                        }
					`}</style>
				</div>
	}
}

export default BannerServices;