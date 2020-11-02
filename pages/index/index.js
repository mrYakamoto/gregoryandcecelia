import React from 'react'
import Layout from '../../components/layout';
import FadeIn from '../../components/fade-in';
import './style.less';

const Home = () => {
  return (
    <Layout
      pageName="home"
      pageTitle="Home"
      headerText="Gregg and Cecelia are getting married!"
    >
      <FadeIn className="fade-in-up--delay1">
          <p className='subheader'>
            We can't wait to celebrate with you!
          </p>
        <section className='align-center subheader'>
          <p><span className="bold">Where: </span> Austin, TX</p>
          <p><span className="bold">When: </span>April 24th, 2021</p>
        </section>
        <section>
          <h2>Our Story</h2>
          <p>
            Long story short, we met at work. While we actually worked a the same office for several months,
            we didn't really meet until Cecelia resigned. At her going away party, we realized that we both
            lived on 34th ST and Gregg gave her a ride home.
            </p>
          <p>
            The next week, Gregg asked Cecelia out. For our first date, Gregg and Cecelia walked to get drinks
            at Hopfields, a restaurant in our neighborhood. It went well, and before long we were spending
            a lot of time together.
            </p>
          <p>
            Flash forward three years, and here we are! We've had an amazing, fun, loving relationship filled
            with music, movies, travel, and now, a little dog named Oizo.
            </p>
        </section>
        <section>
          <h2>Our Engagement</h2>
          <p>
            In August 2019, we traveled to Lousiana to celebrate Cecelia's older brother graduating, her
            parent's 40th wedding anniversary, and her birthday. We decided to bookend the weekend with 2
            nights in New Orleans. Gregg proposed when we arrived, catching Cecelia completely off guard
            (her first response was "Really?"). Surprised and elated, they celebrated their first night as
            an engaged couple with a delicious frozen Irish coffee at the Erin Rose.
            </p>
          <p>
            We can't wait to get married - and are so happy and grateful for all the love and support and
            congratulations we've received from family and friends.
            </p>
        </section>
      </FadeIn>
    </Layout>
  )
}

export default Home
