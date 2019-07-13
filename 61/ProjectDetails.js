import React from 'react'

const ProjectDetails=(props)=> {
    const id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt adipisci, maxime facere repudiandae officia earum aut numquam nulla quidem ratione deserunt. Quidem, accusamus? Eius, harum enim sit laudantium error atque.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by SR</div>
                    <div>July 12, 2019</div> 
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
