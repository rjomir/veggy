import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Item from '../item/item'
import { fetchProducts } from '../../redux/actions/products-actions'

const ProductList = ({ onFetchProducts, products }) => {
  useEffect(() => {
    onFetchProducts()
  }, [])

  return (
    <Grid container justify="flex-start" spacing={2}>
      {products.map(product => (
        <Grid key={`${product.name}`} item xs={3}>
          <Item products={products} product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

const mapDispatchToProps = {
  onFetchProducts: fetchProducts,
}

const mapStateToProps = state => ({
  products: state.products,
})

ProductList.propTypes = {
  onFetchProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList)
