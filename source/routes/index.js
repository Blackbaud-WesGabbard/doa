import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from './Root'
import Home from './Home'
import About from './About'
import FAQ from './FAQ'
import ResetPassword from './ResetPassword'

export default (
  <Route path='/' component={Root}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='faq' component={FAQ} />
    <Route path='reset-password' component={ResetPassword} />
  </Route>
)
