import React, { useState } from 'react';

function SignIn(props) {

    const [values, setValues] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    const changeHandler = (event) => {
        setValues({
            ...values,
            [event.target.id]: event.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit", values)
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
                </div>
            </form>
        </div>
    );
}

export default SignIn;