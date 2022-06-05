import React from 'react'

const Project = ({ project }) => {
  return (
    <div className="projectInfo">
      <div className="videoTitleDesc">
        <video className="video" autoPlay controls muted loop>
          <source src={project.video} type="video/mp4" />
        </video>
        <h1 className="projectTitle">{project.title}</h1>
        <p className="projectDesc">{project.description}</p>
      </div>
    </div>
  )
}

export default Project
