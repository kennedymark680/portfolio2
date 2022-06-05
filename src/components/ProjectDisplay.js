import React from 'react'
import { projects } from '../resources/ProjectData'
import { useState } from 'react'
import Project from './Project'

const ProjectsDisplay = () => {
  const [selectedProject, setSelectedProject] = useState('')

  let display

  switch (selectedProject) {
    case 'PennStar4':
      display = <Project project={projects[2]} />
      break
    case 'Space Pilgrims':
      display = <Project project={projects[1]} />
      break
    default:
      display = <Project project={projects[0]} />
      break
  }

  return (
    <div className="projectsDisplay">
      <div className="projectButtons">
        {projects.map((project) => (
          <button onClick={() => setSelectedProject(project.title)}>
            {project.title}
          </button>
        ))}
      </div>
      <div className="projectInfo">m</div>
    </div>
  )
}

export default ProjectsDisplay
