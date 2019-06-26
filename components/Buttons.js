import Link from 'next/link'

export default class Buttons extends React.Component {
	render() {
		return <div className={this.props.clase}>
			      <Link href={this.props.href}>
			      	<a className="btn-white" >
						{this.props.name}
			      	</a>
			      </Link>
			      <style>{`
			      	.btn-white {
						margin: auto;
						display: inline-block;
						padding: 13px 15px;
						background: white;
						color: #00BCD4;
						box-sizing: border-box;
						margin-top: 10px;
						margin-left: 100px;
						font-size: 16px;
						border-radius: 4px;
						font-family: Viga;
						text-transform: uppercase;
						transition: .3s linear;
			      	}
			      	.btn-white:hover {
						background: hsla(0,0%,100%,.85);
			      	}

			      	.colorWhite a {
			      		color: gray;
			      		margin: 10px 0 0;

			      	}
			      `}</style>
			  </div>
	}
}

