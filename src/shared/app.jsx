// @flow

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Switch } from 'react-router' // eslint-disable-line no-unused-vars
import { Route } from 'react-router-dom' // eslint-disable-line no-unused-vars
import Helmet from 'react-helmet' // eslint-disable-line no-unused-vars
import { APP_NAME } from './config'
import Nav from './component/nav' // eslint-disable-line no-unused-vars
import HomePage from './component/page/home' // eslint-disable-line no-unused-vars
import HelloPage from './component/page/hello' // eslint-disable-line no-unused-vars
import HelloAsyncPage from './component/page/hello-async' // eslint-disable-line no-unused-vars
import NotFoundPage from './component/page/not-found'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
} from './routes'

const App = () =>
  <div style={{ paddingTop: 54 }}>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

export default App
