

//!Funcion para extraer los PRODUCTOS de la API
const getProducts = async (  ) => {
    const URL = 'http://localhost:4000/productos';
    const response = await fetch(URL);
    const data = await response.json();
    return data;
    // console.log(data);
  }


//!Funcion para extraer los PRODUCTOS POR CATEGORÍA de la API
const getProductsByCategoria = async ( categoria ) => {
  if(categoria === 'todos' || categoria === 'categoria'){
    getProducts();
  }
  const urlProductsByCategory = `http://localhost:4000/products/${categoria}`;
  const response = await fetch(urlProductsByCategory);
  const respJSON = await response.json();
  return respJSON;
  // console.log(data);
}

//!Funcion para extraer los PRODUCTOS POR COMERCIO de la API
const getProductsByComerce = async ( idComerce ) => {
  if(idComerce === 'todos' || idComerce === 'comercio'){
    getProducts();
  }
  const urlProductsByComerce = `http://localhost:4000/products-comercio/${idComerce}`;
  const response = await fetch(urlProductsByComerce);
  const respJSON = await response.json();
  return respJSON;
  // console.log(data);
}


//! Función para traer los COMERCIOS de la API
const getComerces = async () => {
  const urlComerces = 'http://localhost:4000/comerces';
  const response = await fetch(urlComerces);
  const respJSON = await response.json();
  return respJSON;
}




