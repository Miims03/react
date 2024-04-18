import React from 'react';

const Header = (props) => {
    return (
        <header>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Contact</a></li>
                <li><a href="/slider">Slider</a></li>
            </ul>
        </header>
    );
}

export default Header;