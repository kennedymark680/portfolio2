import React from 'react'
import Experience from './Experience'
import ProjectsDisplay from './ProjectDisplay'
import Skills from './Skills'
import About from './About'

export const Main = ({ main }) => {
  let display

  switch (main) {
    case 'EXPERIENCE':
      display = <Experience />
      break
    case 'PROJECTS':
      display = <ProjectsDisplay />
      break
    case 'SKILLS':
      display = <Skills />
      break
    default:
      display = <About />
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
