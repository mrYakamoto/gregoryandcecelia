import React, { useState } from 'react';
import Link from '../active-link';
import './style.less';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleBurgerClick = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <nav>
            <div
                className={['burgWrapper', `${isNavOpen ? 'activeBurg' : ''}`].join(' ')}
                onClick={handleBurgerClick}
            >
                <div
                    className='burg'
                    
                />
            </div>
            <ul className ="main-navigation">
                <li>
                    <Link href='/' activeClassName="current">
                        <a href="#">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/our-story' activeClassName="current">
                        <a href="#">Our Story</a>
                    </Link>
                </li>
                <li>
                    <Link href='/wedding-details' activeClassName="current">
                        <a href="#">Wedding Details</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Header;
