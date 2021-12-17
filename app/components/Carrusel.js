import React from "react";
import Car from '/app/assets/img/sliderTwo.png'
import CarTwo from '/app/assets/img/sliderOne.png'
import '/app/assets/stylesheets/Home.css'





class Carrusel extends React.Component{
    render() {
        return(
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active " data-bs-interval="4000">
                        <img src={Car} className="d-block w-100" alt="Desarrollo de software"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className="text-black">BIENVENIDO A <span className="BIT">BIT</span>ZERO TECHNOLOGIES</h4>
                            <h5 className="text-blackT">Desarrollo de <span className="text-span">sistemas a su medida</span></h5>
                            <p className="text-black ">Somos una consultoria en soluciones tecnologicas y desarrollo
                                de software a la medida siguiendo estandares de calidad.<br/>
                                Nuestras aplicaciones son robustas y faciles de usar, trabajamos
                                con principales herramientas tecnologicas de acuerdo a las necesidades de cada proyecto</p>
                            <div className="d-grid gap-0 col-4 mx-auto" >
                            <button type="button" className="btn btn-lg text-white">Comenzar</button>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={CarTwo} className="d-block w-100" alt="Desarrollo de software"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className="text-black"><span className="BIT">BIT</span>ZERO TECHNOLOGIES</h4>
                            <h5 className="text-blackT">Conoce nuestros diferentes <span className="text-span">Servicios</span></h5>
                            <p className="text-black "><span className="BIT">BIT</span>ZERO es una compañia que te ofrece una variedad de servicios en cuanto al desarollo de software, como los son: <br/>
                            Diseño de paginas web,Marketing digital, Ecommerce, cursos y talleres y mas.
                            </p>
                            <div className="d-grid gap-0 col-4 mx-auto" >
                                <button type="button" className="btn btn-lg text-white">Servicios</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

export default Carrusel;