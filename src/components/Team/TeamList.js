import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchTeams } from '../../redux/actions/teams-actions'
import { fetchPlayers } from '../../redux/actions/players-actions'


import Team from './Team'

const TeamList = ({ onFetchTeams, onFetchPlayers, teams }) => {
  useEffect(() => {
    // const config = {
    //     headers: {
    //         'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    //         'X-RapidAPI-Key': 'd615ac8969mshcd7a7ed8dc7aa97p18c015jsn02ad9bd18e50'
    //     }
    // }

    // Axios.get("https://free-nba.p.rapidapi.com/teams", config).then(res => {
    //     const teams = res.data.data;
    //     // setTeams(teams)
    //     onFetchTeams(teams)
    // })
    onFetchTeams()
    onFetchPlayers()
  }, [onFetchTeams, onFetchPlayers])

  return (
  // <AppConsumer>
  //     {
  //         ({ teams }) => (
  //             <Grid container justify='center' spacing={10}>
  //                 {teams.map(team => (
  //                     <Grid key={team.id} item>
  //                         <Team team={team} />
  //                     </Grid>
  //                 ))}
  //             </Grid>
  //         )
  //     }
  // </AppConsumer>
    <Grid container justify="center" spacing={10}>
      {
                teams.map((team) => (
                  <Grid key={team.id} item>
                    <Team team={team} />
                  </Grid>
                ))
}
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  teams: state.teams,
  players: state.players,
})

const mapDispatchToProps = {
  onFetchTeams: fetchTeams,
  onFetchPlayers: fetchPlayers,
}

TeamList.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFetchTeams: PropTypes.func.isRequired,
  onFetchPlayers: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamList)
