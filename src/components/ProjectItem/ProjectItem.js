import React from 'react'
import './ProjectItem.css';

const ProjectItem = (props) => {
    return (
        <div className="card project-card">
            <img src={props.image} className="card-img-top" alt={props.imageName} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.children}</p>
                <a href={props.url} className='btn btn-secondary text-light mt-auto' target='_blank' rel="noopener noreferrer">View</a>
            </div>
        </div>
    )
}

export default ProjectItem;