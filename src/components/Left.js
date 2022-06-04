import React from 'react'
import Picture from '../resources/IMG_9217.jpg'

const Left = ({ setMain }) => {
  return (
    <div className="left">
      <img src={Picture} alt="Mark" className="profilePicture" />
      <h3>ABOUT ME</h3>
      <p>
        I am an accomplished helicopter pilot seeking new challenges. Over the
        past two years my curiosity has turned my hobby into a career path. I’ve
        decided to pursue a field which plays to my strengths of being a
        creative, driven problem solver. What I pride myself most is my ability
        learn, and to know more today than I did yesterday.
      </p>
      <ul>
        <li onClick={() => setMain('experience')}>
          <button>Experience</button>
        </li>
        <li>
          <button onClick={() => setMain('projects')}>Projects</button>
        </li>
        <li>
          <button onClick={() => setMain('contact')}>Contact</button>
        </li>
      </ul>
    </div>
  )
}

export default Left
