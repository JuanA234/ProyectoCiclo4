import React from 'react';
import { Link } from 'react-router-dom';



function NavbarComponent(){
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
  </div>
</nav>
) 
};


export default NavbarComponent;