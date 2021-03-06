import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

function SignedInLink(props) {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.signOut}>Logout</a></li>
            <li><NavLink to="/" className="btn btn-floating pink loghten-1">WW</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLink);