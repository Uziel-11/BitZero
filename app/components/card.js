import React from "react";
import CarOne from "../assets/img/cardOne.png";
import CarTwo from "../assets/img/cardTwo.png"
import CarTres from "../assets/img/cardThree.png"


class card extends React.Component{
    render() {
        return(
                <div className="row row-cols-1 row-cols-md-3 g-4" style={{width:"90%",height:"90%",marginTop:"100px",marginLeft:"5%",padding:"2%",background:"#C6C6C6"}}>
                    <div className="col">
                        <div className="card" style={{width:"90%", height:"82%",marginTop:"6%"}}>
                            <div className="card-body">
                                <h5 className="card-title">Nos preocupamos por una interfaz amigable</h5>
                                <p className="card-text " >
                                    Una aplicación exitosa no debería ser dificil de usar.<br/>
                                    Por ello dedicamos tiempo y esfuerzo en hacer sistemas que sean fáciles de usar y den una buena experiencia a los usuarios.
                                </p>
                                <img src={CarOne} className="d-block w-50" alt="Desarrollo de software" style={{marginLeft:"50%",marginTop:"-9%"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card"  style={{width:"90%", height:"82%",marginTop:"6%"}}>
                            <div className="card-body">
                                <h5 className="card-title">Desarrollo multidisciplinario</h5>
                                <p className="card-text">
                                    Detrás de una gran aplicación hay una combinación de habilidades de programación y diseño gráfico. Nuestro equipo trabaja gracias
                                    a una mezcla de distintos talentos, eso nos permite entender y resolver los problemas desde distintos enfoques.
                                </p>
                                <img src={CarTwo} className="d-block w-50" alt="Desarrollo de software" style={{marginLeft:"50%",marginTop:"-3%"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card"  style={{width:"90%", height:"82%",marginTop:"6%"}}>
                            <div className="card-body">
                                <h5 className="card-title">Desarrollo en plataformas robustas</h5>
                                <p className="card-text">
                                    Nosotros te orientaremos para elegir la infraestructura y lenguaje de programación adecuado de acuerdo al tamaño, presupuesto
                                    y objetivos de tu proyecto.
                                </p>
                                <img src={CarTres} className="d-block w-75" alt="Desarrollo de software" style={{marginLeft:"30%",marginTop:"-9%"}}/>
                            </div>
                        </div>
                    </div>
                </div>


        )
    }
}

export default card;