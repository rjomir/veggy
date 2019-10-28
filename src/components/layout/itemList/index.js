import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Box } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import DrinkDetails from '../drinkDetails'
import DrinkItem from './drinkItem'

const ItemList = ({ drinks }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          render={() =>
            drinks.length === 0 ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{
                  marginTop: '50%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <CircularProgress color="secondary" />
              </Box>
            ) : (
              <Grid container justify="flex-start" spacing={2}>
                {drinks.map(drink => (
                  <Grid key={`${drink.strDrink}`} item xs>
                    <Link to={`/drink=${drink.idDrink}`}>
                      <DrinkItem drink={drink} />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            )
          }
          exact
          path="/"
        />
        <Route
          path="/drink=:id"
          render={params => <DrinkDetails id={params.match.params.id} />}
        />
      </Switch>
    </BrowserRouter>
  )
}

const mapStateToProps = state => ({
  drinks: state.drink.items,
})

ItemList.propTypes = {
  drinks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default connect(
  mapStateToProps,
  null,
)(ItemList)
