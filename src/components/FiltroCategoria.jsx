import React from 'react'

export const FiltroCategoria = () => {
    return (
        <>
            {/* //!FILTRO POR CATEGORÍA */}
            <div className="container col-lg-3 justify-content-center ">
                <div className="mb-3">
                
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

