import React from 'react'
import Grid from '@material-ui/core/Grid'

import Item from '../item/item'

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

      return <Grid container justify="flex-start" spacing={2}>
          {
              products.map(product => (
                  <Grid key={product.id} item xs={3} >
                      <Item cartItems={this.props.cartItems} updateState={this.props.updateState} product={product}/>
                  </Grid>
              ))
          }
      </Grid>
    }
}

export default ProductList
