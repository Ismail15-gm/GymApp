import React, { useEffect, useState } from "react"
import WorkoutDetailes from "../components/WorkoutDetailes"
import { json } from "react-router-dom"
import WorkoutForm from "../components/WorkoutForm"

export default function Home() {
  const [workouts, setWorkouts] = useState(null)
  

  useEffect( () => {
    const fetchWorkouts= async ()=>{
    const response = await fetch("http://localhost:4000/api/workouts/")
    const json = await response.json()
    if (response.ok) {
      setWorkouts(json)
    }
  }
  fetchWorkouts()
  },[])

  return (
    <div className="mainn">
      <div className="workouts">
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetailes key={workout._id} workout={workout} />
        ))}
        </div>
        <WorkoutForm />
    </div>
  )
}
