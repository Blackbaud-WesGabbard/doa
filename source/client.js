import React from 'react'
import routes from './routes'
import { createClient } from 'boiler-room-runner'
import { render } from 'react-dom'
import { updateClient } from 'supporticon/utils/client'
import { configureStore } from './store'
import createLocals from './lib/createLocals'
import { load, save } from './lib/localStorage'
import 'minimal.css'

if (typeof Promise === 'undefined') {
  require('es6-promise').polyfill()
}

updateClient({ baseURL: process.env.SUPPORTER_URL })

const initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
const loadedState = load('app-state')
const store = configureStore({
  ...initialState,
  ...loadedState
})

store.subscribe(() => {
  const { sessionPage, sessionUser } = store.getState()
  save('app-state', { sessionPage, sessionUser })
})

const basepath = process.env.BASE_PATH
const App = createClient({ basepath, routes, store, createLocals })

render(<App />, document.getElementById('mount'))
