import React, { useCallback, useContext, useEffect } from 'react'
import Grid from "@material-ui/core/Grid";

import AppContext from "../AppContext";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = React.useState(null);
  const [isEditEnabled, setEnableStatus] = React.useState(false);
  const appState = useContext(AppContext);
  const { products, updateState } = appState;

  useEffect(() => {
    if (products && products.length > 0) {
      const { params: { id } } = match;
      const productFromArr = products.find(p => p.id === Number(id));

      if (productFromArr) setProduct(productFromArr);
    }
  }, [products]);

  const enableEdit = () => setEnableStatus(true);
  const onChange = useCallback((e, propName) => {
    setProduct({
      ...product,
      [propName]: e.target.value
    })
  }, [product]);

  const updateProductsState = useCallback((e, propName) => {
    const newProducts = products.map(product => {
      return product.id === this.state.product.id
        ? {
          ...product,
          [propName]: e.target.value
        }
        : product
    });

    updateState('products', newProducts);
  }, [products]);

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
                  onChange={ (e) => onChange(e, 'name') }
                  onBlur={ (e) => updateProductsState(e, 'name') }
                />
                <textarea
                  value={ product.description }
                  onChange={ (e) => onChange(e, 'description') }
                  onBlur={ (e) => updateProductsState(e, 'description') }
                />
                <button onClick={ enableEdit }>Edit</button>
              </Grid>
            </Grid>
          )
      }
    </div>
  )
};

export default ProductDetails
