import React, { useEffect } from "react";
import Grid from '@material-ui/core/Grid'

import Item from '../item/item'
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products-actions' 

const ProductList = ({ onFetchProducts, products, dispatch }) => {
  useEffect(() => {
    onFetchProducts()
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
  onFetchProducts: fetchProducts,
}

const mapStateToProps = state => ({
  products: state.products, 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
