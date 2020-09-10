import React from 'react';
import { Link } from "react-router-dom"
import SignedInLink from './SignedInLink';
import SignOutLink from './SignOutLink';
import { connect } from 'react-redux';

function Navbar(props) {
    const { auth } = props;
    const links = auth.uid ? <SignedInLink /> : <SignOutLink />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Firebase</Link>
                {links}
            </div>
        </nav>
    );
}

const maspStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}
export default connect(maspStateToProps)(Navbar);