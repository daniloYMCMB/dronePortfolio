import Link from 'next/link'
import Head from 'next/head'

import Header from './Header'

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
				
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

			</Head>

            <Header></Header>
			
			{children}
			
			<style jsx global>{`

				body {
					overflow-x: hidden;
				}
				
				.Layout {
					height: 100vh;
					font-family: "Poppins", Helvetica, Arial, sans-serif;
					font-size: 16px;
					line-height: 20px;
					font-weight: 600;
					font-style: normal;
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
				    font-family: 'Poppins';
				    src:url("/static/fonts/Poppins-ExtraLight.eot");
				    src:local('☺'),
				    url("/static/fonts/Poppins-ExtraLight.wofff") format('woff'),
				    url("/static/fonts/Poppins-ExtraLight.ttf") format('truetype'),
				    url("/static/fonts/Poppins-ExtraLight.svg") format('svg');
				}
				
				@font-face {
				    font-family: 'Poppins-Bold';
				    src:url("/static/fonts/Poppins-ExtraBold.eot");
				    src:local('☺'),
				    url("/static/fonts/Poppins-ExtraBold.woff") format('woff'),
				    url("/static/fonts/Poppins-ExtraBold.ttf") format('truetype'),
				    url("/static/fonts/Poppins-ExtraBold.svg") format('svg');
				}

				.df {
					display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
				}

				.container {
					max-width: 960px;
					width: 94%;
					margin: auto;
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
					letter-spacing: .4px;
				}
				img {
					max-width: 100%;
					height: auto;
					display: block;
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

				@media screen and (max-width: 600px) {
					.Layout {
						font-size: 14px;
					}
					h2 {
						font-size: 20px !important;
					}
					a {

					}
				}
				
			`}</style>

			<script src="https://apps.elfsight.com/p/platform.js" defer></script>
		</div>

	}
}