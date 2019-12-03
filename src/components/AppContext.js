import React from 'react'

export const themes = {
  light: {
    color: '#FFFFFF',
  },
  dark: {
    color: '#F5F5DC',
  },
}

const AppContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})
export const AppProvider = AppContext.Provider
export const AppConsumer = AppContext.Consumer

export default AppContext
