import React from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import '../main.less';
import './style.less';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main>
      <img className='invite' src='/invite.jpg' />
    </main>
   
  </div>
)

export default Home
