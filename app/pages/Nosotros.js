import React from "react";
import image from "../assets/img/nosotros.png"
import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "../assets/stylesheets/Servicios.css"


class Nosotros extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                <h5 className="text-md-center" id="h5"> NOSOTROS </h5>
                <div className="row g-0 position-relative">
                    <div className="col-md-6 mb-md-0 p-md-4">
                        <img src={image} className="w-100" alt="..."/>
                    </div>
                    <div className="col-md-6 p-4 ps-md-0">
                        <h5 className="mt-0 text-md-center">BIENVENIDO A  <span>BIT</span>ZERO TECHNOLOGIES</h5>
                        <br/>
                        <p>Bitzero es una empresa cuyo objetivo es incrementar la productividad y
                            competitividad de las micro y pequeñas empresas a través del desarrollo de herramientas de TI.
                        </p>
                        <br/>
                        <h5 >MISION</h5>
                        <p>Somos una empresa 100% chiapaneca que facilita, mejora y optimiza la gestión
                            y los procesos de negocio de las empresas con soluciones y servicios informáticos
                            de calidad. Proporcionando tecnologías innovadoras a medida de las necesidades empresariales,
                            con el objetivo de incrementar su competitividad y productividad.
                        </p>
                        <br/>
                        <h5 >VISION</h5>
                        <p>Ser la empresa lider en el sur-sureste en implementar soluciones integrales
                            que permitan a la micro y pequeña empresa alcanzar sus objetivos corporativos,
                            a través de soluciones innovadoras que permitan a nuestros clientes incrementar su
                            productividad y disminuir sus costos.
                        </p>
                        <br/>
                        <h5 >VALORES</h5>
                        <p>Another instance of placeholder content for this other custom component. It is intended to mimic
                            what some real-world content would look like, and we're using it here to give the component a
                            bit of body and size.
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Nosotros;