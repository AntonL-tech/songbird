import React from 'react'

import './app-header.css'

const AppHeader = ({score}) => {
  return (
    <div className = "app-header">
      <h1>SongBird</h1>
      <h2>Score: {score}</h2>
    </div>
  )
}

export default AppHeader;