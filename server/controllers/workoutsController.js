const { json } = require("express")
const mongoose = require("mongoose")
const Workout = require("../models/workoutModel")




const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ creatAt: 1 })
  if (!workouts) {
    res.status(400).json({ err: "no workouts finded" })
  }
  res.status(200).json(workouts)
}

const getWorkout = async (req, res) => {
  const { id } = req.params
  const workout = await Workout.findById(id)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "invalid id forma" })
  }
  if (!workout) {
    return res.status(404).json({ err: "no such a workout" })
  }
  res.status(200).json(workout)
}

const creatWorkout = async (req, res) => {
  const { title, reps, load } = req.body
  try {
    const workout = await Workout.create({ title, reps, load })
    res.status(200).json(workout)
  } catch (error) {
    res.status(404).json({ err: error.message })
  }
}

const updateWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Id Format" })
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
  if (!workout) {
    res.status(404).json({ err: "No such A Workout" })
  }
  res.status(200).json(workout)
}

const deleteWorkout = async (req, res) => {
  const { id } = req.params
  const workout = await Workout.findByIdAndDelete({ _id: id })
  if (!workout) {
    return res.status(404).json({ err: "not such a workout" })
  }
  res.status(202).json(workout)
}

module.exports = {
  getWorkouts,
  getWorkout,
  creatWorkout,
  updateWorkout,
  deleteWorkout,
}
