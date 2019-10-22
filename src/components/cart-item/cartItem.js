import React from 'react'
import PropTypes from 'prop-types'

function CartItem(props) {
  const { cartItem } = props
  const handleOnChange = () => {}

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '300px',
      }}
    >
      <img src={cartItem.image} alt={cartItem.name} width="50" height="50" />
      <span>{cartItem.name}</span>
      <span>
        {cartItem.price}
        {`Lei`}
      </span>
      <input
        style={{
          width: '30px',
          textAlign: 'center',
        }}
        type="number"
        onChange={handleOnChange}
        value={cartItem.quantity}
      />
    </div>
  )
}

CartItem.propTypes = {
  cartItem: PropTypes.instanceOf(Object).isRequired,
}

export default CartItem
