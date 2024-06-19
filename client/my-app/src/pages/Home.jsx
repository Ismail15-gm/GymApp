import WorkoutForm from "../components/WorkoutForm"

import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import useAuthContext from "../hooks/useAuthContext"
// components
import WorkoutDetailes from "../components/WorkoutDetailes"

export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()
  //console.log(workouts)
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts/", {
        headers: { 'autorization': `Bearer ${user.token}` },
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json })
      }
    }
    fetchWorkouts()
  }, [dispatch,user])

  return (
    <div className="mainn">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetailes key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm value={workouts} />
    </div>
  )
}
