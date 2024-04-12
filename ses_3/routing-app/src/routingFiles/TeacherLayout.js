import React from 'react'
import {Outlet} from 'react-router-dom'
import TeacherNavigations from './TeacherNavigations'

const TeacherLayout = () => {
  return (
    <div>
        <TeacherNavigations/>
        <Outlet/>
    </div>
  )
}

export default TeacherLayout
