import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid'

import Item from '../item/item'
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/actions/products-actions'

const ProductList = ({ onUpdateProducts }) => {
  const [products, setProducts] = useState([])

  console.log("IN PRODUCT LIST")

  useEffect(() => {
    axios.get('/mock/products.json')
      .then(response => {
        const { data: { products } } = response;

        setProducts(products)
        onUpdateProducts(products)
      })
  }, [])


  return (<Grid container justify="flex-start" spacing={2}>
            {
              products.map(product => (
                <Grid
                  key={ `${product.name}` }
                  item xs={3}
                >
                  <Item
                    products={ products }
                    product={ product }
                  />
                </Grid>
              ))
            }
          </Grid>
        )
}

const mapDispatchToProps = {
  onUpdateProducts: updateProducts
}

export default connect(null, mapDispatchToProps)(ProductList)
