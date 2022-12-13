import { createContext, useContext, useReducer } from "react"
import { searchReducer } from "../reducers/searchReducer";

const AppContext = createContext();

//*HOOOK PRESONALIZADO
const useAppContext = (  ) => {
    return useContext( AppContext );
}

const initialState = {
    products: [],
    comerces: []
}

const initNoAuth = ()=>{
    return JSON.parse(localStorage.getItem('user')) || { isLogged: false }
    }


const AppProvider = ({ children }) => {

    const [ state, productDispatch ] = useReducer( searchReducer, initialState)

    return (
        //Esto lo podríamos hacer directamente en el App.jsx, pero es mejor tener todo aquí para así dejar todo el tema de los datos recluídos acá. Todo se gestiona aquí todo se genera aquí, y simplemente luego en nuestra App.jsx decimos que todos nuestros componentes van a estar incluídos dentro del provider, y luego a partir de eso cada uno de los elementos puede utilizar la información que necesite.
        <AppContext.Provider 
            value={
                {
                    products: state.products, 
                    comerces: state.comerces,
                    productDispatch
                }
            }
        >
            {children}
        </AppContext.Provider>
    )
}

export {
    AppProvider,
    useAppContext
}





