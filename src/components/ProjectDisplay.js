import React from 'react'
import { projects } from '../resources/ProjectData'
import Project from './Project'

const ProjectsDisplay = () => {
  return (
    <div className="projectsDisplay">
      <div className="projectButtons">
        {projects.map((project) => (
          <button>{project.title}</button>
        ))}
      </div>
      <div className="projectInfo">M</div>
    </div>
  )
}

export default ProjectsDisplay
