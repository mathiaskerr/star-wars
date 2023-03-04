import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Film List</Link>
            </li>
            <li>
                {/* <Link to="/starships">Starships</Link> */}
            </li>
        </ul>    
    </div>
  )
}

export default NavBar