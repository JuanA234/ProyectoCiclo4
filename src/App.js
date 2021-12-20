import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import jwt_decode from 'jwt-decode';

import HomePage from "./components/home/HomePage";

import { setContext } from '@apollo/client/link/context';
import Usuarios from "./components/usuarios/Usuarios";
import Proyectos from "components/proyectos/Proyectos";
import Inscripciones from "./components/inscripciones/Inscripciones";
import EditarUsuario from "components/usuarios/EditarUsuario";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Register from "components/auth/Register";
import Login from "components/auth/Login";
import { AuthContext } from "context/AuthContext";
import PrivateComponent from "components/PrivateComponent";

import {UserContext} from "context/userContext"

const httpLink = createHttpLink({
  // uri: 'https://servidor-gql-mintic.herokuapp.com/graphql',
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
        foto: decoded.foto,
      });
    }
  }, [authToken]);


  return (
    <div className="App">
      <ApolloProvider client={client}  >
        <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
          <UserContext.Provider value={{ userData, setUserData }}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<PrivateLayout />}>
                  <Route path='' element={<HomePage />} />
                  <Route path='/usuarios' element={<Usuarios />} />
                  <Route
                    path='/usuarios/editar/:_id'
                    element={<EditarUsuario />}
                  />
                  <Route path='/proyectos' element={<Proyectos />} />
                  <Route path='/inscripciones' element={<Inscripciones />} />
                </Route>
                <Route path='/auth' element={<AuthLayout />}>
                  <Route path='register' element={<Register />} />
                  <Route path='login' element={<Login />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </AuthContext.Provider>
      </ApolloProvider >
    </div>


  );
}

export default App;
