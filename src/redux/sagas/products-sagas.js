import { all, put, takeEvery } from 'redux-saga/effects'
import { showNewCartNotification } from '../actions/cart-items-actions'
import { persistProducts } from '../actions/products-actions'
import { PRODUCTS, CART } from '../actions/types'
import axios from 'axios'

function* watchAddProducts ({ payload }) {
  const { name: cartItemName } = payload

  yield put(showNewCartNotification(cartItemName))
}

function* fetchProducts (){ 
  const response = yield axios.get('/mock/products.json')
    .then(({ data: { products } })  => products ) 
    
  yield put(persistProducts(response))
}

export { watchAddProducts }

export default function* () {
  yield all([
    takeEvery(CART.ADD, watchAddProducts),
    takeEvery(PRODUCTS.FETCH, fetchProducts)
  ])
}
