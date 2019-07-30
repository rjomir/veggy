import React from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Item from '../item/item'

class ProductList extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            products : []
        }
    }

    componentDidMount(){
        const self = this
    
        axios.get('/mock/products.json')
          .then(function (response) {
            self.setState({
              products: response.data.products
            })
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
      }

      render(){
        return <Grid container justify="flex-start" spacing={32}>
            {
                this.state.products.map(product => (
                    <Grid key={product.id} item xs={3} >
                        <Item cartItems={this.props.cartItems} updateState={this.props.updateState} product={product}/>
                    </Grid>
                ))
            }
        </Grid>
      }
    
}

export default ProductList