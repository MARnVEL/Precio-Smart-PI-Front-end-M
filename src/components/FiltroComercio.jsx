import React from 'react'

export const FiltroComercio = () => {
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
