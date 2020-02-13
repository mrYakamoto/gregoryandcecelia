import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Carousel, { Modal, ModalGateway } from 'react-images';

const FooterCaption = (props) => {
  const { currentView } = props;
  const { caption } = currentView;

  return (
    <span>
      {caption}
    </span>
  );
};

FooterCaption.propTypes = {
  currentView: PropTypes.shape,
  isModala: PropTypes.bool,
}


export default class ImageGallery extends Component {
  state = {
    selectedIndex: 0,
    lightboxIsOpen: false,
  };

  toggleLightbox = (selectedIndex) => {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }));
  };

  render() {
    const { images, isLoading } = this.props;
    const { selectedIndex, lightboxIsOpen } = this.state;

    return (
      <>
        {!isLoading ? (
          <Gallery>
            {images.map(({caption, source }, j) => (
              <Image onClick={() => this.toggleLightbox(j)} key={source.thumbnail}>
                <img
                  alt={caption}
                  src={source.thumbnail}
                  style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    maxWidth: '100%',
                  }}
                />
              </Image>
            ))}
          </Gallery>
        ) : null}

        <ModalGateway>
          {lightboxIsOpen && !isLoading ? (
            <Modal onClose={this.toggleLightbox}>
              <Carousel
                components={{ FooterCaption }}
                currentIndex={selectedIndex}
                // formatters={{ getAltText }}
                frameProps={{ autoSize: 'height' }}
                views={images}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  isLoading: PropTypes.bool,

}

const gutter = 2;

const Gallery = (props) => (
  <div
    className="image-gallery"
    style={{
      overflow: 'hidden',
      marginLeft: gutter,
      marginRight: gutter,
      marginTop: '50px'
    }}
    {...props}
  />
);

const Image = (props) => (
  <div
    style={{
      backgroundColor: '#eee',
      boxSizing: 'border-box',
      float: 'left',
      margin: gutter,
      overflow: 'hidden',
      paddingBottom: '30%',
      position: 'relative',
      width: `calc(40% - ${gutter * 2}px)`,

      ':hover': {
        opacity: 0.9,
      },
    }}
    {...props}
  />
);