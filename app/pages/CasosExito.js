import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Slider from "react-slick";
import '/app/assets/stylesheets/CasosExito.css'

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
                        <h3 > Caso 1</h3>
                        <p className="text-center" style={{marginTop:"-20%",position:"relative"}}>Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div >
                        <div className="card">
                        <h3> Caso 2</h3>
                        <p className="text-center" style={{marginTop:"-20%",position:"relative"}}>Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div>
                        <div className="card">
                            <h3> Caso 3</h3>
                            <p className="text-center" style={{marginTop:"-20%",position:"relative"}}>Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div>
                        <div className="card">
                            <h3> Caso 4</h3>
                            <p className="text-center" style={{marginTop:"-20%",position:"relative"}}>Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <h3> Caso 5</h3>
                            <p className="text-center" style={{marginTop:"-20%",position:"relative"}}>Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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


.slick-next:before, .slick-prev:before {
    color: #000;
}
`