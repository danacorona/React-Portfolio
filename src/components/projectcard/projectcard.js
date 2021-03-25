import React from 'react';

function ProjectCard (props) {
    return (
        <div className="container my-1">
            <div className="card">
                <div className="row imageTile">
                    <div class="col-md-4">
                        <img src={props.pic} alt={props.projectname} class="img-thumbnail"/>
                    </div>
                    <div class="col-md-8">
                        <h2>{props.projectname}</h2>
                        <p>{props.projectinfo}
                        <br/><a href={props.site} target="_blank">Deployed Link </a>|<a href={props.gh} target="_blank"> Github Repository</a></p> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;