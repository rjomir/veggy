import React from 'react'
import { withStyles } from '@material-ui/core/styles/index'

const styles = {
  counterWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    width: '40px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    margin: '0 10px',
    height: '20px'
  },
  button: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: '1px solid #ccc',
    fontSize: '20px',
    color: '#707070',
    cursor: 'pointer'
  }
}

const Counter = ({ classes, currentValue, onIncrement, setNewValue, onDecrement }) =>
 (
    <div className={ classes.counterWrapper }>
    <button
        className={ classes.button }
        onClick={ onIncrement }>+</button>
    <input
        className={ classes.input }
        type="number"
        value={ currentValue }

        products

        onChange={ setNewValue }
    />
    <button
        className={ classes.button }
        onClick={ onDecrement }>-</button>
    </div>
)

export default withStyles(styles)(Counter)
