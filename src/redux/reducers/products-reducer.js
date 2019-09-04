import { PRODUCT } from "../actions/types";


const reducer = (state = [], action) => {
    switch(action.type){
        case PRODUCT.ADD: 
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}

export default reducer