import React from 'react' // eslint-disable-line no-unused-vars
import Helmet from 'react-helmet' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars
import { HOME_PAGE_ROUTE } from '../../routes'

const title = 'Page Not Found'

const NotFoundPage = () =>
  <div className="container mt-4">
    <Helmet title={title} />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <div><Link to={HOME_PAGE_ROUTE}>Go to the homepage</Link>.</div>
      </div>
    </div>
  </div>

export default NotFoundPage
