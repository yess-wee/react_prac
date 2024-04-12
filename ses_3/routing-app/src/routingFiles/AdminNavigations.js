import React from 'react'
import {Link} from 'react-router-dom'

const AdminNavigations = () => {
  return (
    <div>
      <nav>
       
        <Link to={"addstaff"}>add-staff page</Link>
        <Link to={"deletestaff"}>delete-staff page</Link>
      </nav>
    </div>
  )
}


export default AdminNavigations
