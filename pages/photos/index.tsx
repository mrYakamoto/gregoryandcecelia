import React from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import '../main.less';

const Photos = () => (
  <div>
    <Head>
      <title>Photos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
        <h1>Photos</h1>
        <p className="subheader">Here are a few photos of us and some of our favorite memories.</p>
    </main>
   
  </div>
)

export default Photos
