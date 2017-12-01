// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import Helmet from 'react-helmet' // eslint-disable-line no-unused-vars

import HelloAsyncButton from '../../container/hello-async-button' // eslint-disable-line no-unused-vars
import MessageAsync from '../../container/message-async' // eslint-disable-line no-unused-vars

const title = 'Async Hello Page'

const HelloAsyncPage = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <MessageAsync />
    <HelloAsyncButton />
  </div>

export default HelloAsyncPage
