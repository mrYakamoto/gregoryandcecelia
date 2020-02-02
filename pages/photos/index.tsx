import React from 'react'
import PageHead from '../../components/page-head';
import Header from '../../components/header'
import '../main.less';

const Photos = () => (
  <div>
    <PageHead pageTitle="Photos" />
    <Header />
    <main>
        <h1>Photos</h1>
        <p className="subheader">Here are a few photos of us and some of our favorite memories.</p>
    </main>
   
  </div>
)

export default Photos
