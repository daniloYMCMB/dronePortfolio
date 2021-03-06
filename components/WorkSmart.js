import Link from 'next/link'

class WorkSmart extends React.Component {

	render () {
		return 	<div className="WorkSmart" id="WorkSmart">

					<div className="df">
						<div className="WorkSmart-free-bg">
							<div className="WorkSmart-free">
								<h2>CONOCER EL NEGOCIO <br/>
									ES LO MAS IMPORTANTE</h2>
								<p>
									¿Por qué elegimos este trabajo? Porque nos encanta viajar y gracias al diseño web y de medios digitales podemos trabajar de forma remota. Todo comenzó en 2017 durante el viaje de trabajo a Dinamarca. Nos dimos cuenta de que nuestra oficina puede ser cualquier lugar del mundo y establecimos nuestro negocio y comenzamos a viajar a Europa cada año. Nuestro lema es "Trabaja de forma inteligente, no dura", por lo que nos complace en cada proyecto. Nuestro trabajo es nuestra pasión.
								</p>	
	                            <Link href="/portafolio">
	                                <a className="btn-action">
										PROYECTOS RECIENTES
									</a>	
								</Link>
							</div>
						</div>

						<div className="WorkSmart-web">
						</div>
					</div>

					<style jsx>{`
						.WorkSmart {
							margin-top: 50px;
							margin-bottom: 60px;
							color: white;
						}

						.WorkSmart-web {
							background: url(https://144ontour.com/wp-content/uploads/2017/11/Work-smart-not-hard.jpg) center center no-repeat;
							background-size: cover;
							box-sizing: border-box;
							text-align: left;
							color: white;
							box-shadow: 0 40px 120px -20px rgba(0,0,0,0.6);
							width: 35%;
							height: 650px;
							margin-left: -30px;
							position: relative;
							z-index: 9;
						}

						.WorkSmart-free-bg {
							width: 40%;
							position: relative;
						}				

						.WorkSmart-free {
							background: linear-gradient(to right,rgba(0,165,194,1) 0%,rgba(0,196,214,1) 100%);
							position: relative;
							box-shadow: 0 40px 120px -20px rgba(0,0,0,0.6);
							padding: 120px 130px;
							text-align: left;
							position: absolute;
							left: -60px;
							box-sizing: border-box;
							top: -280px;
						}

						.WorkSmart-free h2{
							font-size: 22px;
							margin-bottom: 10px;
							position: relative;
							z-index: 1;
							font-family: Viga;
						}

						.WorkSmart-free p {
							margin-bottom: 10px;
							position: relative;
							line-height: 1.2;
							z-index: 1;
						}

						.WorkSmart-free a {
							margin: auto;
							display: inline-block;
							padding: 13px 15px;
							background: white;
							color: #00BCD4;
							box-sizing: border-box;
							margin-top: 10px;
							font-size: 16px;
							border-radius: 4px;
							font-family: Viga;
						}

						@media screen and (max-width: 1180px) {
							
							.WorkSmart-free {
								padding: 80px 100px 80px 80px;
							}
							.WorkSmart-web {
								width: 45%;
							}
						}

						@media screen and (max-width: 900px) {
							.WorkSmart-free-bg {
								width: 45%;
								margin-left: 6%;
							}
							.WorkSmart-free {
								padding: 60px 70px 60px 40px;
							}
						}

						@media screen and (max-width: 767px) {
							.WorkSmart {
								margin: 20px auto 0 auto;
							}
							.WorkSmart .df {
								flex-direction: column;
							}

							.WorkSmart-web {
								margin: 0;
								width: 80%;
								background-position: top center ;
								height: 440px;
								margin-bottom: 20px;
							}
							.WorkSmart-web h2,
							.WorkSmart-web p,
							.WorkSmart-web a {
								margin-left: 0px;
								max-width: 100%;
							}

							.WorkSmart-free-bg {
								width: 90%;
								margin: 0;
							}
							.WorkSmart-free {
								position: relative;
								top: 30px;
								width: 100%;
								left: 0;
								right: 0;
								margin: auto;
								padding: 70px 50px;
							}
						}

						@media screen and (max-width: 530px) {
							.WorkSmart {
								margin: 0;
							}
							.WorkSmart .df {
								flex-direction: column;
							}

							.WorkSmart-free {
								padding: 50px 25px;
							}

							.WorkSmart-web {
								height: 300px;
							}
							.WorkSmart-web a {
								font-size: 14px;
							}
							.WorkSmart-free a {
								font-size: 13px;
							}
						}
					`}</style>
				</div>
	}
}

export default WorkSmart