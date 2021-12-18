import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';


import HomePage from "./components/home/HomePage";

import NavbarComponent from "./components/shared/NavbarComponent";

import Usuarios from "./components/usuarios/Usuarios";
import Avances from "./components/avances/Avances";
import Proyectos from "components/proyectos/Proyectos";
import Inscripciones from "./components/inscripciones/Inscripciones";
import EditarUsuario from "components/usuarios/EditarUsuario";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Register from "components/auth/Register";
import Login from "components/auth/Login";
import { AuthContext } from "context/AuthContext";
import { useState } from "react";
//    
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

function App() {

  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };
  return (
    <div className="App">

      
    <ApolloProvider client={client}  >
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken}}>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path={['/usuarios', '/usuarios/editar/:_id','/proyectos', '/inscripciones']}>
            <PrivateLayout>
            <Switch>
              <Route path='/usuarios' exact>
                <Usuarios />
              </Route>
              <Route path='/usuarios/editar/:_id' exact>
                <EditarUsuario />
              </Route>
              <Route path='/proyectos' exact>
                <Proyectos/>
              </Route>
              <Route path='/inscripciones' exact>
                <Inscripciones/>
              </Route>
            </Switch>   
            </PrivateLayout>
          </Route>
          <Route path={['/login', '/register']}>
            <AuthLayout>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/register'>
                <Register/>
              </Route>
            </Switch>   
            </AuthLayout>
          </Route>
          <Route path={['/']}>
            <Switch>
              <Route path='/'>
                <HomePage/>
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
      </AuthContext.Provider>
    </ApolloProvider >
    </div>


  );
}

export default App;
