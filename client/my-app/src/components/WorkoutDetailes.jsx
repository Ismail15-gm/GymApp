import React from 'react'

export default function WorkoutDetailes({workout}) {
  return (
    <div className="workoutDetailes">
      <p>{workout.title}</p>
      <p><span>load kg:</span>{workout.load}</p>
      <p><span>reps:</span>{workout.reps}</p>
      
    </div>
  )
}
