import React from 'react'
import Layout from '../../components/layout';
import '../main.less';

const TravelAndAccomodations = () => (
  <Layout
    pageTitle="Travel & Accomodations"
    pageName="travel-and-accomodations"
  >
    <h1>Travel & Accomodations</h1>
    <section>
      <p className="bold">Logistics:</p>
      <p>
        Airport -- Austin Bergstrom International Airport (AUS)
          </p>
    </section>
    <section>
      <p className="bold">Transportation: </p>
      <p>
        Austin doesn't have a very robust public transportation system, so the easiest
        way to get around is with Lyft or Uber.
          </p>
      <p>
        We have arranged for a Lyft promo code the night of the wedding.
          </p>
    </section>
    <section>
      <p className="bold">Where to Stay: </p>
      <p>
        Our wedding is in South Austin, where there aren't many hotel options. Therefore,
        we recommend staying downtown, which is only a 15-20min drive from the ceremony.
          </p>
      <p>
        Hotels can be pricey in Austin, so we also recommend looking at Airbnb and HomeAway.
        If you need help booking or want recommendations, please don't hesitate to ask!
          </p>
    </section>
  </Layout>
)

export default TravelAndAccomodations