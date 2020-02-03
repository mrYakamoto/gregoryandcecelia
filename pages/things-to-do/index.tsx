import React from 'react'
import Layout from '../../components/layout';
import '../main.less';

const ThingsToDo = () => (
    <Layout
        pageTitle="Things to do"
        pageName="things-to-do"
    >
        <h1>Things to do</h1>
        <p className="subheader">
            Austin is a fun, vibrant city full of things to do! If you're able to come in
            early and want to explore the city, here are a few of our favorite spots.
        </p>
        <section>
            <h2>Activities & Outdoors: </h2>
            <ul>
                <li>Barton Springs</li>
                <li>Hiking the Greenbelt</li>
                <li>Mt Bonnell - especially at sunset</li>
                <li>Lady Bird Lake Hike and Bike Trail</li>
                <li>Canoeing or stand-up paddle boarding on the Colorado River</li>
                <li>Picnics in Zilker Park</li>
                <li>Peter Pan mini-golf (byob)</li>
            </ul>
        </section>
        <section>
            <h2>Food:</h2>
            <ul>
                <li>Ramen Tatsu-ya</li>
                <li>Austin Daily Press</li>
                <li>Veracruz tacos</li>
                <li>Terry Black's BBQ</li>
            </ul>
        </section>
        <section>
            <h2>Drinks:</h2>
            <ul>
                <li>Peche (cocktails)</li>
                <li>Schoolhouse Pub & Techo</li>
            </ul>
        </section>
        <section>
            <h2>Music and Night Life:</h2>
            <ul>
                <li>The White Horse - country music & dancing</li>
                <li>The Continental Club</li>
                <li>Skylark Lounge - blues & jazz</li>
                <li>The Elephant Room - jazz</li>
                <li>Hotel Vegas - Austin's hipster mecca</li>
            </ul>
        </section>
    </Layout >
)

export default ThingsToDo
