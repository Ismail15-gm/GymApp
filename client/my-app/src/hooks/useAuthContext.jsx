import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export default function useAuthContext () {
  const context = useContext(AuthContext)
  
  if(!context) {
    throw Error('useAutContextContext must be used inside an AutContextProvider')
  }

  return context
}