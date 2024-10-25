import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        // <header className="header">
            
        //     <div className="header-title">
        //         <h1>LYROS FASHION</h1>
        //     </div>

        <header className="header">
        {/* Image on the left */}
        <div className="header-logo">
           <img src="Logoo.png" alt="Lyros Fashion Logo" className="logo" />  
        </div>

            {/* Search bar in the middle */}
            <div className="header-search">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            {/* Wishlist, Cart, Login icons on the right */}
            <div className="header-icons">
                <div className="icon-group">
                    <FontAwesomeIcon icon={faHeart} className="icon" />
                    <p>Wishlist</p>
                </div>
                <div className="icon-group">
                    <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                    <p>Cart</p>
                </div>
                <div className="icon-group">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <p>Login</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
