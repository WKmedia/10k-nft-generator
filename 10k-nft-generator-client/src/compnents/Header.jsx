// Components Header
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="logo">Your Logo</div>
            <div className="user-profile">User Profile</div>
            <div className="header-buttons">
                <button id="help-button">Help</button>
                <button id="logout-button">Logout</button>
            </div>
        </header>
    );
};

export default Header;