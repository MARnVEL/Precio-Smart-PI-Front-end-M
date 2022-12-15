import { useReducer } from 'react'
import { authReducer } from './reducers/authReducer'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './contexts/AuthContext'
import { AppProvider } from './contexts/AppProvider'
import './App.css'


//* "init" es una función que cambia el estado inicial de mi App y se lo paso al Reducer que maneja el authReducer, con esto logro que el estado inicial de la App varíe de acuerdo a si init encuentra o no un usuario previamente registrado.
const init = ()=>{
  return JSON.parse(localStorage.getItem('user')) || { isLogged: false }
}

function App() {

  const [ user, authDispatch ] = useReducer(authReducer, [], init)

  return (
    <AuthContext.Provider 
      value={
        { user, authDispatch }
      }
    >
      <AppProvider>
        <AppRouter/>
      </AppProvider>
    </AuthContext.Provider>
  )
}

export default App
