import React, { Fragment,Redirect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import HomePage from "./components/home/HomePage";

import NavbarComponent from "./components/shared/navbar/NavbarComponent";

import Usuarios from "./components/usuarios/Usuarios";
import UsuariosHowLider from "./components/usuarios/UsuariosHowLider";
import Avances from "./components/avances/Avances";
import Proyectos from "./components/proyectos/Proyectos";
import Inscripciones from "./components/inscripciones/Inscripciones";
import Forbiden from "./components/shared/forbiden/Forbiden";

import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const {user,isAuthenticated}= useAuth0();


  return (
   
      <Router>
        <NavbarComponent />

        <Switch>
          <Route path="/" exact>
          <HomePage />  
          </Route>
        </Switch>
        <Switch>
          <Route path="/usuarios" exact>
          <br />
           <UsuariosHowLider/>
            <br />
          </Route>
        </Switch>

        <Switch>
          <Route path="/proyectos" exact>
            <br />
            <Proyectos />
            <br />
          </Route>
        </Switch>

        <Switch>
          <Route path="/inscripciones" exact>
          <br />
            <Inscripciones/>
            <br />
          </Route>
        </Switch>

        <Switch>
          <Route path="/avances" exact>
            <br />
            <Avances />
            <br />
          </Route>
        </Switch>

        <Switch>
          <Route path="/forbiden" exact>
            <br />
            <Forbiden/>
            <br />
          </Route>
        </Switch>

      </Router>
  
  );

  //{ isAuthenticated ? <Usuarios/>: <Redirect to ="/forbiden"/> }
}

export default App;
