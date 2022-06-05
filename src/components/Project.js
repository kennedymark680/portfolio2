import React from 'react'
import { useEffect, useState } from 'react'
import Video from './Video'
import GitHubLogo from '../resources/output-onlinepngtools.png'

const Project = ({ project }) => {
  const [video, setVideo] = useState()

  useEffect(() => {
    setVideo(project.video)
  }, [project])

  return (
    <div className="projectInfo">
      <h4>{`const Project = ({ ${project.tech.join(', ')}}) = {`}</h4>
      <div className="videoTitleDesc">
        <Video video={video} />
        <h1 className="projectTitle">{project.title}</h1>
        <p className="projectDesc">{project.description}</p>
      </div>
      <h4>{'}'}</h4>
      <ul className="links">
        <li>
          <a href={project.links[0]} target="_blank">
            Webpage
          </a>
        </li>
        <li>
          <a href={project.links[1]} target="_blank">
            GitHub
            {/* <img src={GitHubLogo} alt="git hub logo" className="linkIcon"></img> */}
          </a>
        </li>
        {project.links[2] ? (
          <li>
            <a href={project.links[2]} target="_blank">
              Backend
              {/* <img src={GitHubLogo} alt="git hub logo" className="linkIcon"></img> */}
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default Project
