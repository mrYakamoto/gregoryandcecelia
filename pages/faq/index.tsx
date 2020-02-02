import React from 'react'
import PageHead from '../../components/page-head';
import Header from '../../components/header'
import '../main.less';

const FAQ = () => (
  <div>
    <PageHead pageTitle="FAQ" />
    <Header />
    <main>
      <h1>FAQ</h1>
      <section>
        <div className="card">
          <p className="card__question">When are RSVPs due?</p>
          <p className="card__answer">
            Plase RSVP as soon as you can confirm your attendance, and no later than
            March 25th, 2020.
          </p>
        </div>
        <div className="card">
          <p className="card__question">Can I bring a date?</p>
          <p className="card__answer">
            Oh la la. In order to keep our guest list on track we are only able to
            accommodate those guests formally invited on your wedding invitation.
            Please feel free to e-mail us with any questions!
          </p>
        </div>
        <div className="card">
          <p className="card__question">Is there a dress code?</p>
          <p className="card__answer">
            Think garden party (spring, relaxed, cocktail attire). Our wedding takes place
            completely outdoors, and if luck is on our side we will be celebrating amidst
            a big wildflower meadow.

            This means we recommend low, wedge, or no heels. We also recommend bringing
            layers, as an April night can get chilly.
          </p>
        </div>
        <div className="card">
          <p className="card__question">What will the weather be like</p>
          <p className="card__answer">
            Austin can be incredibly unpredictable in the Spring, but we're hoping it will
            be nice! Here's what the average are for April 25th in Austin:
            Average High: 80
            Average Low: 59

            We recommend bringing a jacket for the evening just in case.
          </p>
        </div>
        <div className="card">
          <p className="card__question">Will parking be available?</p>
          <p className="card__answer">
            Yes an no! There will be street parking on Albert Rd, but we encourage you to
            use ride shares (Lyft or Uber) to get to the event. This will cut down the
            number of cars on the street and also enable you to have a fun, carefree time.

            If you are staying with, or near, others you can make sure group travelling.
            Please reach out to us if you need help or want to carpool!
          </p>
        </div>
        <div className="card">
          <p className="card__question">Will transportation be provided to the ceremony and/or reception?</p>
          <p className="card__answer">
            Not specifically. Please use ride shares and our Lyft promo code to get to the event.
          </p>
        </div>
        <div className="card">
          <p className="card__question">What if I have dietary restrictions?</p>
          <p className="card__answer">
            Please reach out to us! Many items on the menu are already gluten free and we
            will have a variety of beverages, alcoholic and nonalcoholic.

            We want to make sure everyone has what they need in terms of food & drink, so please
            reach out to us about your specific needs.
          </p>
        </div>
        <div className="card">
          <p className="card__question">How late does the party go?</p>
          <p className="card__answer">
            Officially we are saying INSERT_TIME, however since it will be on private property,
            we plan to stay up and have a campfire for those who'd like to join us.
          </p>
        </div>
        <div className="card">
          <p className="card__question">Do you have any hotel room blocks?</p>
          <p className="card__answer">
            No, we don't have any rooms blocked at hotels. We recommend looking at hotels in
            Downtown Austin.

            We are also recommending Airbnb as an option. We would be happy to let you know
            who's coming so that you can organize a shared place with someone you know!
          </p>
        </div>
        <div className="card">
          <p className="card__question">Can I bring my Children?</p>
          <p className="card__answer">
            In order to allow all guests, including parents, an evening of relaxation, we have chosen
            for our wedding day to be an adult-only occassion. We hope this advance notice means you
            are still able to share our big day and will enjoy having the evening off!
          </p>
        </div>
      </section>
    </main>
   
  </div>
)

export default FAQ
