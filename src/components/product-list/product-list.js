import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid'

import Item from '../item/item'
import { connect } from 'react-redux';
import { persistProducts } from '../../redux/actions/products-actions'

const ProductList = ({ onPersistProducts }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/mock/products.json')
      .then(response => {
        const { data: { products } } = response;

        setProducts(products)
        onPersistProducts(products)
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
  onPersistProducts: persistProducts
}

export default connect(null, mapDispatchToProps)(ProductList)
