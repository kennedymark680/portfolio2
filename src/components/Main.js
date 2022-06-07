import React from 'react'
import Experience from './Experience'
import ProjectsDisplay from './ProjectDisplay'
import Skills from './Skills'

export const Main = ({ main }) => {
  let display

  switch (main) {
    case 'Skills':
      display = <Skills />
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
