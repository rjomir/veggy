import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import FavoriteTeam from './FavoriteTeam'

function FavoriteTeamsModal({ open, onClose, favoriteTeams }) {
  const handleClose = () => onClose();

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={handleClose}>
      <DialogTitle id="simple-dialog-title">Favorite Teams</DialogTitle>
      <div
        style={{
          padding: '0 24px 16px 24px',
        }}
      >
        <div style={{
          borderTop: '1px solid #ccc',
          borderBottom: '1px solid #ccc',
        }}
        >
          {
            favoriteTeams
              ? favoriteTeams.map((team) => <FavoriteTeam key={team.id} favoriteTeam={team} />)
              : null
          }
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '5px',
        }}
        >
                    Total:&nbsp;
          <b>{favoriteTeams.length}</b>
        </div>
      </div>
    </Dialog>
  )
}

const mapStateToProps = (state) => ({
  favoriteTeams: state.favoriteTeams,
})

FavoriteTeamsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  favoriteTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, null)(FavoriteTeamsModal)
