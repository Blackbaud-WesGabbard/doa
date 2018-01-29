import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import home from './home'
import sessionPage from './sessionPage'
import sessionUser from './sessionUser'

// @reducers

const middleware = process.env.NODE_ENV === 'production'
  ? [thunk]
  : [thunk, createLogger()]

export const configureStore = (initialState = {}) => (
  createStore(
    combineReducers({
      home,
      sessionPage,
      sessionUser
    }),
    initialState,
    applyMiddleware(...middleware)
  )
)

export default configureStore({})
