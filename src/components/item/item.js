import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles/index'
import Button from '@material-ui/core/es/Button/Button'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { openModal } from '../../redux/actions/modal-actions'
import Counter from '../counter/counter'

const styles = {
  item: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '3px',
    minHeight: '250px',
    padding: '15px',
    justifyContent: 'space-between',
  },
  productName: {
    color: '#666',
    fontWeight: '400',
    margin: '0 0 8px 0',
  },
  productPrice: {
    fontSize: '22px',
    color: '#666',
    fontWeight: '700',
    margin: '0 0 16px 0',
  },
}

const Item = ({ onOpenModal, classes, product }) => {
  const [currentValue, setItemValue] = useState(1)

  const onIncrement = () => {
    setItemValue(currentValue + 1)
  }

  const onDecrement = () =>
    currentValue > 1 ? setItemValue(currentValue - 1) : 1

  const setNewValue = ({ target: value }) => {
    setItemValue(value)
  }

  const addToCart = productToAdd => {
    onOpenModal({
      id: productToAdd.id,
      name: productToAdd.name,
      quantity: currentValue,
    })
  }

  return (
    <div className={classes.item}>
      <Link component={RouterLink} to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} width="200" height="200" />
      </Link>
      <Link component={RouterLink} to={`/product/${product.id}`}>
        <span> 
          {' '}
          {product.name}
          {' '}
        </span>
      </Link>
      <span> 
        {' '}
        {product.price}
        {' '}
lei
        {' '}
      </span>
      <Counter
        currentValue={currentValue}
        setNewValue={setNewValue}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '15px' }}
        onClick={() => addToCart(product)}
      >
        {'Add To Cart'}
      </Button>
    </div>
  )
}

const mapDispatchToProps = {
  onOpenModal: openModal,
}

Item.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  classes: PropTypes.instanceOf(PropTypes.Object).isRequired,
  product: PropTypes.instanceOf(PropTypes.Object).isRequired,
}

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles)(Item))
