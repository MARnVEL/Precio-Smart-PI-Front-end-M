import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'
import './App.css'
import { useReducer } from 'react'
import { authReducer } from './reducers/authReducer'
import { AppProvider } from './context/AppProvider'


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
