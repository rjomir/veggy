import React, { useCallback, useContext, useEffect } from 'react'
import { connect } from 'react-redux'
import Grid from "@material-ui/core/Grid";

const ProductDetails = ({ match, products }) => {
  const [product, setProduct] = React.useState();
  const [isEditEnabled, setEnableStatus] = React.useState(false);

  useEffect(() => {
    if (products && products.length > 0) {
      const { params: { id } } = match;
      const productFromArr = products.find(p => p.id === Number(id));

      if (productFromArr) setProduct(productFromArr);
    }
  }, [products, match]);

  const enableEdit = () => setEnableStatus(true)

  const onChange = useCallback((e, propName) => {
      //CEVA INTERESANT
  }, [product]);

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
              <Grid style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} item xs={ 7 }>
                <input
                  type="text"
                  value={ product.name }
                  disabled={ !isEditEnabled }
                  onChange={ (e) => onChange(e, 'name') }
                  //onBlur={  }
                />
                <textarea
                  rows={15}
                  value={ product.description }
                  onChange={ (e) => onChange(e, 'description') }
                  //onBlur={ }
                />
                <button onClick={ enableEdit }>Edit</button>
              </Grid>
            </Grid>
          )
      }
    </div>
  )
};

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps, null)(ProductDetails)
