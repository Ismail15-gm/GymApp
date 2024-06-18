import React, { useState } from "react"
import useSignup from "../hooks/useSignup"

export default function SignUp() {
  const { signUp, error, isLoading } = useSignup()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handlSubmit = (e) => {
    e.preventDefault()
    //console.log(password, email)
    signUp(email, password)

    setEmail("")
    setPassword("")
  }
  return (
    <form className="firstForm" onSubmit={handlSubmit}>
      <h1>Sign up</h1>
      <p>f3Rd_?&@2Z-fe^iu</p>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isLoading}>Sign up</button>
      {error != "account add successfully" ? (
        <div className="error">{error}</div>
      ) : (
        <div className="success">{error}</div>
      )}
    </form>
  )
}
