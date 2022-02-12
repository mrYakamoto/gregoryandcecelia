import React from 'react';
import Layout from '../../components/layout';
import FadeIn from '../../components/fade-in';
import './style.less';

const FAQ = () => (
  <Layout
    pageTitle="FAQ"
    pageName="faq"
    headerText="FAQ"
  >
    <FadeIn className="fade-in-up--delay1">
      <section>
        <div className="card">
          <h3 className="card__question bold">When are RSVPs due?</h3>
          <p className="card__answer">
            Even if you previously RSVP’d, please send us an updated response for our
            2022 date, so we can be sure of your plans.
            Please RSVP as soon as you can confirm your attendance and no later than
            February 25th, 2022.
          </p>
        </div>
        <div className="card">
          <h3 className="card__question bold">Do guests need a COVID-19 vaccination?</h3>
          <p className="card__answer">
            Yes, we respectfull ask that all guests be vaccinated against COVID-19 to
            protect the health of our loved ones. If you have any questions or concerns
            about this, please reach out to us.
            </p>
        </div>
        <div className="card">
          <h3 className="card__question bold">Can I bring a date?</h3>
          <p className="card__answer">
            Oh la la. In order to keep our guest list on track we are only able to
            accommodate those guests formally invited on your wedding invitation.
            Please e-mail us with any questions!
            </p>
        </div>
        <div className="card">
          <h3 className="card__question bold">Is there a dress code?</h3>
          <p className="card__answer">
            Think garden party (spring, relaxed, cocktail attire). Our wedding takes place
            completely outdoors, and if luck is on our side we will be celebrating amidst
            a big wildflower meadow.

            YES - it will be completely outdoors and on a lawn. This means we recommend low,
            wedge, or no heels. We also recommend bringing layers, as an April night could
            get chilly.
            </p>
        </div>
        <div className="card">
          <h3 className="card__question bold">What will the weather be like?</h3>
          <p className="card__answer">
            Austin can be incredibly unpredictable in the Spring, but we're hoping it will
            be nice! Here's what the average are for April 25th in Austin:
            Average High: 76
            Average Low: 60

            We recommend bringing a jacket for the evening just in case.
            </p>
        </div>
        <div className="card">
          <h3 className="card__question bold">Will parking be available?</h3>
          <p className="card__answer">
            Yes and no! There will be street parking on Albert Rd, but we encourage you to
            use ride shares (Lyft or Uber) to get to the event. This will cut down the
            number of cars on the street and also enable you to have a fun, carefree time.

            If you are staying around Downtown, please let us know if you'd like a ride in
            our shuttle bus. It will be transporting people from the Hilton Downtown.
            Please reach out to us if you need help or want to carpool!
            </p>
        </div>
        <div className="card">
          <h3 className="card__question bold">Will transportation be provided to the ceremony and/or reception?</h3>
          <p className="card__answer">
            Yes - we have a shuttle bus leaving from the Hilton Downtown and transporting
            people back again at the end of the night. It’s large, but let us know if you
            are interested so we can get an accurate headcount of who would like a ride.

            Otherwise, please plan on Rideshares.
          </p>
        </div>
        <div className="card">
          <h3 className="card__question bold">What if I have dietary restrictions?</h3>
          <p className="card__answer">
            Please reach out to us! Many items on the menu are already gluten free and we
            will have a variety of beverages, alcoholic and nonalcoholic.
          </p>
          <p>
            We want to make sure everyone has what they need in terms of food & drink, so
            please reach out to us about your specific needs.
          </p>
        </div>
        <div className="card">
          <h3 className="card__question bold">How late does the party go?</h3>
          <p className="card__answer">
            Officially we are saying 10:30p, however since it will be on private property,
            we plan to stay up and have a campfire for those who'd like to join us.
            </p>
        </div>
        <div className="card">
          <h3 className="card__question bold">Do you have any hotel room blocks?</h3>
          <p className="card__answer">
            No, we don't have any rooms blocked at hotels, but we may be able to help
            you find a spot. We recommend looking at hotels in Downtown Austin.

            We are also recommending Airbnb as an option. We would be happy to let you know
            who's coming so that you can organize a shared place with someone you know!
            </p>
        </div>
        <div className="card">
          <h3 className="card__question bold">Can I bring my Children?</h3>
          <p className="card__answer">
            We have only invited kids from our immediate family (3 of them). In order to allow
            all guests, including parents, an evening of relaxation we have only invited family
            members and very young children or infants. We hope this advance notice means you
            are still able to share our big day and will enjoy having the evening off!
          </p>
        </div>
      </section>
    </FadeIn>
  </Layout>
)

export default FAQ
