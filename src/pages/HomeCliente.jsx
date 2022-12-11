import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BuscarProductos } from '../components/BuscarProductos'
import { ListaPorComercio } from '../components/ListaPorComercio'
import { NavBarCliente } from '../ui/NavBarCliente'

export const HomeCliente = () => {
 
  return (
    <>
      <div className="">

        <NavBarCliente />
        <Routes>
          <Route path='/*' element={ <BuscarProductos /> }/>
          <Route path='/list-prod' element={ <ListaPorComercio /> }/>
        </Routes>
      </div>
    </>
  )
}
