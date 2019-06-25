import Link from 'next/link'

export default class Buttons extends React.Component {
	render() {
		return <div>
			      <Link href={this.props.href}>
			      	<a className="btn-white">
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
						font-size: 14px;
						border-radius: 4px;
						font-family: Viga;
			      	}
			      `}</style>
			  </div>
	}
}

