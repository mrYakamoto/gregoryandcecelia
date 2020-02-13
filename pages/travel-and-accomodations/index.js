import React from 'react'
import Layout from '../../components/layout';
import FadeIn from '../../components/fade-in';

const TravelAndAccomodations = () => (
  <Layout
    pageTitle="Travel &#38; Accomodations"
    pageName="travel-and-accomodations"
    headerText="Travel &#38; Accomodations"
  >
    <FadeIn className="fade-in-up--delay1">
      <section>
        <h3 className="bold">Logistics:</h3>
        <p>
          Airport -- Austin Bergstrom International Airport (AUS)
            </p>
      </section>
      <section>
        <h3 className="bold">Transportation: </h3>
        <p>
          Austin doesn't have a very robust public transportation system, so the easiest
          way to get around is with Lyft or Uber.
            </p>
        <p>
          We have arranged for a Lyft promo code the night of the wedding.
            </p>
      </section>
      <section>
        <h3 className="bold">Where to Stay: </h3>
        <p>
          Our wedding is in South Austin, where there aren't many hotel options. Therefore,
          we recommend staying downtown, which is only a 15-20min drive from the ceremony.
            </p>
        <p>
          Hotels can be pricey in Austin, so we also recommend looking at Airbnb and HomeAway.
          If you need help booking or want recommendations, please don't hesitate to ask!
            </p>
      </section>
    </FadeIn>
  </Layout>
)

export default TravelAndAccomodations
