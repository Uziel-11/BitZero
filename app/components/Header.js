import React from "react";
import logo from "../assets/img/img.png"

class Header extends React.Component {

    render() {
        return(
            <nav className="navbar navbar-expand-xxl navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo Bitzero"
                             className="d-inline-block align-top" width="155" height="55" style={{marginLeft:"10%"}}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{marginRight:"7%"}}>
                        <ul className="navbar-nav">
                            <li className="nav-item"  >
                                <a className="nav-link active" aria-current="page" href="/" style={{marginLeft:"15px"}}>INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Servicios" style={{marginLeft:"15px"}}>SERVICIOS</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href="#"style={{marginLeft:"15px"}}>CASOS DE EXITO</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link " href="/Nosotros"style={{marginLeft:"15px"}}>NOSOTROS</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link disabled"style={{marginLeft:"15px"}}>CLIENTES</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link disabled"style={{marginLeft:"15px"}}>CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;