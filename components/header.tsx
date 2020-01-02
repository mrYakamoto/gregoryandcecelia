import React from 'react';
import Link from 'next/link';
import './style.less';

const Header: React.FunctionComponent = () => (
    <div className='header'>
        <Link prefetch href='/'>
            <a className="header__nav-item">Home</a>
        </Link>
        
        <Link prefetch href='/about'>
            <a className="header__nav-item">About Me</a>
        </Link>
    </div>
);

export default Header;
