import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { addFavoriteTeam, removeFavoriteTeam } from '../../redux/actions/favorite-teams-actions'

const Team = ({
  team, onAddFavoriteTeam, favoriteTeams, onRemoveFavoriteTeam,
}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favoriteTeam = favoriteTeams.find((ft) => ft.id === team.id)
    if (favoriteTeam) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [favoriteTeams, team])

  const handleOnClick = (t) => {
    if (isFavorite) {
      onRemoveFavoriteTeam(t)
      // setIsFavorite(false)
    } else {
      onAddFavoriteTeam(t)
      // setIsFavorite(true)
    }
  }

  return (
    <Card style={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Basketball Team Logo"
          height="140"
          image="basketball.png"
          title={team.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {team.full_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Games</Button>
        <Link component={RouterLink} to={`/squad/${team.id}`}>
          <Button size="small" color="primary">Squad</Button>
        </Link>
        <Link component={RouterLink} to={`/team/${team.id}`}>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Link>
        <IconButton onClick={() => handleOnClick(team)}>
          {!isFavorite ? <StarBorderIcon /> : <StarIcon /> }
        </IconButton>
      </CardActions>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  favoriteTeams: state.favoriteTeams,
})

const mapDispatchToProps = {
  onAddFavoriteTeam: addFavoriteTeam,
  onRemoveFavoriteTeam: removeFavoriteTeam,
}

Team.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    full_name: PropTypes.string,
  }).isRequired,
  favoriteTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddFavoriteTeam: PropTypes.func.isRequired,
  onRemoveFavoriteTeam: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)
