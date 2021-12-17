import React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/Servicios";

class App extends React.Component{
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path="/Nosotros" component={Nosotros}/>
                        <Route exact path="/Servicios" component={Servicios}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;