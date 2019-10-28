import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import DrawerList from './drawer'
import CustomAppBar from './appBar'
import ItemList from './itemList'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
})

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleDrawerOpen = () => {
    this.setState(() => ({
      open: true,
    }))
  }

  handleDrawerClose = () => {
    this.setState(() => ({
      open: false,
    }))
  }

  render() {
    const { classes } = this.props
    const { open } = this.state
    return (
      <Fragment>
        <div className={classes.root}>
          <CssBaseline />
          <CustomAppBar
            open={open}
            handleDrawerOpen={() => this.handleDrawerOpen()}
          />
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={() => this.handleDrawerClose()}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <DrawerList />
            <Divider />
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <ItemList />
          </main>
        </div>
      </Fragment>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Layout)
