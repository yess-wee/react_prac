import React from 'react'
import { Link } from 'react-router-dom'

const TeacherNavigations = () => {
  return (
    <div>
      
      <nav>
        
        <Link to={"subject"}>subjects</Link>
        
        <Link to={"lecture"}>lectures</Link>
        
        <Link to={"planner"}>planner</Link>
        
      </nav>
    </div>
  )
}

export default TeacherNavigations
