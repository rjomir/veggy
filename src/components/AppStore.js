import React from 'react'
import PropTypes from 'prop-types'
import { AppProvider, themes } from './AppContext'

class AppStore extends React.Component {
  constructor(props) {
    super(props)

    const toggleTheme = () => {
      this.setState((state) => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }))
    }

    this.state = {
      theme: themes.light,
      toggleTheme,
    }
  }


  render() {
    const { children } = this.props
    const { theme, toggleTheme } = this.state
    const value = {
      theme,
      toggleTheme,
    }
    return (
      <AppProvider value={value}>{children}</AppProvider>
    )
  }
}

AppStore.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppStore
