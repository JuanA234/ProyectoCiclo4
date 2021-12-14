import React, { Fragment,Redirect, useState, useEffect } from "react";


import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import HomePage from "./components/home/HomePage";

import NavbarComponent from "./components/shared/navbar/NavbarComponent";
import NavbarComponentEstudiante from "./components/shared/navbar/NavbarComponentEstudiante";
import NavbarComponentLider from "./components/shared/navbar/NavbarComponentLider";

import Usuarios from "./components/usuarios/Usuarios";
import UsuariosHowLider from "./components/usuarios/UsuariosHowLider";
import Avances from "./components/avances/Avances";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectosHowLider from "./components/proyectos/ProyectosHowLider";
import ProyectosHowEstudiante from "./components/proyectos/ProyectosHowEstudiante";
import Inscripciones from "./components/inscripciones/Inscripciones";
import InscripcionesHowLider from "./components/inscripciones/InscripcionesHowLider";
import InscripcionesHowEstudiante from "./components/inscripciones/InscripcionesHowEstudiante";
import Forbiden from "./components/shared/forbiden/Forbiden";
import EditPerfil from "./components/editarPerfil/EditPerfil";


import { useAuth0 } from "@auth0/auth0-react";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_USERS_STUDENTS,VALID_USER,GET_USERS} from "./graphql/Queries.js";
import { CREATE_USERS,DELETE_USERS,UPDATE_USER } from "./graphql//Mutation.js";

import Validar from "./functions/Validar.js"


function App() {


  const [rolAutenti, setRolAutenti] = useState("");
  const {user,isAuthenticated}= useAuth0();
  {isAuthenticated ? localStorage.setItem("correo",user.email): console.log("") };


  //La funciona Validar está en un js aparte
  let rolUsuario =Validar();


  return (
   
      <Router>

       {rolUsuario=="Administrador" ? <NavbarComponent /> :rolUsuario=="Lider" ?  <NavbarComponentLider />:<NavbarComponentEstudiante /> }

        <Switch>
          <Route% path="/" exact>
          <HomePage />  
          </Route>
        </Switch>

        <Switch>
          <Route path="/usuarios" exact>
          <br />
         <Usuarios/>
            <br />
          </Route>
        </Switch>

        <Switch>
          <Route path="/usuariosLider" exact>
          <br />
         <UsuariosHowLider/>
            <br />
          </Route>
        </Switch>

        <Switch>
          <Route path="/editPerfil" exact>
          <br />
          <EditPerfil/>
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
          <Route path="/proyectosLider" exact>
            <br />
            <ProyectosHowLider />
            <br />
          </Route>
        </Switch>

        <Switch>
          <Route path="/proyectosEstudiante" exact>
            <br />
            <ProyectosHowEstudiante />
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
          <Route path="/inscripcionesEstudiante" exact>
          <br />
            <InscripcionesHowEstudiante/>
            <br />
          </Route>
        </Switch>

        <Switch>
          <Route path="/inscripcionesLider" exact>
          <br />
            <InscripcionesHowLider/>
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
