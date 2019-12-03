import React from 'react'
import { connect } from 'react-redux'
import { IconButton } from '@material-ui/core';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import PropTypes from 'prop-types'

import { removeFavoriteTeam } from '../../redux/actions/favorite-teams-actions'

const FavoriteTeam = ({ favoriteTeam, onRemoveFavoriteTeam }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '300px',
  }}
  >
    <SportsBasketballIcon />
    <span>{favoriteTeam.full_name}</span>
    <span>{favoriteTeam.conference}</span>
    <IconButton onClick={() => onRemoveFavoriteTeam(favoriteTeam)}>
      <RemoveCircleOutlineIcon />
    </IconButton>
  </div>
)

const mapDispatchToProps = {
  onRemoveFavoriteTeam: removeFavoriteTeam,
}

FavoriteTeam.propTypes = {
  favoriteTeam: PropTypes.shape({
    full_name: PropTypes.string,
    conference: PropTypes.string,
  }).isRequired,
  onRemoveFavoriteTeam: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(FavoriteTeam)
