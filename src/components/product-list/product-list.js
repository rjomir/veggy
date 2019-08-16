import React from 'react'
import Grid from '@material-ui/core/Grid'

import Item from '../item/item'
import { AppConsumer } from "../AppContext";

export const ProductList = () => (
  <AppConsumer>
    {
      ({ products, updateState }) => (
        <Grid container justify="flex-start" spacing={2}>
          {
            products.map(product => (
              <Grid
                key={ `${product.name}` }
                item xs={3}
              >
                <Item
                  products={ products }
                  updateState={ updateState }
                  product={ product }
                />
              </Grid>
            ))
          }
        </Grid>
      )
    }
  </AppConsumer>
);
