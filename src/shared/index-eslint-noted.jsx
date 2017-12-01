// @flow
/* eslint-disable */
/* eslint comma-dangle: [2, "never"] comma-spacing: ["error", { "before": false, "after": true }] */

import 'babel-polyfill'

import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux' // eslint-disable-line no-unused-vars
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import App from './app'
import helloReducer from './reducer/hello'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
  // eslint-disable-next-line comma-spacing
  combineReducers({ hello: helloReducer }),
  composeEnhancers(applyMiddleware(thunkMiddleware)) // eslint-disable-line comma-spacing
)

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </Provider>

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
