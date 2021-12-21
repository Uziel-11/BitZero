import React from "react";


class FormularioContac extends React.Component{
    render() {
        return (

            <section id="login" className="container" style={{marginLeft:"56%",width:"40%"}}>
                <form className="formulario row justify-content-center"  style={{background:"#A50000"}}>
                    <div className="text-white" style={{marginTop:"40px"}}>
                        <h4 className="text-center ">Envianos un mensaje</h4>
                    </div>
                    <div className="col-md-6 text-white">
                        <label htmlFor="inputEmail4" className="form-label" style={{marginTop:"40px"}}>Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6 text-white">
                        <label htmlFor="inputPassword4" className="form-label" style={{marginTop:"40px"}}>Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-md-6 text-white">
                        <label htmlFor="inputPassword4" className="form-label" style={{marginTop:"40px"}}>Telefono</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-md-6 text-white">
                        <label htmlFor="inputPassword4" className="form-label" style={{marginTop:"40px"}}>Correo</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="mb-3 text-white">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{marginTop:"40px"}}>Motivo o consulta</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        <p style={{marginTop:"40px"}}>¿Cuando es el mejor momento para llamarte?</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Por la mañana
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Por la tarde
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Por la noche
                            </label>
                        </div>

                        <div className="solicitar d-grid gap-2" style={{marginTop:"50px"}}>
                            <button className="btn btn-white" type="button">Solicitar</button>
                        </div>

                    </div>
                </form>
            </section>
        )
    }
}

export default FormularioContac;