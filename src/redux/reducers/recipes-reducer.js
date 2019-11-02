import {RECIPES} from "../actions/types";

const reducer = (state = [], action) => {
    switch (action.type) {
        case RECIPES.FETCH:
            console.log("Fetch occured from reducers")
            return state
        case RECIPES.ADD_TO_FAVORITES:
            return [...state]
        case RECIPES.REMOVE_FROM_FAVORITES:
            return [...state]
        default:
            console.log("Fetch occured from reducers default")
            console.log(action)
            return state

    }
}
export default reducer