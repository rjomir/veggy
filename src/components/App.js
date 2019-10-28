import React, { useEffect, useContext } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/styles'
import { fetchDrinks } from '../redux/actions/drinks-actions'
import Layout from './layout'
import AppContext from './AppContext'

const App = ({ onFetchDrinks }) => {
  const appState = useContext(AppContext)
  const { theme } = appState

  useEffect(() => {
    onFetchDrinks()
  }, [onFetchDrinks])

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  )
}

App.propTypes = {
  onFetchDrinks: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  onFetchDrinks: fetchDrinks,
}

export default connect(
  null,
  mapDispatchToProps,
)(App)
