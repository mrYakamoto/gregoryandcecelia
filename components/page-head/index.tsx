import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types';

const PageHead = ({
    pageTitle
}) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="Gregory and Cecelia are getting married!" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Dancing+Script:600|Montserrat:400,500&display=auto"
      />
    </Head>
  </>
)

PageHead.propTypes = {
  pageTitle: PropTypes.string
}

export default PageHead;
