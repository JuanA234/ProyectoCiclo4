import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import { Button} from "react-bootstrap";



function NavbarComponent(){

const { loginWithRedirect } = useAuth0();
const { logout } = useAuth0();
const {user,isAuthenticated}= useAuth0();

return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="">Plataforma de Ventas</a>
    

    <div class="collapse navbar-collapse" id="navbarNavDropdown">

      <ul class="navbar-nav">


        <li class="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>

        <li class="nav-item">
          <Link to="/proyectos" className="nav-link active" aria-current="page" >Gestión Proyectos</Link>
        </li>

        <li class="nav-item">
        <Link to="/usuarios" className="nav-link active" aria-current="page" >Gestión Usuarios</Link>
        </li>

        <li class="nav-item">
          <Link to="/inscripciones" className="nav-link active" aria-current="page" >Gestión inscripciones</Link>
        </li>

        <li class="nav-item">
          <Link to="/avances" className="nav-link active" aria-current="page" >Gestión Avances</Link>
        </li>
      </ul>
    </div>

    <li class="nav-item">
          <Button className="btn btn-primary" onClick={() => loginWithRedirect()}>Login</Button>{" "}
          <Button className="btn btn-danger"  onClick={() => logout({ returnTo: window.location.origin })}>LogOut</Button>{" "}

          <Button className="btn btn-secondary" > {isAuthenticated ? user.name : "User"} </Button>
    </li>      
  </div>
</nav>
) 
};


export default NavbarComponent;