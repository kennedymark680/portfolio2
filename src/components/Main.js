import React from 'react'
import { ProjectData } from '../resources/ProjectData'
import Experience from './Experience'
import ProjectsDisplay from './ProjectDisplay'
import Contact from './Contact'

export const Main = ({ main }) => {
  let display

  switch (main) {
    case 'Contact':
      display = <Contact />
      break
    case 'Projects':
      display = <ProjectsDisplay />
      break
    default:
      display = <Experience />
      break
  }

  return (
    <div className="main">
      <h2 className="mainHeader">{main}</h2>
      {display}
    </div>
  )
}

export default Main
