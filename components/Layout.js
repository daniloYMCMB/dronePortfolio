import Link from 'next/link'
import Head from 'next/head'

export default class Layout extends React.Component {

    componentDidMount() {

		const width = window.innerWidth;
    }

	render () {

		const { children, title, width } = this.props
		
		return <div className="Layout">

			<Head>
				<title>{ title }</title>

				<meta name="viewport" content="width=device-width, user-scalable=no" />
				<link rel="icon" type="image/png" href="/static/img/FAVICON-DOLAR.png" />
			</Head>
			
			{children}
			
			<style jsx global>{`

				body {
					overflow-x: hidden;
				}
				
				.Layout {
					height: 100vh;
					font-family: 'Viga';
				}

				@font-face{
				    font-family:'Viga';
				    src:url("/static/fonts/Viga-Regular.eott");
				    src:local('☺'),
				    url("/static/fonts/Viga-Regular.woff") format('woff'),
				    url("/static/fonts/Viga-Regular.ttf") format('truetype'),
				    url("/static/fonts/Viga-Regular.svg") format('svg');
				    font-weight:normal;
				    font-style:normal;
				}
				@font-face {
				    font-family: 'Montserrat';
				    src: url('/static/fonts/Montserrat-Regular.woff2') format('woff2'),
				         url('/static/fonts/Montserrat-Regular.woff') format('woff');
				    font-weight: normal;
				    font-style: normal;
				}

				.df {
					display: flex;
					justify-content;
					align-items: center;
					text-align: center;
				}

				html, body, div, span, applet, object, iframe,
				h1, h2, h3, h4, h5, h6, p, blockquote, pre,
				a, abbr, acronym, address, big, cite, code,
				del, dfn, em, img, ins, kbd, q, s, samp,
				small, strike, strong, sub, sup, tt, var,
				b, u, i, center,
				dl, dt, dd, ol, ul, li,
				fieldset, form, label, legend,
				table, caption, tbody, tfoot, thead, tr, th, td,
				article, aside, canvas, details, embed,
				figure, figcaption, footer, header, hgroup,
				main, menu, nav, output, ruby, section, summary,
				time, mark, audio, video {
					margin: 0;
					padding: 0;
					border: 0;
					font-size: 100%;
					font: inherit;
					vertical-align: baseline;
				}
				article, aside, details, figcaption, figure,
				footer, header, hgroup, main, menu, nav, section {
					display: block;
				}
				body {
					line-height: 1;
				}
				ol, ul {
					list-style: none;
				}
				blockquote, q {
					quotes: none;
				}
				blockquote:before, blockquote:after,
				q:before, q:after {
					content: '';
					content: none;
				}
				table {
					border-collapse: collapse;
					border-spacing: 0;
				}
				a {
					text-decoration: none;
					display: inline-block;
				}

				.fp-controlArrow.fp-prev {
					width: 30px !important;
				}


				@media screen and (max-width: 767px) {
	              .slide {
	                overflow: hidden;
	              }
	              .fp-right {
	                display: none;
	              }
	              .fp-controlArrow.fp-prev {
	                border: none;
	                background: url(/static/img/arrow-down.svg);
	                background-size: cover;
	                width: 30px;
	                height: 30px;
	                transform: rotate(90deg);
	                left: 10px;
	              }
	              .fp-controlArrow.fp-next {
	                border: none;
	                background: url(/static/img/arrow-down.svg);
	                background-size: cover;
	                width: 30px;
	                height: 30px;
	                transform: rotate(-90deg);
	                right: 10px;
	              }
	            }

	            .firstSection {
	              display: flex;
	              justify-content: center;
	              align-items: center;
	              background: url(/static/img/bg1.svg) -233px 0px;
	              background-size: cover;
	              height: 100%;
	              position: relative;
	            }

	            .firstSection:before {
	              content:"";
	              background: url(/static/img/nubes1.svg) -35px 0px;
	              background-size: cover;
	              position: absolute;
	              bottom: 0;
	              left: 0;
	              right: 0;
	              width: 100%;
	              height: 30vh;
	            }

	            .firstSection:after {
	            	content: "";
								background: url(/static/img/arrow-down.svg);
								background-size: cover;
								position: absolute;
								bottom: 30px;
								left: 0;
								right: 0;
								margin: auto;
								width: 30px;
								height: 30px;
								z-index: 9;
	            }

	            .secondSection {
	              position: relative;
	              display: flex;
	              justify-content: center;
	              align-items: center;
	            }

	            .section3 {
	              position: relative;
	            }


	            .section3:before {
	              content: "";
	              background: url(/static/img/nubes3.svg) center center no-repeat;
	              background-size: cover;
	              position: absolute;
	              bottom: 0;
	              left: 0;
	              width: 100%;
	              z-index: 9;
	              height: 30vh;
	            }

	            @media screen and (max-width: 1024px) {
	              .section3:before {
	                height: 30vh;
	                z-index: 10;
	                background-size: inherit;
	              }
	            }

	            @media screen and (max-width: 767px) {
	              .slide {
	                overflow: hidden;
	              }
	              .fp-right {
	                display: none;
	              }
	              .fp-controlArrow.fp-prev {
	                border: none;
	                background: url(/static/img/arrow-down.svg);
	                background-size: cover;
	                width: 30px;
	                height: 30px;
	                transform: rotate(90deg);
	                left: 10px;
	              }
	              .fp-controlArrow.fp-next {
	                border: none;
	                background: url(/static/img/arrow-down.svg);
	                background-size: cover;
	                width: 30px;
	                height: 30px;
	                transform: rotate(-90deg);
	                right: 10px;
	              }
	            }
				
			`}</style>

		</div>
	}
}