import React from 'react'
import Layout from '../../components/layout';
import FadeIn from '../../components/fade-in';

const RSVP = () => {
  return (
    <Layout
      pageName="rsvp"
      pageTitle="RSVP"
      headerText="RSVP"
    >
      <FadeIn className="fade-in-up--delay1">
        <p className="subheader">
          Feel free to RSVP here or by mailing back the RSVP card from your written invitation.
        </p>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shr0IJyX6pem79B6k?backgroundColor=purple"
          frameBorder="0"
          onmousewheel=""
          width="100%"
          height="1419"
          style={{
            background: 'transparent',
            border: '1px solid #ccc'
          }}
        />
      </FadeIn>
    </Layout>
  )
}

export default RSVP;
