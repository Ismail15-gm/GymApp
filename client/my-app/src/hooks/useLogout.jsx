import React from "react"
import useAuthContext from "./useAuthContext"
export default function useLogout() {
  const { dispatch } = useAuthContext()

  const logout = () => {
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem("user")
  }

  return {logout }
}
