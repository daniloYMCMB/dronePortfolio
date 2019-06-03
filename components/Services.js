class Services extends React.Component {

	render () {
		return 	<div className="prices">
					<div className="container">

						<div className="prices-title">
							<h3>¿Qué plan prefieres para tus clientes?</h3>
							<p>Empieza a ganar más clientes <br/><strong>ahora</strong></p>
						</div>

						<div className="price-table">
							<ul className="df">
								<li>
									<h4 className="price-title">
										Proyecto Básico
									</h4>
									<p className="price-number">
										$300.00
									</p>
									<p className="price-caracteristicas">
										-30 minutos de grabación
									</p>
									<p className="price-caracteristicas">
										-video de 30 segundos
									</p>
								</li>
								<li>
									<h4 className="price-title">
										Proyecto PRO
									</h4>
									<p className="price-number">
										$600.00
									</p>
									<p className="price-caracteristicas">
										-60 minutos de grabación
									</p>
									<p className="price-caracteristicas">
										-video de 60 segundos
									</p>
								</li>
								<li>
									<h4 className="price-title">
										Proyecto BUSINESS
									</h4>
									<p className="price-number">
										$900.00
									</p>
									<p className="price-caracteristicas">
										-120 minutos de grabación
									</p>
									<p className="price-caracteristicas">
										-video de 120 segundos
									</p>
								</li>
							</ul>
						</div>
					</div>

					<style jsx>{`
						.prices {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							position: relative;
							text-align: center;
							min-width: 300px;
							color: #041082;
							background: #f9f8f9;
						}

						.prices-container {
							width: 90%;
							margin: auto;
						}

						.prices-title {
							color: red;
						}

						.prices-title h3 {
							color: #041082;
							font-size: 25px;
						}

						.prices-title p {
							color: gray;
							font-size: 18px;
							margin-bottom: 30px;
							margin-top: 5px;
						}

						.prices-title strong {
							color: #041082;
							font-size: 16px;
						}

						.price-table ul {
							justify-content: space-evenly;
						}

						.price-table li {
							border: 1px solid gray;
							border-radius: 4px;
							padding: 40px 20px;
							font-size: 20px;
						}

						.price-title {
							margin-bottom: 20px;
						}

						.price-number {
							margin-bottom: 20px;
						}

						.price-caracteristicas {
							margin-bottom: 10px;
						}

						.price-caracteristicas:last-child {
							margin-bottom: 0px;
						}

						@media screen and (max-width: 767px){
							
						}
					`}</style>
				</div>
	}
}

export default Services;