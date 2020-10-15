import React from 'react';
import { Link } from 'react-router-dom';


import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu" style={{ backgroundColor: 'lightsteelblue' }}>
            <Link to='/' className="item" ><i className="tv blue icon"></i> Stream TV </Link>
            <div className="right menu">
                <Link to='/' className="item">All</Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;