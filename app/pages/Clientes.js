import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";


class Clientes extends React.Component{
    render() {
        return(
            <>
                <Navbar/>
                <div>
                    <h1>Pagina clientes</h1>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Clientes;