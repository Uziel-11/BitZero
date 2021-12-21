import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import Twitter from "../assets/img/twiter.png"
import Mail from "../assets/img/mail.png"
import Facebook from "../assets/img/faceboook.png"
import Phone from "../assets/img/phone.png"
import "../assets/stylesheets/contacto.css"
import Form from "../components/FormularioContac"
import Mapa from "../components/Mapa"


class Contacto extends React.Component{
    render() {
        return(
            <>
                <Navbar/>
                <div className="CasosExito">
                <div className=""><span className="BIT">Contactanos</span></div>
            </div>
        <div className="row row-cols-1 row-cols-md-4 g-4" style={{heigth:"100%",margin:"10%", marginTop:"5%"}}>
            <div className="col">
                <div className="card" style={{background:"#A50000",width:"90%",height:"120%"}}>
                    <img src={Facebook} className="img-responsive" alt="..." style={{marginLeft:"45%",marginTop:"6%",width:"12%"}}/>
                    <div className="card-body">
                        <h5 className="card-title text-center text-white">Facebook</h5>
                        <div style={{marginTop:"60%"}}>
                            <p className="card-text text-center text-white">BITZERO</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{background:"#A50000",width:"90%",height:"120%"}}>
                    <img src={Twitter} className="img-responsive" alt="..." style={{marginLeft:"45%",marginTop:"6%",width:"12%"}}/>
                    <div className="card-body">
                        <h5 className="card-title text-center text-white">Twitter</h5>
                        <div style={{marginTop:"60%"}}>
                            <p className="card-text text-center text-white">Bitzero Technologies</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{background:"#A50000",width:"90%",height:"120%"}}>
                    <img src={Phone} className="img-responsive" alt="..." style={{marginLeft:"45%",marginTop:"6%",width:"12%"}}/>
                    <div className="card-body">
                        <h5 className="card-title text-center text-white">Numero de contacto</h5>
                        <div style={{marginTop:"60%"}}>
                            <p className="card-text text-center text-white">(961) 226 1559</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{background:"#A50000",width:"90%",height:"120%"}}>
                    <img src={Mail} className="img-responsive" alt="..." style={{marginLeft:"45%",marginTop:"6%",width:"10%"}}/>
                    <div className="card-body">
                        <h5 className="card-title text-center text-white">Correo electronico</h5>
                        <div style={{marginTop:"60%"}}>
                            <p className="card-text text-center text-white">contacto@bitzero.mx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <Form/>
                <Mapa/>
       <Footer/>
            </>
        )
    }
}

export default Contacto;