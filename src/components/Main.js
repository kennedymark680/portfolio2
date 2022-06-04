import React from 'react'
import { ProjectData } from '../resources/ProjectData'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

export const Main = ({ main }) => {
  let display

  switch (main) {
    case 'contact':
      console.log('contact')
      display = <Contact />
      break
    case 'projects':
      console.log('project')
      display = <Projects />
      break
    default:
      console.log('experience')
      display = <Experience />
      break
  }

  return <div className="main">{display}</div>
}

export default Main
