import React from "react"
import useAuthContext from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"
export default function useLogout() {
  const { dispatch } = useAuthContext()
  const { dispatch: workoutDispatch } = useWorkoutsContext()

  const logout = () => {
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem("user")
    workoutDispatch({ type: "SET_WORKOUTS", payload: null })
  }

  return { logout }
}
