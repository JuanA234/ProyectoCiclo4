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
import  EditarUsuario  from "components/usuarios/EditarUsuario";

// const httpLink = createHttpLink({
//   uri:"http://localhost:4000/graphql"
// })

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

function App() {

  return (
    <ApolloProvider client={client}  >
      <Router>
        <NavbarComponent />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>

        <Switch>
          <Route path={['/usuarios', '/usuarios/editar/:_id']}>
            <Switch>
              <Route path="/usuarios" exact>
                <br />
                <Usuarios />
                <br />
              </Route>
              <Route path='/usuarios/editar/:_id' exact>
                <br />
                <EditarUsuario />
                <br />
              </Route>
        </Switch>
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
          <Inscripciones />
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

    </Router>
    </ApolloProvider >
   
  
  );
}

export default App;
