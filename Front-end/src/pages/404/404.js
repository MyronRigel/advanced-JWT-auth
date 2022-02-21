import React from 'react'
import { useLocation } from 'react-router'

const NotFound = () => {
  const location = useLocation()

  return (
    <div>
      <h1>{location.pathname.slice(1)} not found</h1>
    </div>
  )
}

export default NotFound
