import TitleBlack from './TitleBlack'

class Prices extends React.Component {

	render () {
		return 	<div className="prices">
					<div className="container">

						<TitleBlack title="¿QUÉ PLAN PREFIERES PARA TUS CLIENTES?" subtitle="Empieza a ganar más clientes" subtitleStrong="ahora"></TitleBlack>

						<div className="price-table">
							<h3>Diseño web</h3>
							<ul className="df">
								<li>
									<h4 className="price-title">
										Proyecto Básico
									</h4>
									<p className="price-caracteristicas">
										- De 1 a 5 tabs de página <br/> <span>(home, about, services, clientes, contact)</span>
									</p>
									<p className="price-caracteristicas">
										- Contenido digital <br/> <span>(fotos - tipografías - video)</span>
									</p>
									<p className="price-caracteristicas">
										- No incluye hosting
									</p>
									<p className="price-number">
										S/. 1,000.00
									</p>
								</li>
								<li>
									<h4 className="price-title">
										Proyecto PRO
									</h4>
									<p className="price-caracteristicas">
										- De 5 a 10 tabs de página <br/> 
										<span>(home, about, services, clientes, <br/> contact ... )</span>
									</p>
									<p className="price-caracteristicas">
										- Contenido digital <br/> <span>(fotos - tipografías - video)</span>
									</p>
									<p className="price-caracteristicas">
										- Incluye hosting
									</p>
									<p className="price-number">
										S/. 2,000.00
									</p>
								</li>
								<li>
									<h4 className="price-title">
										Proyecto BUSINESS
									</h4>
									<p className="price-caracteristicas">
										- De 10 a más tabs de página <br/> 
										<span>(home, about, services, clientes, <br/> contact ... )</span>
									</p>
									<p className="price-caracteristicas">
										- Contenido digital <br/> <span>(fotos - tipografías - video)</span>
									</p>
									<p className="price-caracteristicas">
										- Incluye hosting
									</p>

									<p className="price-number">
										S/. 4,000.00
									</p>
								</li>
							</ul>
						</div>

						<div className="price-table">
							<h3>Fotografía y video aéreo</h3>
							<ul className="df even">
								<li>
									<h4 className="price-title">
										Proyecto Básico
									</h4>
									<p className="price-caracteristicas">
										- Video editado de 30 segundos
									</p>
									<p className="price-caracteristicas">
										- 30 minutos de grabación
									</p>
									<p className="price-number">
										S/. 300.00
									</p>
								</li>
								<li>
									<h4 className="price-title">
										Proyecto PRO
									</h4>
									<p className="price-caracteristicas">
										- Video editado de 60 segundos
									</p>
									<p className="price-caracteristicas">
										- 60 minutos de grabación
									</p>
									<p className="price-number">
										S/. 600.00
									</p>
								</li>
								<li>
									<h4 className="price-title">
										Proyecto BUSINESS
									</h4>
									<p className="price-caracteristicas">
										- Video editado de 120 segundos
									</p>
									<p className="price-caracteristicas">
										- 120 minutos de grabación
									</p>
									<p className="price-number">
										S/. 1,000.00
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
							position: relative;
							text-align: center;
							min-width: 300px;
							color: white;
							padding: 60px 0 10px 0;
							font-family: Montserrat;
						}

						.prices-container {
							width: 90%;
							margin: auto;
						}

						.prices-title {
							font-family: Viga;
							color: black;
						}

						.prices-title h3 {
							font-size: 22px;
						}

						.prices-title p {
							color: gray;
							font-size: 17px;
							margin-bottom: 50px;
							margin-top: 5px;
							font-family: Montserrat;
							letter-spacing: -0.3px;
						}

						.prices-title strong {
							color: black;
							font-weight: bold;
						}

						.price-table {
							margin: 30px 0 50px 0;
							font-family: Poppins;
						}

						.price-table h3 {
							font-size: 17px;
							margin-bottom: 20px;
							color: gray;
						}

						.price-table ul {
							justify-content: space-between;
							align-items: stretch;
						}

						.price-table li {
							box-shadow: 0 10px 50px -25px rgba(0,0,0,.6);
							border-radius: 4px;
							padding: 40px 20px;
							width: 31%;
							letter-spacing: -0.3px;
							font-size: 15px;
							background: #18d4e7;
							box-sizing: border-box;
						}

						.price-table li:nth-child(odd) {
							background: white;
						}

						.price-table li:nth-child(odd) p {
							color: gray;
							text-shadow: none;
						}

						.price-table li:nth-child(odd) h4 {
							color: gray;
							text-shadow: none;
						}

						.price-table .even li:nth-child(even) {
							background: white;
						}

						.price-table .even li:nth-child(odd) {
							background: #18d4e7;
							color: white;
						}

						.price-table .even li:nth-child(odd) h4{
							color: white;
							text-shadow: 1px 1px 7px rgba(0,0,0,0.3);
						}

						.price-table .even li:nth-child(odd) p{
							color: white;
							text-shadow: 1px 1px 7px rgba(0,0,0,0.3);
						}

						.price-table .even li:nth-child(even) p {
							color: gray;
							text-shadow: none;
						}

						.price-table .even li:nth-child(even) h4 {
							color: gray;
							text-shadow: none;
						}

						.price-title {
							margin-bottom: 20px;
							font-family: Viga;
							font-size: 18px;
							text-shadow: 1px 1px 7px rgba(0,0,0,0.31);
							text-transform: uppercase;
						}

						.price-number {
							margin-top: 20px;
							font-size: 18px;
							text-shadow: 1px 1px 7px rgba(0,0,0,0.31);
						}

						.price-caracteristicas {
							margin-bottom: 10px;
							text-shadow: 1px 1px 7px rgba(0,0,0,0.3);
							font-size: 14px;
						}

						.price-caracteristicas span {
							font-size: 12px;
							height: 25px;
							display: block;
							margin-top: 3px;
						}

						.price-caracteristicas:last-child {
							margin-bottom: 0px;
						}

						@media screen and (max-width: 767px){
							.price-table ul {
								flex-direction: column;
							}
							.price-table li {
								width: 80%;
								margin: 10px auto;
							}
						}

						@media screen and (max-width: 600px){
							.price-table li {
								width: 90%;
							}
						}
					`}</style>
				</div>
	}
}

export default Prices;