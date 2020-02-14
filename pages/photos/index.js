import React from 'react'
import Layout from '../../components/layout'
import FadeIn from '../../components/fade-in';
import ImageGallery from '../../components/image-gallery';

const images = [
  {
    caption: 'Universal Studios Hollywood',
    source: {
      thumbnail: '/photo2-thumb.jpg',
      regular: '/photo2.jpg',
      fullscreen: '/photo2.jpg',
    }
  },
  {
    caption: 'On the Cliffs of Moher',
    source: {
      thumbnail: '/photo1-thumb.jpg',
      regular: '/photo1.jpg',
      fullscreen: '/photo1.jpg',
    }
  },
  {
    caption: 'SXSW',
    source: {
      thumbnail: '/photo3-thumb.jpg',
      regular: '/photo3.jpg',
      fullscreen: '/photo3.jpg',
    }
  },
  {
    caption: 'Out West in Marfa, TX',
    source: {
      thumbnail: '/photo6-thumb.jpg',
      regular: '/photo6.jpg',
      fullscreen: '/photo6.jpg',
    }
  },
];

const Photos = () => (
  <Layout
    pageName="photos"
    pageTitle="Photos"
    headerText="Photos"
  >
    <FadeIn className="fade-in-up--delay1">
      <p className="subheader">Here are a few photos of us and some of our favorite memories.</p>
      <ImageGallery
        images={images}
      />
    </FadeIn>
  </Layout>
)

export default Photos
