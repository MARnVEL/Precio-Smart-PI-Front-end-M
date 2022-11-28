import React, { useState, useEffect } from "react";

import "../assets/signin.css";
// import img from "../assets/img/verificar.png";
import { MisProductos } from "./MisProductos";

export const CargarProducto = () => {

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [state, setState] = useState({
    productName: "",
    marca: "",
    presentacion: "",
    precio: 0,
  });

  const { productName, marca, presentacion, precio } = state;
  // ************  FUNCIÓN QUE CAPTURA LOS VALORES DE LOS INPUTS ****************
  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  //*****************************  FUNCIÓN PARA ENVIAR LOS DATOS (BOTON) ******** */

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      // Se modifican las opciones del fetch, añadiendo los datos del formulario
      options.body = JSON.stringify({
        productName,
        marca,
        presentacion,
        precio,
      });

      const resp = await fetch("http://localhost:4000/producto", options);

      // Si el ok es false, significa que se produjo un error en la petición
      if (!resp.ok) alert("Revise las credenciales y vuelva a intentarlo");

      const data = await resp.json();
        console.log(data);
      
    })();
  };


  return (
    <>
      <div className="container p-4">
        <div className="row p-4">
          <div className="col-lg-4">
            <main className="form-signin w-100 m-auto">
              <form onSubmit={handleSubmit} className="form-control mt-5">
                {/* <img className="mb-4" src="" alt="" width={72} height={57} /> */}
                {/* <h1 className="h3 mb-3 fw-normal">Inicio de Sesión</h1> */}
                <label htmlFor="nombProd">
                  <strong>INGRESE LOS DATOS DE SUS PRODUCTOS</strong>
                </label>
                <div className="form-floating mb-2 mt-5">
                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="productName"
                      placeholder="Nombre"
                      value={productName}
                      onChange={handleInputChange}
                    />
                    {/* <label htmlFor="nombProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>

                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="marca"
                      placeholder="Marca"
                      value={marca}
                      onChange={handleInputChange}
                    />
                    {/* <label htmlFor="marcaProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>

                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="presentacion"
                      placeholder="Presentación"
                      value={presentacion}
                      onChange={handleInputChange}
                    />
                    {/* <label htmlFor="presenProd">Ingrese</label> */}
                  </div>

                  <div className="form mb-4">
                    <input
                      type="number"
                      className="form-control"
                      name="precio"
                      placeholder="Precio"
                      value={precio}
                      onChange={handleInputChange}
                    />
                    {/* <label htmlFor="precioProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>
                </div>

                <button
                  className="w-50 btn btn-md btn-primary mb-2"
                  type="submit"
                >
                  Agregar a la lista
                </button>
                <hr />
                <div className="mt-4"></div>

                {/* <NavLink className="nav-link active" aria-current="page" to='/todos'>Home</NavLink> */}
                <p className="mt-2 mb-3 text-muted">© IPF - 2022</p>
              </form>
            </main>
          </div>

          <div className="col-lg-8 p-1 mt-3">
            <div>
              <h3 className="mt-5">
                <strong>PrecioSmart Bienvenido estimado COMERCIANTE</strong>
              </h3>
              {/* <img className="mb-4" src={img} alt="" width={80} height={75} /> */}
            </div>

            {/* ********************* DIV DE ABAJO ******************************* */}
            <div className="text-bg-info p-3">
              
                <MisProductos />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
