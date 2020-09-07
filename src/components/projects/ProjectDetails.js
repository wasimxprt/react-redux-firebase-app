import React from 'react';

function ProjectDetails(props) {
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project {props.match.params.id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero, nobis provident molestiae odio expedita laboriosam ut earum similique aspernatur hic dolore odit impedit obcaecati consequuntur! Quos consectetur soluta dicta.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Nnja</div>
                    <div>2nd September 2020</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;