import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <Link to={'/project/'+project.id} key={project.id}> 
          <ProjectSummary project={project}  />
          </Link>
        )
      })}  
    </div>
    /*this link is the parent element therefore it must has the key*/
  )
}

export default ProjectList
