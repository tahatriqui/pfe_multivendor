import React from 'react'
import Login from "../components/Login.jsx"
const LoginPage = () => {
  const style = {
      backgroundImage:"url('zelig.jpg')",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center center",
      backgroundSize:"cover"}

  return (
    <div style={style}>
       <Login/>
    </div>
  )
}

export default LoginPage