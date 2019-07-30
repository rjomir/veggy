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

function Item({ product, classes }){
    return(
        <div  className={classes.item}>
        <img src={product.image}
                           alt={product.name}
                           width="200"
                           height="200"
                      />
                      <span> {product.name} </span>
                      <span> {product.price} lei </span>
                      <Counter />
                      <Button
                          variant="contained"
                          color="primary"
                          style={{marginTop: '15px'}}
                      >
                          Add To Cart
                      </Button>
             
        </div>

    )
}

export default withStyles(styles)(Item)
