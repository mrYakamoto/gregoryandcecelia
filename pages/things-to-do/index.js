import React from 'react'
import Layout from '../../components/layout';
import FadeIn from '../../components/fade-in';

const ThingsToDo = () => (
    <Layout
        pageTitle="Things to do"
        pageName="things-to-do"
        headerText="Things to do"
    >
        <FadeIn className="fade-in-up--delay1">
            <div className="subheader-wrapper">
                <p className="subheader">
                    Austin is a fun, vibrant city full of things to do! If you're able to come in
                    early and want to explore the city, here are a few of our favorite spots.
                </p>
            </div>
            <section>
                <h2>Activities & Outdoors</h2>
                <ul>
                    <li>Barton Springs</li>
                    <li>Picnics in Zilker Park</li>
                    <li>Zilker Botanical Garden</li>
                    <li>Mt Bonnell - especially at sunset (will need to drive there)</li>
                    <li>Lady Bird Lake Hike and Bike Trail</li>
                    <li>Austin Rowing Club for Canoeing or stand-up paddle boarding on the Colorado River</li>
                    <li>Picnics in Zilker Park</li>
                    <li>Peter Pan mini-golf (byob)</li>
                    <li>Hiking the Greenbelt (best entrances are off Mopac - Loop 1 - or in the
                        Barton Hills neighborhood, near Barton Hills Elementary. NOTE - these are
                        not stroller or wheelchair accessible)
                    </li>
                </ul>
            </section>
            <section>
                <h2>Food</h2>
                <ul>
                    <li>Ramen Tatsu-ya</li>
                    <li>Austin Daily Press</li>
                    <li>Veracruz tacos</li>
                    <li>Terry Black's BBQ</li>
                    <li>Russian House - for something a little different!</li>
                    <li>Home Slice pizza on S. Congress</li>
                    <li>Texas Chili Parlor</li>
                    <li>Easy Tiger</li>
                </ul>
            </section>
            <section>
                <h2>Cocktails</h2>
                <ul>
                    <li>Peche (cocktails)</li>
                    <li>Small Victory</li>
                    <li>Higher Ground</li>
                    <li>Garage Bar</li>
                    <li>Schoolhouse Pub & Techo</li>
                </ul>
            </section>
            <section>
                <h2>Music and Night Life</h2>
                <ul>
                    <li>The White Horse - country music & dancing</li>
                    <li>The Continental Club</li>
                    <li>Skylark Lounge - blues & jazz</li>
                    <li>The Elephant Room - jazz</li>
                    <li>Hotel Vegas - Austin's hipster mecca</li>
                </ul>
            </section>
        </FadeIn>
    </Layout >
)

export default ThingsToDo
