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
      <FadeIn className="fade-in-up">
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
      </FadeIn>
      <div id="codeLicenses" dangerouslySetInnerHTML={{ __html: '<!-- licenses for codepens used on this site...\n\nCopyright (c) 2021 by Gemma Stiles (https://codepen.io/GemmaStiles/pen/vYYOoEg) Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->' }} />
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
