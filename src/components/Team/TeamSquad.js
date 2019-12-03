import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const TeamSquad = ({ players, match }) => {
  const [teamPlayers, setTeamPlayers] = useState([])

  useEffect(() => {
    if (players && players.length > 0) {
      const { params: { id } } = match
      const playerFromState = players.filter((p) => p.team.id === Number(id))
      if (playerFromState) {
        setTeamPlayers(playerFromState)
      }
    }
  }, [players, match])

  const classes = useStyles();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      {
                teamPlayers.length === 0
                  ? <CircularProgress />
                  : (
                    <Paper className={classes.root}>
                      <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align="right">Position</TableCell>
                            <TableCell align="right">Height</TableCell>
                            <TableCell align="right">Weight</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {teamPlayers.map((tp) => (
                            <TableRow key={tp.id}>
                              <TableCell component="th" scope="row">
                                {tp.first_name}
                              </TableCell>
                              <TableCell>{tp.last_name}</TableCell>
                              <TableCell align="right">{tp.position}</TableCell>
                              <TableCell align="right">{tp.height_inches}</TableCell>
                              <TableCell align="right">{tp.weight_pounds}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Paper>
                  )
            }
    </div>
  );
}

const mapStateToProps = (state) => ({
  players: state.players,
})

TeamSquad.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, null)(TeamSquad)
