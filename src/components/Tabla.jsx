import React from "react";

export const Tabla = ({results}) => {
    return (
        <>
            {/* //!TABLA */}
            <table className="table table-striped table-hover mt-5 shadow-lg table-control">
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
                    {results.map((product) => (
                    <tr key={product._id}>
                        <td>{product.productName}</td>
                        <td>{product.marca}</td>
                        <td>{product.presentacion}</td>
                        <td>${product.precio}</td>
                        <td title={product.idComercio.direccion}>
                            {product.idComercio.commerceName}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}