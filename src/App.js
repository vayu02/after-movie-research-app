import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Homepage from './pages/Homepage'
import Starred from './pages/Starred'

const App = () => {
  return (

    <div>
      <Nav />
      <Switch>
        <Route exact path='/'><Homepage /></Route>
        <Route exact path='/starred'><Starred /></Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
    </div>

  )
}

export default App
