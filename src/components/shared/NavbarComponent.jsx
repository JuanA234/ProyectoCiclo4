import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import { NavLink } from 'react-router-dom';



function NavbarComponent() {
  const Logout = () => {
    const { setToken } = useAuth();
    const deleteToken = () => {
      setToken(null);
    };
    return (

        <button type='button' onClick={() => deleteToken()}>
          <NavLink to='/auth/login'>
            <div className='flex flex-col'>
              <span className="nav-link active" aria-current="page">Cerrar Sesión</span>
            </div>
          </NavLink>
        </button>
    );
  };
  return (
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
            
            <li className="nav-item">
              <Logout />
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
};


export default NavbarComponent;