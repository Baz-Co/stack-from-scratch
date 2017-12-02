import React from 'react' // eslint-disable-line no-unused-vars
import Helmet from 'react-helmet' // eslint-disable-line no-unused-vars

import HelloButton from '../../container/hello-button' // eslint-disable-line no-unused-vars
import Message from '../../container/message' // eslint-disable-line no-unused-vars

const title = 'Hello Page'

const HelloPage = () =>
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <Message />
        <HelloButton />
      </div>
    </div>
  </div>

export default HelloPage
