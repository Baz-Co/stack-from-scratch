// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import Helmet from 'react-helmet' // eslint-disable-line no-unused-vars

import MessageAsync from '../../container/message-async' // eslint-disable-line no-unused-vars
import HelloAsyncButton from '../../container/hello-async-button' // eslint-disable-line no-unused-vars

const title = 'Async Hello Page'

const HelloAsyncPage = () =>
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <MessageAsync />
        <HelloAsyncButton />
      </div>
    </div>
  </div>

export default HelloAsyncPage
