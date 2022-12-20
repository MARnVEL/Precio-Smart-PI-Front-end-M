
import { TYPES } from '../types/typesSearch'

export const searchReducer = ( state, action ) => {

    switch (action.type) {
        case TYPES.FETCH_PRODUCTS_SUCCESS: {
            return {
                loading: false,
                products: action.payload,
                comerces: [],
                error: ''
            }
        }
        case TYPES.FETCH_PRODUCTS_ERROR: {
            return {
                loading: false,
                products: [],
                comerces: [],
                error: 'Something went wrong'
            }
        }
        case TYPES.FETCH_COMERCES_SUCCESS: {
            return {
                loading: false,
                products: [],
                comerces: action.payload,
                error: ''
            }
        }
        case TYPES.FETCH_COMERCES_ERROR: {
            return {
                loading: false,
                products: [],
                comerces: [],
                error: 'Something went wrong'
            }
        }

        case TYPES.FILTER_PRODUCTS_BY_CATEGORY: {


        }
    
        default:
            return state
    }

    
}
