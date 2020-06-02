import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aspernatur est numquam ullam dolore assumenda ipsa molestias labore fugiat sapiente, odio impedit iusto? Adipisci, minima. Magni natus aliquam dolorum mollitia.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>1st June, 9pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;