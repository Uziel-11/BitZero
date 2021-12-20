import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import web from "../assets/img/Web.png";
import app from "../assets/img/app.png";
import curso from "../assets/img/curso.png";
import ecomm from "../assets/img/Ecomm.png";
import marketing from "../assets/img/marketing.png";
import medida from "../assets/img/medida.png";
import style from "../assets/stylesheets/Servicios.css";

class Servicios extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                <h5 className="text-md-center"> En nuestros <span> servicios </span> elegimos con medida cada parte de tu sistema </h5>
                <br/>
                {/*pequeño menu de informacion*/}
                <div className="card text-center mx-auto" id="card-navigation">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="true" href="#">Interfaz de Usuario (FrontEnd)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tecnologia a lado del Servidor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Tecnologia Movil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Base de Datos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Certificaciones</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">INTERFAZ DE USUARIO (FRONTED)</h5>
                        <p className="card-text">
                            Generamos interfaces fluidas, fáciles de usar y optimizadas para pantallas
                            móviles y de escritorio. Además, somos expertos en experiencia de usuario (UX).
                            Utilizamos tecnologías como: HTML5, Javascript, CSS y trabajamos con los principales
                            "Frameworks" como:  VueJs, React, Bootstrap por mencionar solo las principales.
                        </p>
                    </div>
                </div>

                {/*Card principal de Servicios*/}
                <br/>
                <h5 className="text-md-center"> <span> Nuestros </span> servicios </h5>
                <br/>
                <div className="card-group">
                    <div className="col">
                        <div className="card h-100 text-white" id="card">
                            <img src={web} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Diseeño para pagina web</h5>
                                    <p className="card-text">
                                        Haz que tu idea, marca o producto llegue a más clientes potenciales.
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-white" id="card">
                            <img src={ecomm} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">E- COMMERCE</h5>
                                    <p className="card-text">
                                        Lleva tus productos a mas clientes.
                                        Diseñamos tiendas online con
                                        Woocomerce o Prestashop
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-white" id="card">
                            <img src={marketing} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">MARKETING DIGITAL</h5>
                                    <p className="card-text">
                                        Realizamos campañas en Google,
                                        Youtube, Facebook e instagram para
                                        que tus productos lleguen a mas
                                        clientes potenciales
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="card-group">
                    <div className="col">
                        <div className="card h-100 text-white" id="card">
                            <img src={medida} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Desarrollo a la medida</h5>
                                <p className="card-text">
                                    Desarrollo de Software a la medida.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-white" id="card">
                            <img src={curso} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos y talleres</h5>
                                <p className="card-text">
                                    Asesorias, cursos y talleres de
                                    Marketing Digital para tu equipo de
                                    trabajo
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-white" id="card">
                            <img src={app} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Desarrollo de APP</h5>
                                <p className="card-text">
                                    Desarrollomas Aplicaciones moviles
                                    a la medida
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Servicios;