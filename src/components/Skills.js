import React from 'react'
import { ProfessionalInfo } from '../resources/ProfessionalInfo'

const Skills = () => {
  return (
    <div>
      <h3>{ProfessionalInfo.skillsDesc}</h3>
      <ul className="skillsList">
        {ProfessionalInfo.skills.map((skill) => (
          <h4>{skill}</h4>
        ))}
      </ul>
    </div>
  )
}

export default Skills
