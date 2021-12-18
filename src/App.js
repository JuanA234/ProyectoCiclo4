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

// const httpLink = createHttpLink({
//   uri:"https://servidor-graphql.herokuapp.com/graphql"
// })

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

function App() {

  return (
    <div className="App">

      
    <ApolloProvider client={client}  >
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path={['/usuarios', '/usuarios/editar/:_id','/proyectos', 'inscripciones']}>
            <PrivateLayout>
            <Switch>
              <Route path='/usuarios' exact>
                <Usuarios />
              </Route>
              <Route path='/usuarios/editar/:_id' exact>
                <EditarUsuario />
              </Route>
              <Route path='/proyectos'>
                <Proyectos/>
              </Route>
              <Route path='/inscripciones'>
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
    </ApolloProvider >
    </div>


  );
}

export default App;
