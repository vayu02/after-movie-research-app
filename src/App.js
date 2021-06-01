import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import Homepage from './pages/Homepage'
import Showpage from './pages/Showpage'
import Starred from './pages/Starred'

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path='/'><Homepage /></Route>
        <Route exact path='/starred'><Starred /></Route>
        <Route exact path='/show/:id'><Showpage /></Route>
        <Route>
          <div>404</div>
        </Route>
    </Switch>
  </ThemeProvider>
  )
}

export default App
