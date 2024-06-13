import React from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

export default function WorkoutDetailes({ workout }) {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
    

  return (
    <div className="workoutDetailes">
      <p>{workout.title}</p>
      <p>
        <span>load kg:</span>
        {workout.load}
      </p>
      <p>
        <span>reps:</span>
        {workout.reps}
      </p>
      <button onClick={handleClick}>
        Delete
      </button>
      
    </div>
  )
}
