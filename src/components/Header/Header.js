import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="header_top">
                    <h1>The Great Color Game</h1>
                    <h2>RGB(221,222,333)</h2>
                </div>
            </div>
        );
    }
}

export default Header;