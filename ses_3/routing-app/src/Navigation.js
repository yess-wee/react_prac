import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Outlet} from 'react-router-dom'

import {useNavigate} from 'react-router-dom'


const Navigation = () => {

    const navigate = useNavigate();

  return (
    <div>

        <nav>      
          {/* <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/teacher"}>Teacher</Link>
          <Link to={"/admin"}>Admin</Link> */}

          <Link to={"/home"}>Home</Link>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
    
{/* 
          <NavLink to={"/teacher"}
            style={({isActive,isPending}) => ({color: isActive?"yellow":"blue"})}>Teacher</NavLink>
           */}


           
          <NavLink to={"/teacher/1?expertise=C"}
            state={{visited:"Teacher 1"}}
            style={({isActive,isPending}) => ({color: isActive?"yellow":"blue"})}>Teacher1</NavLink>

          <NavLink to={"/teacher/2?expertise=Python"}
            style={({isActive,isPending}) => ({color: isActive?"yellow":"blue"})}>Teacher2</NavLink>

        
          <NavLink to={"/teacher/3?expertise=Java"}
            style={({isActive,isPending}) => ({color: isActive?"yellow":"blue"})}>Teacher3</NavLink>

            
          <NavLink to={"/admin"}
            style={({isActive,isPending}) => ({color: isActive?"yellow":"blue"})}>Admin</NavLink>
            <button style={{marginTop:"30px"}}onClick={()=> navigate("/home")}>Back To Home</button>

        </nav>
        <Outlet/>
    
    </div>
  )
}

export default Navigation
