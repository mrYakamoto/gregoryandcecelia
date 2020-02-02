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
                    <Link href='/wedding-details' activeClassName="current">
                        <a href="#">Wedding Details</a>
                    </Link>
                </li>
                <li>
                    <Link href='/travel-and-accomodations' activeClassName="current">
                        <a href="#">Travel & Accomodations</a>
                    </Link>
                </li>
                <li>
                    <Link href='/registry' activeClassName="current">
                        <a href="#">Registry</a>
                    </Link>
                </li>
                <li>
                    <Link href='/photos' activeClassName="current">
                        <a href="#">Photos</a>
                    </Link>
                </li>
                <li>
                    <Link href='/things-to-do' activeClassName="current">
                        <a href="#">Things to do</a>
                    </Link>
                </li>
                <li>
                    <Link href='/faq' activeClassName="current">
                        <a href="#">FAQ</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Header;
