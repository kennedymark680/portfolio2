import React from 'react'
import { ProfessionalInfo } from '../resources/ProfessionalInfo'

const Skills = () => {
  return (
    <div className="skills">
      <h3>{ProfessionalInfo.skillsDesc}</h3>
      <div className="skillsList">
        {ProfessionalInfo.skills.map((skill) => (
          <h4>{skill}</h4>
        ))}
      </div>
    </div>
  )
}

export default Skills
