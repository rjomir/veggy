import { MODAL } from "../actions/types";

const initialState = false

const modalReducer = (state = initialState, { type }) => {
  switch (type) {
    case MODAL.OPEN:
      return true

    case MODAL.CLOSE:
      return false  

    default:
      return state
  }
}

export default modalReducer
