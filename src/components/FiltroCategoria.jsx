import React from 'react'

export const FiltroCategoria = () => {

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



    return (
        <>
            {/* //!FILTRO POR CATEGORÍA */}
            <div className="container col-lg-3 justify-content-center ">
                <div className="mb-1">

                    <select 
                        className="form-select form-select"
                        onChange={filtredData}
                    >

                        {/* <option defaultValue>Categoría</option> */}
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
            </div>
        </>
    )
}

