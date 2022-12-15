import React, { useEffect, useState } from 'react'
import { useAppContext } from '../contexts/AppProvider';

export const FiltroComercio = () => {

    //!Para que el filtro por comercio interactúe con los demás componentes USAMOS EL DISPATCH
    const { productDispatch, products, comerces } = useAppContext();


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




    return (
        <>
            {/* //!FILTRO POR COMERCIO */}
            <div className="col-lg-3 justify-content-center ">
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
            
        </>
    )
}
