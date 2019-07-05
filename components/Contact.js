import firebase from '../firebase.js'


class Contact extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			nombres: '',
			empresa: '',
			email: '',
			celular: '',
			mensaje: '',
		};
	}

	handleCloseForm(e) {
		e.preventDefault()

		const thanks = document.getElementById("thanks")
		thanks.classList.remove('active')
	}

	updateInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	sendContact = e => {
		e.preventDefault()

		const db = firebase.firestore()
		const userRef = db.collection("form-contacto").add({
			nombres: this.state.email,
			empresa: this.state.empresa,
			email: this.state.email,
			celular: this.state.celular,
			mensaje: this.state.mensaje
		})
		.then(function(docRef) {
			const thanks = document.getElementById("thanks")
			thanks.classList.add('active')
		})
		.catch(function(error) {
			console.log("Error: " + error)
		})

    	this.setState({
    		nombres: '',
    		empresa: '',
    		email: '',
    		celular: '',
    		mensaje: ''
    	})
	}

	render () {
		return <div className="contact">

			<div className="container">
				<h2 className="contact-title">
					¿Tiene un proyecto en el que <br/> <strong>podamos ayudarlo?</strong>
				</h2>


				<div className="contact-form">
					<form onSubmit={this.sendContact}>
						<div className="contact-formInput">
							<input 
								type="text" 
								placeholder="Nombres*"
								name="nombres"
								value= {this.state.nombres}
								onChange={this.updateInput}
								required
								 />
							<input 
								type="text" 
								placeholder="Empresa*"
								name="empresa"
								value= {this.state.apellidos}
								onChange={this.updateInput} 
								required
								/>
						</div>
						<div className="contact-formInput">
							<input 
								type="text" 
								placeholder="Email*"
								name="email"
								value= {this.state.email}
								onChange={this.updateInput} 
								required
								/>
							<input 
								type="text" 
								placeholder="Celular*"
								name="celular"
								value= {this.state.celular}
								onChange={this.updateInput} 
								required
								/>
						</div>
						<div className="contact-formInput">
							<textarea id="" cols="30" rows="3" 
								placeholder="Cuéntanos cuál es tu empresa y te contactaremos."

								name="mensaje"
								value= {this.state.mensaje}
								onChange={this.updateInput} 
								required
								>
							</textarea>

							<p>*Todos los Campos son Obligatorios</p>
						</div>
						<button className="btnRosa">
							Enviar
						</button>
					</form>
				</div>
				
			</div>

			<div className="gracias" id="thanks">
				<h2 className="contact-title">
					¡Gracias! <br/> <strong>Te Contactaremos</strong>
				</h2>
				<button className="btnRosa" onClick={this.handleCloseForm} >
					Entendido
				</button>
			</div>

			<style jsx>{`
				.contact {
					text-align: center;
					padding: 80px 0 60px 0;
					color: black;
					position: relative;
					z-index: 99;
					box-sizing: border-box;
					background: url(/static/img/huancaya.jpg) center center no-repeat;
					background-size: cover;
					height: 100vh;
					padding-top: 30vh;
					background-attachment: fixed;
				}
				.contact:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left 0;
                    height: 100%;
                    width: 100%;
                    background: black;
                    opacity: 0.2;
                    z-index: 1;
                    pointer-events: none;
                }
                .contact .container {
                	position: relative;
                	z-index: 9;
                }
				.contact-title {
					font-size: 22px;
					text-transform: uppercase;
					text-align: center;
					color: white;
					font-family: Viga;
					letter-spacing: 1px;
					line-height: 24px;
				}
				.contact-form {
					padding: 20px;
					box-sizing: border-box;
					max-width: 600px;
					width: 100%;
					margin: auto;
				}
				.contact-formInput input,
				.contact-formInput textarea {
					max-width: 45%;
					width: 100%;
					margin: 2%; 
					height: 35px;
					line-height: 35px;
					padding-left: 20px;
					box-sizing: border-box;
					border-radius: 3px;
					border: none;
					box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.05);
					font-size: 13px;
				}
				.contact-formInput input:focus {
					box-shadow: 2px 3px 30px rgba(228, 55, 118, 0.1);
				}
				.contact-formInput textarea {
					height: auto;
					width: 94%;
					max-width: 100%;
				}
				.contact-formInput p {
					text-align: left;
					font-size: 14px;
					padding-left: 10px;
					padding-left: 20px;
					color: white;
				}
				.btnRosa {
					background: #00bcd4;
					text-align: center;
					line-height: 30px;
					color: white;
					padding: 5px 40px;
					margin-top: 20px;
					border: none;
					font-size: 17px;
					border-radius: 4px;
					text-transform: uppercase;
					font-family: Viga;
					letter-spacing: 1px;
				}
				.closeForm {
					position: absolute;
					top: 0;
					bottom: 0;
					margin: auto;
					left: -30px;
					height: 40px;
					width: 40px;
					background: white;
					padding: 10px;
					cursor: pointer;    
					border-radius: 20px 0 0 20px;
					box-shadow: 2px 3px 30px rgba(228,55,118,0.1)
				}
				.closeForm:before {
					content: "";
					position: absolute;
					top: -4px;
					background: #fffdfe;
					width: 17px;
					height: 110%;
					right: -7px;
				}

				.closeForm img {
					width: 70%;
					margin-top: 8px;
				} 

				.gracias {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					width: 96%;
					height: 100%;
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					opacity: 0;
					visibility: hidden;
					transition: .3s linear;
					background: white;
					margin: auto;
				}

				.gracias.active {
					opacity: 1;
					visibility: visible;
				}

				@media screen and (max-width: 767px){
					.Contact {
						margin-top: 0;
					}
				}

				@media screen and (max-width: 600px){
					.contact-title {
						font-size: 19px;
					}
					.contact-form {
						padding: 20px 0;
					}
				}
			`}</style>

		</div>
	}
}

export default Contact