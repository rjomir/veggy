import { PRODUCTS } from "../actions/types";


const reducer = (state = [], action) => {
    switch(action.type){
        case PRODUCTS.ADD: 
            return [
                ...state,
                action.payload
            ]

        case PRODUCTS.PERSIST:
            return action.payload

        default:
            return state
    }
}

export default reducer