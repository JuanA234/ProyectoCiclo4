import React from 'react';
import { Link } from 'react-router-dom';



function NavbarComponent(){
return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">

      <ul className="navbar-nav">


        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/proyectos" className="nav-link active" aria-current="page" >Gestión Proyectos</Link>
        </li>

        <li className="nav-item">
        <Link to="/usuarios" className="nav-link active" aria-current="page" >Gestión Usuarios</Link>
        </li>

        <li className="nav-item">
          <Link to="/inscripciones" className="nav-link active" aria-current="page" >Gestión inscripciones</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
) 
};


export default NavbarComponent;