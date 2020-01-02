import React from 'react';
import Link from 'next/link';
import './style.less';

const Header: React.FunctionComponent = () => (
    <div className='header'>
        <div className='header__inner-container'>
            <Link prefetch href='/'>
                <a className="header__nav-item">Home</a>
            </Link>
            <Link prefetch href='/our-story'>
                <a className="header__nav-item">Our Story</a>
            </Link>
            <Link prefetch href='/wedding-details'>
                <a className="header__nav-item">Wedding Details</a>
            </Link>
        </div>
    </div>
);

export default Header;
