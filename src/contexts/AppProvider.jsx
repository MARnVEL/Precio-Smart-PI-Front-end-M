import { createContext, useContext, useReducer } from "react"
import { searchReducer } from "../reducers/searchReducer";

const AppContext = createContext();

//*HOOOK PRESONALIZADO
const useAppContext = (  ) => {
    // LA SENTENCIA: useContext( AppContext ) nos DEVUELVE EL VALOR EXACTO DE LO QUE NOSOTROS LE ESTAMOS PROVEYENDO EN EL CONTEXTO. Es decir  si en el "value" del provider le pasamos peras, la sentencia de la que hablo nos devolverá peras.
    //*Por lo tanto la función useAppContext nos estaría retornando cualquier cosa que noostros pongamos en el "value" del Provider.
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





