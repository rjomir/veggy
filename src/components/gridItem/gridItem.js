import React from "react";
import {Grid, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import PriceTag from "./priceTag";
import {withRouter} from 'react-router-dom';

const cellStyle = {
  height: 361,
  width: 292,
  margin: "1px 1px 1px 1px"
}

const imageStyle = {
  height: 288,
  width: 292,
  resizeMode: "cover"
}

const categoryTagStyle = {
  fontSize: "12px",
  color: "#767677"
}

const nameTagStyle = {
  fontSize: "12px"
}

const GridItem = (props) => {
  const product = props.product

  const clickImage = () => {
    props.history.push("/products/" + product.product_id)
  }

  return(
    <Grid
      item
      style={cellStyle}>
        <img
        style={imageStyle}
        alt={"product"}
        src={product._links.image_large.href}
        onClick={clickImage}/>
        <Typography
        style={categoryTagStyle}>
          {product.subtitle}
        </Typography>
        <Typography
        style={nameTagStyle}>
          {product.product_name}
        </Typography>
        <PriceTag
        price={product.original_price}/>
    </Grid>
  )
}

GridItem.prototype = {
  product: PropTypes.array
}

export default withRouter(GridItem)