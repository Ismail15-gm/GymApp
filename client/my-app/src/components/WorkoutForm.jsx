import React from "react"
import { useState } from "react"
import { json } from "react-router-dom"


import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


export default function WorkoutForm(workouts) {
  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState("")
  const [error, setError] = useState("")

  const handlSubmit = async (e) => {
    e.preventDefault()
    const workout = { title, reps, load }

    console.log(workout)
    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "content-type": "application/json",
      },
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.err)
    } else {
      setError(null)
      setLoad("")
      setTitle("")
      setReps("")
      dispatch({type: 'CREATE_WORKOUT', payload: json})
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
      {error && <div className="error">{error}</div>}
    </form>
  )
}
