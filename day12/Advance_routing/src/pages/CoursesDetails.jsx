import React from 'react'
import { useParams } from 'react-router'

const CoursesDetails = () => {

    const prams = useParams()
  return (
    <div>
      <h1> {prams.id} Courses Details</h1>
    </div>
  )
}

export default CoursesDetails
