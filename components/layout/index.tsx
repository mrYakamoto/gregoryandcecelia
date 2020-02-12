import React from 'react';
import PropTypes from 'prop-types';
import PageHead from '../page-head';
import MainNavigation from '../main-navigation';
import './style.less';
import '../../pages/main.less';

const Layout = ({
  children,
  pageName,
  pageTitle
}) => {
  return (
    <div className={["page-wrapper", pageName].join(' ')}>
      <PageHead pageTitle={pageTitle} />
      <MainNavigation />
      <main>
        <div className="main-wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.array,
  pageName: PropTypes.string,
  pageTitle: PropTypes.string
}