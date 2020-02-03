import React from 'react'
import PageHead from '../../components/page-head';
import Header from '../../components/header'
import { useInView } from 'react-intersection-observer'
import '../main.less';
import './style.less';

const Home = () => {
  const [textRef, textInView] = useInView({
    /* Optional options */
    threshold: .1,
    triggerOnce: true
  });
  const [section1Ref, section1RefInView] = useInView({
    /* Optional options */
    threshold: .2,
    triggerOnce: true
  });
  const [section2Ref, section2RefInView] = useInView({
    /* Optional options */
    threshold: .2,
    triggerOnce: true
  });

  return (
    <div className="home">
      <PageHead pageTitle="Home" />
      <Header />

      <main>
          <div ref={textRef}>
            <h1 className={['home__header','fade-in-up',`${textInView ? 'active': ''}`].join(' ')}>Gregg and Cecelia are getting married!</h1>
            <div className='sexy-line short-line' />
            <p className={['subheader','fade-in',`${textInView ? 'active': ''}`].join(' ')}>We can't wait to celebrate with you.</p>
            <section className={['align-center', 'subheader','fade-in',`${textInView ? 'active': ''}`].join(' ')}>
              <p><span className="bold">Where: </span> Austin, TX</p>
              <p><span className="bold">When: </span>April 25th, 2020</p>
            </section>
          </div>
        <div ref={section1Ref}>
          <section className={['fade-in', `${section1RefInView ? 'active': ''}`].join(' ')}>
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
        </div>
        <div ref={section2Ref}>
          <section className={['fade-in', `${section2RefInView ? 'active': ''}`].join(' ')}>
            <h2>Our Engagement</h2>
            <p>
              In August 2019, we traveled to Lousiana to celebrate Cecelia's older brother graduating, her
              parent's 40th wedding anniversary, and her birthday. We decided to bookend the weekend with 2
              nights in New Orleans. Gregg proposed when we arrived, catching Cecelia completely off guard
              (her first response was "Really?"). Surprised and elated, they celebrated their first night as
              an engaged couple with a delicious frozen Irish coffee at the Erin Rose.
            </p>
            <p>
              We can't wait to get married - and are so happy and graateful for all the love and support and
              congratulations we've received from family and friends.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
