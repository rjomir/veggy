import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    borderBlockColor: 'green',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const TeamDetails = ({ match, teams }) => {
  const [team, setTeam] = useState()

  useEffect(() => {
    if (teams && teams.length > 0) {
      const { params: { id } } = match
      const teamFromState = teams.find((t) => t.id === Number(id))
      if (teamFromState) {
        setTeam(teamFromState)
      }
    }
  }, [teams, match])

  const classes = useStyles();

  return (
    <div>
      {
                !team
                  ? <span>Loading</span>
                  : (
                    <div className={classes.root}>
                      <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                          <Grid item>
                            <ButtonBase className={classes.image}>
                              <img className={classes.img} alt="Team Logo" src="https://www.pngtube.com/myfile/detail/3-30381_basketball-icon-png-basketball-png.png" />
                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                              <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                  {team.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                  {team.full_name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                City:
                                  {' '}
                                  {team.city}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                Conference:
                                  {' '}
                                  {team.conference}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                Division:
                                  {' '}
                                  {team.division}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Typography variant="subtitle1">
Abbreviation:
                                {team.abbreviation}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  )
            }
    </div>
  )
}

const mapStateToProps = (state) => ({
  teams: state.teams,
})

TeamDetails.propTypes = {
  match: PropTypes.number.isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default connect(mapStateToProps, null)(TeamDetails)
