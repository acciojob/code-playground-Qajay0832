import React ,{useState} from 'react'

const Login = ({login,setLogin}) => {
    const handleLogin=()=>{
        login?setLogin(false):setLogin(true);
    }
  return (
    <div className='login-container'><p>Login</p>
    <button onClick={handleLogin}>{login?'Log Out':'Log In'}</button></div>
  )
}

export default Login