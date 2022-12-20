import React, { useEffect, useState } from 'react'
import { useAppContext } from '../contexts/AppProvider';
import { getComerces } from '../functions/apiMethods';
import { TYPES } from '../types/typesSearch'

export const FiltroComercio = () => {
    
    const [comerces, setComerces] = useState([])

    //!Para que el filtro por comercio interactúe con los demás componentes USAMOS EL DISPATCH
    // const { productDispatch, products, comerces } = useAppContext();

    // Este código no anda
    // (async () => {
    //     const comercios = getComerces()
    //     setComerces(comercios)
    //     })()
    // getComerces2()

    useEffect(() => {
        getComerces()
        //TODO Preguntar sobre el momento en que se carga el array comerces
        //! Ojo este console.log me devuelve un array vacío. Sólo después de que pase un momento determinado es que recién se carga el array comerces
        // console.log('CLG front. Los comercios del setComerces: ', comerces)
    }, [])

    const getComerces = async () => {
        const urlComerces = 'http://localhost:4000/comercios';
        // console.log('CLG front-Entra al get comerces');
        try {
            // console.log('CLG front-Entra al try');
            const response = await fetch(urlComerces);
            const respJSON = await response.json();
            // console.log('CLG front-Y esta es la respuesta del back: ', respJSON);
            setComerces(respJSON)
        } catch (error) {
            throw new Error('Something went wrong')
        }
    }

    //TODO Si pongo el getComerces() así suelto, entro a un loop infinito de peticiones. No sé porqué
    // getComerces() 

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
                {
                    //TODO Ver cómo hacer para hacer aparecer un spiner en vez del select hasta que se carguen todos los comercios en el select.
                    !comerces ?(
                            <>
                                <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                </div>
                            </>
                        )
                        :(
                            <>
                                <div className="mb-1">
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
                            </>
                        )
                }

            </div>

            
            
        </>
    )
}
