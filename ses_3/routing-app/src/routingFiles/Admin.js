import React from 'react'
import {Outlet} from 'react-router-dom'
import AdminNavigations from './AdminNavigations'

const Admin = () => {
  return (
    <div>
      <AdminNavigations/>
        <Outlet/>
    </div>
  )
}

export default Admin
