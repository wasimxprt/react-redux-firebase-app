import React, { useState } from 'react';
import { createProject } from "../../store/actions/projectActions";
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

function CreateProject(props) {

    const [values, setValues] = useState({
        title: "",
        content: ""
    });


    const { projects, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />


    const changeHandler = (event) => {
        setValues({
            ...values,
            [event.target.id]: event.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.createProject(values)
    }
    return (
        <div className="container">
            <form onSubmit={submitHandler} action="" className="white">
                <h5 className="grey-text text-darken-3">Create Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea name="content" id="content" className="materialize-textarea" onChange={changeHandler}></textarea>
                </div>
                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);