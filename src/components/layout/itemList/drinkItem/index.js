import React from 'react'
import { Typography, Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles/index'

const useStyles = makeStyles(theme => ({
  item: {
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '3px',
    minHeight: '250px',
    width: '200px',
    padding: '5px',
    justifyContent: 'space-between',
  },

  imgStyle: {
    padding: 'auto',
    marginTop: '5%',
    width: '90%',
    maxHeight: '80%',
    borderRadius: theme.spacing(1),
  },
  typography: {
    align: 'center',
  },
}))

const DrinkItem = ({ drink }) => {
  const classes = useStyles()
  return (
    <Box className={classes.item}>
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        className={classes.imgStyle}
      />
      <Typography align="center" className={classes.typography}>
        {' '}
        {drink.strDrink}
        {' '}
      </Typography>
    </Box>
  )
}

DrinkItem.propTypes = {
  drink: PropTypes.shape({ strDrink: PropTypes.string }).isRequired,
}

export default DrinkItem
