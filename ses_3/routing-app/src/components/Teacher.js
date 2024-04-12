import React from 'react'
import {useParams} from 'react-router-dom'

const teacherInformation = [
    { id:1, name:"Yash Chauhan"},
    { id:2, name:"Raam"},
    { id:3, name:"Seeta"},
    { id:4, name:"Lakshman"},
    { id:5, name:"Hanuman"},
]

const Teacher = () => {

    const params = useParams();
    console.log("Params: ",params);

    const currentTeacher = teacherInformation.find(
        (teacher)=> teacher.id === parseInt(params.teacherId)
    )

    console.log("Current Teacher : ",currentTeacher)

  return (
    <div>
      <h1>Information of Teacher {params.teacherId}</h1>

      {currentTeacher && (
        <>
            <p>Teacher Name: {currentTeacher.name}</p>
        </>
      )}
    </div>
  )
}

export default Teacher
