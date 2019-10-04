import { MODAL } from "./types"

export const openModal = payload => ({
    type: MODAL.OPEN,
    payload
})


export const closeModal = () => ({
    type: MODAL.CLOSE
})

export const modalConfirm = payload => ({
    type: payload ? MODAL.CONFIRMED : MODAL.CANCELED
})