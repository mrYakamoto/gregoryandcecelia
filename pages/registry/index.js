import React from 'react'
import Layout from '../../components/layout';
import FadeIn from '../../components/fade-in';
import './style.less';

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
          Thank you for visiting our registry page. After two years of postponement,
          please know that the greatest gift you could give us would be your attendance
          to our wedding and sharing time with us!
        </p>
        <p>
          We are currently adding onto our very small bungalow home in East Austin. We are most
          excited to finally have a functional kitchen and have focused our registry there.
        </p>
        <p>
          Thank you so much for keeping us in your minds and hearts. We're so grateful for all of you!
        </p>
        <div className="cool-button__wrapper">
          <div className="cool-button__container">
            <a
              href="https://www.zola.com/registry/gregoryandcecelia"
              rel="noopener noreferrer"
              target="_blank"
              className="cool-button"
            >
              <span className="cool-button__text h3">Visit Our Wedding Registry</span>
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  </Layout>
);

export default Registry
