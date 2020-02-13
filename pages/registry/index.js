import React from 'react'
import Layout from '../../components/layout';
import FadeIn from '../../components/fade-in';

const Registry = () => (
  <Layout
    pageTitle="Registry"
    pageName="registry"
    headerText="Registry"
  >
    <FadeIn className="fade-in-up--delay1">
      <section>
        <h3>Hello friends and family!</h3>
        <p>
          Thank you for visiting our registry page. Please know that the greatest gift you could
          give us would be your attendance to our wedding and sharing time with us!
        </p>
        <p>
          We live in a cozy little house in East Austin and don't have space for too many things.
          Although we have a few traditional gifts on our registry and some household upgrades,
          we decided to make our honeymoon, kick starting our new married life, and a few
          charities the focal point of our registry. If you'd like, please help send us along
          on a memorable trip by contributing to some of our honeymoon experiences.
        </p>
        <p>
          Thank you so much for keeping us in your minds and hearts. We're so grateful for all of you!
        </p>
        <h3 style={{
          border: '1px solid red',
          display: 'inline-block',
          padding: '10px'
        }}>
          Link to registry coming soon
        </h3>
      </section>
    </FadeIn>
  </Layout>
)

export default Registry
