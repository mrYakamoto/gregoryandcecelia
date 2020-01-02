import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import './main.less';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <h1>Gregg and Cecelia dot com</h1>
    <img height='500px' width='auto' src = '/invite.jpg' />
  </div>
)

export default Home
