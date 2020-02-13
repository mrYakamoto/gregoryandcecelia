import React from 'react'
import Layout from '../../components/layout';
import FadeIn from '../../components/fade-in';

const WeddingDetails = () => (
    <Layout
      pageTitle="Wedding Details"
      pageName="wedding-details"
      headerText="Wedding Details"
    >
      <FadeIn className="fade-in-up--delay1">
        <p className="subheader">
          Here's what to expect during our wedding weekend.
        </p>
        <p className="subheader">We can't wait to celebrate with you!</p>
        <section>
          <h2>Friday</h2>
          <h3>7:00pm Reception Dinner at Mattie's</h3>
          <p>811 W Live Oak St</p>
          <p>Austin, TX 78704</p>
          <a
            href="https://mattiesaustin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            mattiesaustin.com
          </a>
          <p><span className='bold'>Attire: </span>Cocktail</p>
        </section>
        <section>
          <h2>Saturday</h2>
          <h3>5:00pm Our wedding!</h3>
          <p>Ceremony & reception to be generously hosted by Doug & Carmen Wehmeier</p>
          <p>7400 Albert Rd</p>
          <p>Austin, TX 78745</p>
        </section>
        <iframe
          width="100%"
          height="450"
          // frameborder="0"
          style={{border:0}}
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ99rytqNMW4YRMmYNj-yfWag&key=${process.env.MAP_KEY}`}
          // allowfullscreen
        />
      </FadeIn>
  </Layout>
)

export default WeddingDetails;