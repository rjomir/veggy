import React from "react";
import {Grid} from "@material-ui/core";
import {connect} from "react-redux";
import GridItem from "../gridItem/gridItem";

const gridStyle = {
  marginTop: 10
}

const ProductListGrid = (props) => {
  const products = props.products

  return(
    <div>
      <Grid
        style={gridStyle}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {
          products.map( product => (
            <GridItem
              key={product.product_id}
              product={product}/>
          ))
        }
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.productList
  }
}

export default connect(mapStateToProps)(ProductListGrid)