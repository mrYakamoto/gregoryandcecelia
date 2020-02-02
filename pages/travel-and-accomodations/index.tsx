import React from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import '../main.less';

const TravelAndAccomodations = () => (
  <div>
    <Head>
      <title>Travel & Accomodations</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
        <h1>Travel & Accomodations</h1>
        <section>
          <p>
            <span className="bold">Logistics: </span>
            Airport -- Austin Bergstrom International Airport (AUS)
          </p>
        </section>
        <section>
          <p>
            <span className="bold">Transportation: </span>
            Austin doesn't have a very robust public transportation system, so the easiest
            way to get around is with Lyft or Uber.
          </p>
          <p>
            We have arranged for a Lyft promo code the night of the wedding.
          </p>
        </section>
        <section>
          <p>
            <span className="bold">Where to Stay: </span>
            Our wedding is in South Austin, where there aren't many hotel options. Therefore,
            we recommend staying downtown, which is only a 15-20min drive from the ceremony.
          </p>
          <p>
            Hotels can be pricey in Austin, so we also recommend looking at Airbnb and HomeAway.
            If you need help booking or want recommendations, please don't hesitate to ask!
          </p>
        </section>
    </main>
   
  </div>
)

export default TravelAndAccomodations
