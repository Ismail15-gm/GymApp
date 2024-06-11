import React from "react"
import { useState } from "react"
import { json } from "react-router-dom"

export default function WorkoutForm() {
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState("")
  const [err, setErr] = useState("")

  const handlSubmit = async (e) => {
    e.preventDefault()
    
    const workout = { title, reps, load }
    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      Body: JSON.stringify(workout),
      headers: {
        "content-type": "application/json",
      },
    })

    const json = response.json()
    if (!response.ok) {
      setErr(json.error)
    } else {
      setErr(null)
      setLoad("")
      setTitle("")
      setReps("")
      console.log("new workout added :", json)
    }

  }

  
  return (
    <form className="creat" onSubmit={handlSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Reps:</label>
      <input
        type="text"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <label>Load (kg):</label>
      <input
        type="text"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />
      <button onClick={handlSubmit}>Submit</button>
      {err && <div className="error">{err}</div>}
    </form>
  )
}
