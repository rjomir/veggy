//actions
export const fetchProductList = (productList) => {
  return {
    type: "FETCH_PRODUCT_LIST",
    productList
  }
}

//reducers
export const productList = (state = [], action) => {
  switch(action.type){
    case "FETCH_PRODUCT_LIST": {
      return action.productList
    }
    default: {
      return state
    }
  }
}

