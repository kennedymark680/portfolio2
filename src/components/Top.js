import React from 'react'
import EmailIcon from '../resources/Screen Shot 2022-06-08 at 10.56.54 AM.png'
import LinkedInIcon from '../resources/Screen Shot 2022-06-08 at 10.57.29 AM.png'
import GitHubIcon from '../resources/Screen Shot 2022-06-08 at 10.57.44 AM.png'

export const Top = () => {
  return (
    <div className="top">
      <div className="top-left">
        <h1>Mark</h1>
        <h1>Kennedy</h1>
        <h3 className="titles">Software Engineer</h3>
        <h3 className="titles">Designer</h3>
        <h3 className="titles">Helicopter Pilot</h3>
      </div>
      <div className="top-right">
        <h3 className="contactRight">
          <img src={EmailIcon} alt="email Icon" className="icon"></img>
          kennedymark680@gmail.com
        </h3>
        <h3 className="contactRight">
          {' '}
          <img src={LinkedInIcon} alt="linkedIn Icon" className="icon"></img>
          linkedin.com/in/kennedymark680
        </h3>
        <h3 className="contactRight" id="bottomContact">
          {' '}
          <img src={GitHubIcon} alt="gitHub Icon" className="icon"></img>
          kennedymark680
        </h3>
      </div>
    </div>
  )
}

export default Top
