import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import ProductList from "../productList/productList";
import ProductPage from "../product/productPage"

const style = {
  minHeight: "90vh",
}

const MyRouter = () => {
  return(
    <div
      style={style}
    >
      <BrowserRouter>
        <Route
          path="/"
          exact
          component={ProductList}
        />
        <Route
          path="/products/:id"
          exact
          component={ProductPage}
        />
      </BrowserRouter>
    </div>
  )
}

export default MyRouter 