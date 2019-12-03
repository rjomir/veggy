import React, { useState, useContext, useEffect } from 'react'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import StarsIcon from '@material-ui/icons/Stars';
import { IconButton } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import AppContext, { AppConsumer, themes } from '../AppContext'


import FavoriteTeamsModal from '../FavoriteTeam/FavoriteTeamsModal'

const Header = ({ favoriteTeams }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { theme: { color } } = useContext(AppContext)

  useEffect(() => {
    if (favoriteTeams.length === 0) {
      setOpen(false)
    }
  }, [favoriteTeams])

  const handleClickOpen = (event) => {
    if (favoriteTeams.length === 0) {
      setAnchorEl(event.currentTarget)
      return
    }
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClosePopover = () => {
    setAnchorEl(null);
  }

  const openPopover = Boolean(anchorEl)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '50px',
      borderBottom: '1px solid #cccccc',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginBottom: '15px',
      background: color,
    }}
    >
      <AppConsumer>
        {({ theme, toggleTheme }) => (
          <IconButton onClick={toggleTheme}>
            {theme === themes.light ? <Brightness4OutlinedIcon /> : <Brightness4Icon />}
          </IconButton>
        )}
      </AppConsumer>
      <IconButton aria-label="favorite" onClick={handleClickOpen} href="#">
        <StarsIcon />
      </IconButton>
      <FavoriteTeamsModal open={open} onClose={handleClose} />
      <Popover
        id="favoriteTeams-popover"
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
                No Favorite Teams
      </Popover>
    </div>
  )
}

const mapStateToProps = (state) => ({
  favoriteTeams: state.favoriteTeams,
})

Header.propTypes = {
  favoriteTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default connect(mapStateToProps, null)(Header)
