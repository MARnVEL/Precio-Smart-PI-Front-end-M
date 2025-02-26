import React, { useEffect, useState } from 'react'
import { FiltroCategoria } from './FiltroCategoria';
import { FiltroComercio } from './FiltroComercio';
import { Tabla } from './Tabla';

export const BuscarProductos = () => {

  //*Cuando tenemos 2 o más estados que cambian simultáneamente y unos dependen de los demás, es mejor usar el hook useReduce.
  //hook de usestate
  const [products, setProducts] = useState([]);
  // const [comerces, setComerces] = useState([]);
  const [search, setSearch] = useState("");

  useEffect( () => {
    getProducts()
  }, [])

  //!Funcion para extraer los PRODUCTOS de la API
  const getProducts = async (  ) => {
    const URL = "http://localhost:4000/productos";
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setProducts(data)
  }

  const showData = async ()=>{
    const URL = "http://localhost:4000/productos";
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setProducts(data)
  }

  //! Función para traer los COMERCIOS de la API
  // const getComercios = async () => {
  //   const urlComercios = "http://localhost:4000/comercios";
  //   const resp = await fetch(urlComercios);
  //   const respJSON = await resp.json();
  //   setComerces(respJSON);
  // };

  //!Función que establece el estado de productos en productos por categoría, es decir, me cambia el estado y pone en el array de productos sólo los productos que pertencen a la categría que seleccionó el usuario.
  const filtredData = async (e)=> {
    // console.log(e.target.value);
    const categoria = e.target.value
    if(categoria === 'todos' || categoria === 'categoria'){
      showData()
      return
    }
    // console.log(categoria)
    const URL = `http://localhost:4000/products/${categoria}`
    const resp =  await fetch(URL);
    const dataCategoria = await resp.json();
    // console.log(dataCategoria);
    setProducts(dataCategoria)
  }

  //! Función que establece el estado de productos en "PRODUCTOS POR COMERCIO", es decir, me cambia el estado y pone en el array de productos sólo los productos que pertencen AL COMERCIO que seleccionó el usuario.
  const filtredDataByComercio = async ( evComercio ) => {
    // console.log(e.target.value);
    const idComercio = evComercio.target.value;
    if (idComercio === "todos" || idComercio === "comercio") {
      showData();
      return
    }
    // console.log("CLG-front. Lo que seleccione del select: ", comercio);
    const URL = `http://localhost:4000/products-comercio/${idComercio}`;
    const resp = await fetch(URL);
    // console.log('clg-front. La resp de la petición en la fcn filtredDataByComercio: ', resp)
    const dataComercio = await resp.json();

    //!
    setProducts(dataComercio);
    // console.log('CLG front-La data que me trae la petición al back de los productos por comercio', dataComercio);
  };

  //! Funcion de BÚSQUEDA
  const buscador = (e) => {
    setSearch(e.target.value);
  }
  
  // //Metodo de filtrado comun:
  // let results = [];
  // if (!search) {
  //   results = products;
  // } else {
  //   results = products.filter((dato)=> dato.productName.toLowerCase().includes(search.toLocaleLowerCase()))
  // }

  //Filtrado mas resumido
  const results = !search ? products : products.filter((dato)=> dato.productName.toLowerCase().includes(search.toLocaleLowerCase()))

  
  //Hook useEfect
  useEffect(()=>{
    showData()
    // getComercios();
  },[])
  
  //Renderizado
  // console.log('CLG front - Los productos en el estado', products);
  return (

    <>
      <div className="container justify-content-center col-lg-8 mt-5">

        {/* //!BARRA DE BÚSQUEDA Y FILTRADO */}
        <div className="container">
          <div className="row">

            {/* ************************************************************************************ */}
            {/* //!FILTRO POR COMERCIO */}

            <FiltroComercio />

            
            {/* <div className="col-lg-3 justify-content-center ">
              <div className="mb-3">

                <select 
                  className="form-select"
                  name="comercios"
                  onChange={filtredDataByComercio}
                >
                  <option defaultValue value="comercio">
                    COMERCIO
                  </option>
                  <option value="todos">Todos los comercios</option>
                  {comerces.map((comerce) => (
                    <option key={comerce._id} value={comerce._id}>
                      {comerce.commerceName}
                    </option>
                    ))
                  }
                </select>
              </div>
            </div> 
            */}

            {/* ************************************************************************************ */}
            {/* //!FILTRO POR CATEGORÍA */}

            <FiltroCategoria/>
            {/* <div className="container col-lg-3 justify-content-center ">
              <div className="mb-3">
                
                <select 
                  className="form-select form-select"
                  onChange={filtredData}
                >

                  <option defaultValue value="categoria">
                    CATEGORÍA
                  </option>
                  <option value="todos">Todos</option>
                  <option value="comestibles">Comestibles</option>
                  <option value="bebidas">Bebidas</option>
                  <option value="limpieza">Limpieza</option>
                  <option value="otros">Otros</option>

                </select>
              </div>
            </div> */}
            
            {/* ************************************************************************************ */}
            {/* //!BARRA DE BÚSQUEDA */}
            {/* <div className="col-lg-6">
              <input
                value={search}
                onChange={buscador}
                type="text"
                placeholder="search"
                className="form-control mb-3"
                autoFocus={true}
              />
            </div> */}

          </div>
        </div>
        
        {/* ************************************************************************************ */}
        {/* //!TABLA */}
        <Tabla results={ results }/>

        {/* <table className="table table-striped table-hover mt-5 shadow-lg table-control">
          <thead className='table-active'>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Presentación</th>
              <th>Precio</th>
              <th>Comercio</th>
            </tr>
          </thead>

          <tbody>
            {results.map((prod) => (
              <tr key={prod._id}>
                <td>{prod.productName}</td>
                <td>{prod.marca}</td>
                <td>{prod.presentacion}</td>
                <td>${prod.precio}</td>
                <td title={prod.idComercio.direccion}>{prod.idComercio.commerceName}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </>
    
  )
}
