import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchDrinks } from '../redux/actions/drinks-actions'
import Layout from './layout'

const App = ({ onFetchDrinks }) => {
  useEffect(() => {
    onFetchDrinks()
  }, [onFetchDrinks])
  return <Layout />
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
