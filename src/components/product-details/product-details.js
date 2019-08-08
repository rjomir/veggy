import React from 'react'
import Grid from "@material-ui/core/Grid";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props)

    if (props) {
      const { match, products } = props;
      const { params: { id } } = match;

      const product = products.find(p => p.id === Number(id));

      this.state = {
        product,
        isEditEnabled: false
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { match, products } = this.props;
    const { params: { id } } = match;

    if (products !== prevProps.products) {
      const product = products.find(p => p.id === Number(id));
      this.setState({ product })
    }
  }

  enableEdit = () => {
    this.setState(prevState => ({
      isEditEnabled: !prevState.isEditEnabled
    }))
  }

  onChange = (e, propName) => {
    this.setState({
      product: {
        ...this.state.product,
        [propName]: e.target.value
      }
    });
  }

  updateProductsState = (e, propName)=> {
    const newProductsState = this.props.products.map(product => {
      return product.id === this.state.product.id
        ? {
          ...product,
          [propName]: e.target.value
        }
        : product
    });

    this.props.updateState("products", newProductsState)
  }

  render() {
    const { product, isEditEnabled } = this.state

    return (
      <div>
        {
          !product
            ? <span>Loading</span>
            : (
              <Grid container justify="flex-start" spacing={ 2 }>
                <Grid item xs={ 5 }>
                  <img src={ product.image }
                       alt={ product.name }
                       style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={ 7 }>
                  <input
                    type="text"
                    value={ product.name }
                    disabled={ !isEditEnabled }
                    onChange={ (e) => this.onChange(e, 'name') }
                    onBlur={ (e) => this.updateProductsState(e, 'name') }
                  />
                  <textarea
                    value={ product.description }
                    onChange={ (e) => this.onChange(e, 'description') }
                    onBlur={ (e) => this.updateProductsState(e, 'description') }
                  />
                  <button onClick={ this.enableEdit }>Edit</button>
                </Grid>
              </Grid>
            )
        }
      </div>
    )
  }
}

export default ProductDetails
