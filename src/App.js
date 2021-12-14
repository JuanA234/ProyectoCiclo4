import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';


import HomePage from "./components/home/HomePage";

import NavbarComponent from "./components/shared/navbar/NavbarComponent";

import Usuarios from "./components/usuarios/Usuarios";
import Avances from "./components/avances/Avances";
import Proyectos from "components/proyectos/Proyectos";
import Inscripciones from "./components/inscripciones/Inscripciones";

const httpLink = createHttpLink({
  uri:"https://servidor-graphql.herokuapp.com/graphql"
})

const client = new ApolloClient({
  uri: httpLink,
  cache: new InMemoryCache()
})
function App() {

  return (
    <ApolloProvider client  >
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
            <Usuarios />
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

      </Router>
    </ApolloProvider>
   
  
  );
}

export default App;
