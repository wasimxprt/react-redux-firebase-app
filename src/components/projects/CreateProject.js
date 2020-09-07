import React, { useState } from 'react';
import { createProject } from "../../store/actions/projectActions";
import { connect } from 'react-redux';

function CreateProject(props) {

    const [values, setValues] = useState({
        title: "",
        content: ""
    });

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

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);