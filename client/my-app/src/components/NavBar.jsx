import React from "react"
import { Link, Outlet } from "react-router-dom"
import useLogout from "../hooks/useLogout"

export default function NavBar() {
  const { logout } = useLogout()
  return (
    <div>
      <div className="navBar">
        <Link to="/home">
          <h1>Nod Trini</h1>
        </Link>
        <div>
          <button onClick={()=>logout()}>logout</button>
        </div>
        <nav>
          <div>
            <Link to="/">login</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}
