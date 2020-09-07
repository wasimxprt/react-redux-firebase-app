import React from 'react';
import { Link } from "react-router-dom"
import SignedInLink from './SignedInLink';
import SignOutLink from './SignOutLink';

function Navbar(props) {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Firebase</Link>
                <SignedInLink></SignedInLink>
                <SignOutLink></SignOutLink>
            </div>
        </nav>
    );
}

export default Navbar;