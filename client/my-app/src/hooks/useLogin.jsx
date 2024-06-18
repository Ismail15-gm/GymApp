import React, { useState } from "react"
import useAuthContext from "./useAuthContext"

export default function useSignup() {
  const { dispatch } = useAuthContext()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const json = await response.json()

      if (!response.ok) {
        setError(json.error) // Corrected here
        setIsLoading(false)
      } else {
        dispatch({ type: "LOGIN", payload: json })
        localStorage.setItem("user", JSON.stringify(json))
        setIsLoading(false)
        setError("you loged")
      }
    } catch (err) {
      setError('An error occurred during sign up')
      setIsLoading(false)
    }
  }

  return { login, error, isLoading }
}
