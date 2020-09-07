import React from 'react';
import { NavLink } from "react-router-dom";

function SignedInLink(props) {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink loghten-1">WW</NavLink></li>
        </ul>
    );
}

export default SignedInLink;