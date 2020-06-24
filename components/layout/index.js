import React from 'react';
import PropTypes from 'prop-types';
import PageHead from '../page-head';
import MainNavigation from '../main-navigation';
import FadeIn from '../fade-in';
import './style.less';

const Layout = ({
  children,
  pageName,
  pageTitle,
  headerText
}) => {
  return (
    <div className={["page-wrapper", pageName].join(' ')}>
      <PageHead pageTitle={pageTitle} />
      <MainNavigation />
      <main className="main-wrapper">
        <div className="main-container">
          <div className="postponed-in">
            <div className="page-wrapper__postponed-wrapper">
              <span className="page-wrapper__postponed-text">POSTPONED</span>
              <span className="page-wrapper__postponed-subtext">ALL WEDDING EVENTS POSTPONED DUE TO GLOBAL PANDEMIC.</span>
              <span className="page-wrapper__postponed-subtext">RESCHEDULING EVENT FOR 2021.</span>
              <span className="page-wrapper__postponed-subtext">MORE DETAILS TO COME SOON.</span>
            </div>
          </div>
          <FadeIn className="fade-in-up">
            <h1 className='home__header'>
              {headerText}
            </h1>
            <div className='sexy-line short-line' />
          </FadeIn>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  pageName: PropTypes.string,
  pageTitle: PropTypes.string,
  headerText: PropTypes.string
}
