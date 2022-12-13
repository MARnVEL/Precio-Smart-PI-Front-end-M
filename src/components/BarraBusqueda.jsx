import React from 'react'

export const BarraBusqueda = () => {
  return (
    <>
        {/* //!BARRA DE BÚSQUEDA */}
        <div className="col-lg-6">
            <input
                value={search}
                onChange={buscador}
                type="text"
                placeholder="search"
                className="form-control mb-3"
                autoFocus={true}
            />
        </div>
    </>
  )
}
