import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Typography, Box } from '@material-ui/core'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import drinkInfoSelector from '../../../redux/selectors/drink-info-selectors'
import { fetchDrinkInfo } from '../../../redux/actions/drink-info-actions'

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: '40vw',
    maxWidth: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const DrinkDetails = ({ id, info, onFetchDrinkInfo }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(false)
  const url = window.location.href

  function handleExpandClick() {
    setExpanded(!expanded)
  }

  const didClickOnFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  useEffect(() => {
    onFetchDrinkInfo(id)
  }, [id, onFetchDrinkInfo])

  return info ? (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar}>
            {info.strAlcoholic.charAt(0)}
          </Avatar>
)}
        title={info.strDrink}
      />
      <CardMedia
        className={classes.media}
        image={info.strDrinkThumb}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {' '}
          {info.strInstructions}
          {' '}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={didClickOnFavorite}
          color={isFavorite ? 'secondary' : 'default'}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <CopyToClipboard text={url}>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CopyToClipboard>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          {info.strIngredient1 ? (
            <Typography>
              {' '}
              {info.strMeasure1 ? info.strMeasure1 : ''} 
              {' '}
              {info.strIngredient1}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient2 ? (
            <Typography>
              {' '}
              {info.strMeasure2 ? info.strMeasure1 : ''} 
              {' '}
              {info.strIngredient2}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient3 ? (
            <Typography>
              {' '}
              {info.strMeasure3 ? info.strMeasure3 : ''} 
              {' '}
              {info.strIngredient3}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient4 ? (
            <Typography>
              {' '}
              {info.strMeasure4 ? info.strMeasure4 : ''} 
              {' '}
              {info.strIngredient4}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient5 ? (
            <Typography>
              {' '}
              {info.strMeasure5 ? info.strMeasure5 : ''} 
              {' '}
              {info.strIngredient5}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient6 ? (
            <Typography>
              {' '}
              {info.strMeasure6 ? info.strMeasure6 : ''} 
              {' '}
              {info.strIngredient6}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient7 ? (
            <Typography>
              {' '}
              {info.strMeasure7 ? info.strMeasure7 : ''} 
              {' '}
              {info.strIngredient7}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient8 ? (
            <Typography>
              {' '}
              {info.strMeasure8 ? info.strMeasure8 : ''} 
              {' '}
              {info.strIngredient8}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient9 ? (
            <Typography>
              {' '}
              {info.strMeasure9 ? info.strMeasure9 : ''} 
              {' '}
              {info.strIngredient9}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient10 ? (
            <Typography>
              {' '}
              {info.strMeasure10 ? info.strMeasure10 : ''}
              {' '}
              {info.strIngredient10}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient11 ? (
            <Typography>
              {' '}
              {info.strMeasure11 ? info.strMeasure11 : ''}
              {' '}
              {info.strIngredient11}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient12 ? (
            <Typography>
              {' '}
              {info.strMeasure12 ? info.strMeasure12 : ''}
              {' '}
              {info.strIngredient12}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient13 ? (
            <Typography>
              {' '}
              {info.strMeasure13 ? info.strMeasure13 : ''}
              {' '}
              {info.strIngredient13}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient14 ? (
            <Typography>
              {' '}
              {info.strMeasure14 ? info.strMeasure14 : ''}
              {' '}
              {info.strIngredient14}
            </Typography>
          ) : (
            <div />
          )}
          {info.strIngredient15 ? (
            <Typography>
              {' '}
              {info.strMeasure15 ? info.strMeasure15 : ''}
              {' '}
              {info.strIngredient15}
            </Typography>
          ) : (
            <div />
          )}
        </CardContent>
      </Collapse>
    </Card>
  ) : (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: '50%' }}
    >
      <CircularProgress color="secondary" />
    </Box>
  )
}

const mapStateToProps = state => ({
  info: drinkInfoSelector(state),
})

const mapDispatchToProps = {
  onFetchDrinkInfo: fetchDrinkInfo,
}

DrinkDetails.propTypes = {
  info: PropTypes.shape({ strAlcoholic: PropTypes.string }),
  id: PropTypes.string.isRequired,
  onFetchDrinkInfo: PropTypes.func.isRequired,
}

DrinkDetails.defaultProps = {
  info: {},
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrinkDetails)
