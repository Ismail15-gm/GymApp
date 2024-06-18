import React, { useState } from "react"
import useLogin from "../hooks/useLogin"

export default function LoginUp() {
  const { login, error, isLoading } = useLogin()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handlSubmit = async (e) => {
    e.preventDefault()
    await login(email,password)
  }
  return (
    <form className="firstForm" onSubmit={handlSubmit}>
      <h1>Login</h1>
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
      <button disabled={isLoading}>Login</button>
      {error!="you loged" ? <div className="error">{error}</div>:<div className="success">{error}</div>}
    </form>
  )
}
