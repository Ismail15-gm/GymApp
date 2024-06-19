import React from "react"
import { Link, Outlet } from "react-router-dom"
import useLogout from "../hooks/useLogout"
import useAuthContext from "../hooks/useAuthContext"

export default function NavBar() {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  return (
    <div>
      <div className="navBar">
        <Link to="/home">
          <h1>Nod Trini</h1>
        </Link>
        {user && (
          <div className="emailOlogout">
            <h3>{user.email}</h3>
            <button onClick={() => logout()}>logout</button>
          </div>
        )}

        {!user && (
          <nav>
            <div>
              <Link to="/">login</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          </nav>
        )}
      </div>
      <Outlet />
    </div>
  )
}
