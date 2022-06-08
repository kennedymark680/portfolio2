import React from 'react'
import Picture from '../resources/IMG_9217.jpg'
import Resume from '../resources/Mark Kennedy - 5-17-22 (1).pdf'

const Left = ({ setMain }) => {
  return (
    <div className="left">
      <img src={Picture} alt="Mark" className="profilePicture" />

      <h3>ABOUT ME</h3>
      <p>
        I am an accomplished helicopter pilot seeking new challenges. Over the
        past two years my curiosity of software has turned my hobby into a
        career path. I’ve decided to pursue a field which plays to my strengths
        of being a creative, driven problem solver. What I pride myself most is
        my ability learn, and to know more today than I did yesterday.
      </p>
      <ul>
        <li>
          <button onClick={() => setMain('ABOUT')}>About</button>
        </li>
        <li>
          <button onClick={() => setMain('SKILLS')}>Skills</button>
        </li>
        <li onClick={() => setMain('EXPERIENCE')}>
          <button>Experience</button>
        </li>
        <li>
          <button onClick={() => setMain('PROJECTS')}>Projects</button>
        </li>
        <li>
          <button className="resume">
            <a href={Resume} target="_blank" style={{ color: 'white' }}>
              Resume
            </a>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Left
