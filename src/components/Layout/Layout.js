import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Snack from '../Snackbar/Snack'
import TeamList from '../Team/TeamList'
import TeamDetails from '../Team/TeamDetails'
import TeamSquad from '../Team/TeamSquad'

const Layout = () => (
  <>
    <Snack />
    <Header />
    <BrowserRouter>
      <Switch>
        <Route
          render={() => <TeamList />}
          exact
          path="/"
        />
        <Route
          path="/team/:id"
          // render={(params) => <TeamDetails {...params} />}
          render={({ match }) => <TeamDetails match={match} />}
        />
        <Route
          path="/squad/:id"
          // render={(params) => <TeamSquad {...params} />}
          render={({ match }) => <TeamSquad match={match} />}
        />
        {/* <Route path="/team/squad/:id">
                        <TeamSquad />
                    </Route>  */}
      </Switch>
    </BrowserRouter>
    {/* <Footer /> */}
  </>

)

export default Layout
