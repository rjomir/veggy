import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LocalDrinkSharp from '@material-ui/icons/LocalDrinkSharp'
import {
  updateDrinkType,
  persistDrinks,
} from '../../../redux/actions/drinks-actions'

const DrawerList = ({ onUpdateDrinkType, onPersistDrinks }) => {
  const onClick = text => {
    onPersistDrinks([])
    onUpdateDrinkType(text)
  }

  const drinkCategories = [
    'Ordinary Drink',
    'Cocktail',
    'Milk / Float / Shake',
    'Other/Unknown',
    'Cocoa',
    'Shot',
    'Coffee / Tea',
    'Homemade Liqueur',
    'Punch / Party Drink',
    'Beer',
    'Soft Drink / Soda',
  ]

  return (
    <List>
      {drinkCategories.map(text => (
        <ListItem onClick={() => onClick(text)} button key={text}>
          <ListItemIcon>
            <LocalDrinkSharp />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )
}

DrawerList.propTypes = {
  onUpdateDrinkType: PropTypes.func.isRequired,
  onPersistDrinks: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  onUpdateDrinkType: updateDrinkType,
  onPersistDrinks: persistDrinks,
}

export default connect(
  null,
  mapDispatchToProps,
)(DrawerList)
