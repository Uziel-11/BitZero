import React from "react";
import logo from "../assets/img/img.png"
import Email from "../assets/img/Email.png"
import Mobile from "../assets/img/Mobile.png"
import Location from "../assets/img/Location.png"

class Footer extends React.Component{

    render() {
        return(

            <footer className=" text-center text-lg-start bg-light text-muted  text-white" style={{marginTop:"5%"}}>
                <br/>
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <img src={logo} alt=""
                                     className="d-inline-block align-text-top"
                                />
                                <p/>
                                <p>
                                    ¿Qué es Bitzero?
                                </p>
                                <p>
                                    Es una empresa especialista en el desarrollo de software a la medida y consultoría en solucions tecnológicas.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    MENU
                                </h6>
                                <p>
                                    INICIO
                                </p>
                                <p>
                                    SERVICIOS
                                </p>
                                <p>
                                    CASOS DE EXITO
                                </p>
                                <p>
                                    NOSOTROS
                                </p>
                                <p>
                                    CLIENTES
                                </p>
                                <p>
                                    CONTACTO
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    SERVICOS
                                </h6>
                                <p>
                                    Diseño de Pagina Web
                                </p>
                                <p>
                                    E-COMMERSE
                                </p>
                                <p>
                                    Desarrollo a la Medida
                                </p>
                                <p>
                                    Marketing Digital
                                </p>
                                <p>
                                    Cursos y Talleres
                                </p>
                                <p>
                                    Desarrollo de App
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">¿Tienes alguna pregunta?</h6>
                                <p> {<img src={Email} height="18" width="20"/>} E-Mail: contacto@bitzero.mx</p>
                                <br/>
                                <p> {<img src={Mobile} height="20" width="15"/>} Tel. Cel.: 961 225 5126</p>
                                <p> {<img src={Location} height="20" width="18"/>} Av. Platino No. 173, Fraccionamiento, Valle Dorado, Col. Rosario Poniente,Tuxtla Gutiérrez, Chiapas C.P. 29014</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;