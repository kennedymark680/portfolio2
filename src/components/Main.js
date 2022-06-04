import React from 'react'
import { ProjectData } from '../resources/ProjectData'
import Experience from './Experience'
import ProjectsDisplay from './ProjectDisplay'
import Contact from './Contact'

export const Main = ({ main }) => {
  let display

  switch (main) {
    case 'contact':
      display = <Contact />
      break
    case 'projects':
      display = <ProjectsDisplay />
      break
    default:
      display = <Experience />
      break
  }

  return <div className="main">{display}</div>
}

export default Main
