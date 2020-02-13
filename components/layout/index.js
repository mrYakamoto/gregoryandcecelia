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