import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'
import { login,logout } from './login/actions'

const Login = ({loggedInUsers, login, logout}) => {
    const [username,setUsername] = useState("")

    const handleLogin = ()=>{
        if(username && !loggedInUsers.includes(username)){
            login(username)
            setUsername("")
        }
    }

    const handleLogout = ()=>{
        if(loggedInUsers.includes(username)){
            logout(username)
            setUsername("")
        }
    }

  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder='Enter the username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}/>

        {" "}

        <button onClick={handleLogin} disabled={username.length < 1}>Login</button>

        {" "}

        <button onClick={handleLogout} disabled={username.length < 1}>Logout</button>

        <div>
            <h3>LoggedIn users lists: </h3>
            <ul>
                {loggedInUsers.map((user,index)=>(
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

const mapStateToProps = (state)=> ({
    loggedInUsers: state.loggedInUsers,
})

const mapDispatchToProps = (dispatch)=> ({
    login: (user) => dispatch(login(user)),
    logout: (user) => dispatch(logout(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)
