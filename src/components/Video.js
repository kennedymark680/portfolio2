import React from 'react'

const Video = ({ video }) => {
  return (
    <React.Fragment key={video}>
      <video className="video" autoPlay controls muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </React.Fragment>
  )
}

export default Video
