import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Slider from "react-slick";
import '/app/assets/stylesheets/CasosExito.css'

import Restaurant from "../assets/img/Restaurant.png"
import puntoVenta from "../assets/img/puntoVenta.png"
import ruta from "../assets/img/ruta.png"
import eventos from "../assets/img/eventos-1024x1004.png"

export default class CasosExito extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <>
            <Navbar/>
                <div className="CasosExito">
                    <h7 className=""><span className="BIT">Nuestros</span> casos de exito</h7>
                </div>
            <div className="container-card">
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <style>{cssstyle}</style>

                <Slider {...settings}>
                    <div>
                        <div className="card">
                            <img className="card-img" src={Restaurant} alt=""/>
                            <p className="textCard text-center text-white" style={{marginTop:"-9%",position:"relative",background:"black"}}>Software consultor de Centros de Consumo de Alimentos y Bebidas de Tuxtla</p>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <img className="card-img" src={puntoVenta} alt=""/>
                            <p className="textCard text-center text-white" style={{marginTop:"8%",position:"relative",background:"black"}}>Punto de venta para la administracion de comercios, como abarrotes,farmacias,etc.</p>
                        </div>
                    </div>

                    <div>
                        <div className="card">
                            <img className="card-img" src={ruta} alt=""/>
                            <p className="textCard text-center text-white" style={{marginTop:"9%",position:"relative",background:"black"}}>Punto de venta para la administracion de comercios, como abarrotes,farmacias,etc.</p>
                        </div>
                    </div>

                    <div>
                        <div className="card">
                            <img className="card-img" src={eventos} alt="" width="-190px" height="300px"/>
                            <p className="textCard text-center text-white"  style={{marginTop:"8%",position:"relative",background:"black"}}>Software consultor para la organizacion de eventos en la Península de Yucatán: Bodas, Eventos Corporativos y Eventos Sociales.</p>
                        </div>
                    </div>
                </Slider>
            </div>
                <Footer/>
            </>
        );
    }
}

const cssstyle = `
.container-card {
  margin: -20px auto;
  padding: 40px 40px 40px 40px;
  position: relative;
  top: 10px;  
  width: 90%;
  background: #C6C6C6; 
  border-radius: 20px
  
}
h3 {
    
    color: #fff;
    font-size: 36px;
    line-height: 450px;    
    padding: 2%;
    position: relative;
    text-align: center;
}
.card{
    margin: 10px;
    border-radius: 2em;
    background: #A50000;
}
.textCard{
border-radius: 20px
}



.slick-dots li.slick-active button:before, .slick-dots li button:before {
    color: white;
    opacity: 1;
    font-size: 16px;
    
}
.slick-dots li.slick-active button {
    border: 2px solid black;
    border-radius: 100%;    
}
.slick-dots li.slick-active button:before {
    color: transparent;
}
}
`