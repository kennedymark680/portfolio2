import React from 'react'
import Experience from './Experience'
import ProjectsDisplay from './ProjectDisplay'
import Skills from './Skills'

export const Main = ({ main }) => {
  let display

  switch (main) {
    case 'Experience':
      display = <Experience />
      break
    case 'Projects':
      display = <ProjectsDisplay />
      break
    default:
      display = <Skills />
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
