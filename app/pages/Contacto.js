import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";


class Contacto extends React.Component{
    render() {
        return(
            <>
                <Navbar/>
                <div>
                    <h1>Pagina de contactos</h1>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Contacto;