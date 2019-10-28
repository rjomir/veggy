import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import red from '@material-ui/core/colors/red'
import indigo from '@material-ui/core/colors/indigo'
import green from '@material-ui/core/colors/green'
import { createMuiTheme } from '@material-ui/core/styles'
import { AppProvider } from './AppContext'

export const defaultTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: indigo,
    error: red,
  },
})

export const greenTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
    error: red,
  },
})

export const themes = {
  default: defaultTheme,
  green: greenTheme,
}

const AppStore = ({ children }) => {
  const [appState, setAppState] = useState({
    theme: themes.default,
  })

  const updateState = (prop, newVal) => {
    setAppState(prevState => ({
      ...prevState,
      [prop]: newVal,
    }))
  }

  useEffect(() => {
    updateState('updateState', updateState)
  }, [])

  return <AppProvider value={appState}>{children}</AppProvider>
}

AppStore.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppStore
