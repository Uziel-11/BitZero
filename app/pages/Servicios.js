import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import web from "../assets/img/Web.png";
import style from "../assets/stylesheets/Servicios.css"

class Servicios extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                <div className="card" id="card">
                    <img src={web} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Servicios;