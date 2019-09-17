import { CART } from "../actions/types";

const reducer = (state = [], action) => {
    switch(action.type){
        case CART.ADD: 
            return [
                ...state,
                action.payload
            ]

        case CART.REMOVE:
            return state

        default:
            return state
    }
}

export default reducer