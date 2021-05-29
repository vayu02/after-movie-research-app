import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Starred from './pages/Starred'

const App = () => {
  return (
  <Switch>
    <Route exact path='/'><Homepage /></Route>
    <Route exact path='/starred'><Starred /></Route>
    <Route>
      <div>404</div>
    </Route>
  </Switch>
  )
}

export default App
