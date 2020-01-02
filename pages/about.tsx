import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import './main.less';

const Home = () => (
  <div>
    <Head>
      <title>About us</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <h1>About us page</h1>
  </div>
)

export default Home
