import React from 'react'
import SingUp from "../components/SingUp.jsx"
const SingUpPage = () => {
  const style = {
    backgroundImage:"url('zelig.jpg')",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover"}
  return (
    <div style={style}><SingUp/></div>
  )
}

export default SingUpPage