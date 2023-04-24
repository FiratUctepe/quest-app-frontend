import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    let userId  = 52;
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`users/${userId}`}>User</Link></li>
        </ul>
    </div>
  )
}
