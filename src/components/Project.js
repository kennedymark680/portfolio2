import React from 'react'
import { useEffect, useState } from 'react'
import Video from './Video'

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
      <div></div>
    </div>
  )
}

export default Project
