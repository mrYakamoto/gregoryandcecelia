import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types';

const PageHead = ({
    pageTitle
}) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Meddon|Raleway:400,700&display=auto"
      />
    </Head>
  </>
)

PageHead.propTypes = {
  pageTitle: PropTypes.string
}

export default PageHead;
