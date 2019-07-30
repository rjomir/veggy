import React from 'react'
import { withStyles } from '@material-ui/core/styles/index'
import Button from '@material-ui/core/es/Button/Button'
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
      justifyContent: 'space-between'
    },
    productName: {
      color: '#666',
      fontWeight: '400',
      margin: '0 0 8px 0'
    },
    productPrice: {
      fontSize: '22px',
      color: '#666',
      fontWeight: '700',
      margin: '0 0 16px 0'
    }
  }

class Item extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        currentValue: 1
    }
  }

  handleClick = (product) =>{
    const newCartItems = {
      ...this.props.cartItems,
      [product.name]: this.state.currentValue + this.props.cartItems[product.name]
    }

    this.props.updateState("cartItems", newCartItems)
  }

  setNewValue = ({ target: value }) => {
      this.setState({
          currentValue : value
      })
  }

  onIncrement = () => {    
    this.setState({
        currentValue: this.state.currentValue + 1
    })
  }

  onDecrement = () => {
    this.setState({
        currentValue: this.state.currentValue - 1
    })
  }

  render() {
    const { classes, product } = this.props
    const { currentValue } = this.state
    const { name, price, image } = product

    return(
        <div  className={classes.item}>
        <img src={image}
                           alt={name}
                           width="200"
                           height="200"
                      />
                      <span> {name} </span>
                      <span> {price} lei </span>
                      <Counter 
                        currentValue={currentValue} 
                        setNewValue={this.setNewValue} 
                        onIncrement={this.onIncrement} 
                        onDecrement={this.onDecrement}
                      />
                      <Button
                          variant="contained"
                          color="primary"
                          style={{marginTop: '15px'}}
                          onClick={() => this.handleClick(product)}
                      >
                          Add To Cart
                      </Button>
             
        </div>

    )
  }
}

export default withStyles(styles)(Item)
