import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import { signUp } from "../../store/actions/authActions"

function SignIn(props) {

    const { auth, authError } = props;

    const [values, setValues] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    if (auth.uid) return <Redirect to='/' />


    const changeHandler = (event) => {
        setValues({
            ...values,
            [event.target.id]: event.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.signUp(values)
    }
    return (
        <div className="container">
            <form onSubmit={submitHandler} action="" className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={values.email} onChange={changeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={values.password} onChange={changeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={values.firstName} onChange={changeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={values.lastName} onChange={changeHandler} />
                </div>
                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);