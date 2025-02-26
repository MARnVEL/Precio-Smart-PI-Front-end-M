import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { type } from "../types/type";

import img from "../assets/img/verificar.png";

// Corregir los estilos y modificar las etiquetas "a" por los componentes NavLink
// que provee react-router-dom
export const NavBarCliente = () => {
  const { authDispatch } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between align-items-center">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <img
          className="mb-2 me-3 "
          src={img}
          alt="Logo de la Aplicación Precios Smart"
          width={50}
          height={50}
        />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Buscar Poductos
              </NavLink>
            </li>

            {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" to='#'>|</a>
              </li> */}

            <li className="nav-item">
              <NavLink className="nav-link active" to="/list-prod">
                Elegir lista de Productos
              </NavLink>
            </li>
          </ul>

          <li className="nav-item ms-auto">
            <AccountCircleTwoToneIcon fontSize="large" color="primary" className="mx-5"/>

            <ExitToAppTwoToneIcon
              type="button"
              fontSize="large"
              color="error"
              onClick={() => authDispatch({ type: type.logout })}
            />
            {/* <button 
                onClick={()=>authDispatch({type: type.logout})} 
                className="btn btn-outline-light btn-sm bg-danger text-white"
              >
                Cerrar Sesión
              </button> */}
          </li>
        </div>
      </div>
    </nav>
  );
};
