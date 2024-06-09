const express = require("express")

const {
  getWorkouts,
  getWorkout,
  creatWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutsController")

const Workout =require("../models/workoutModel")

const router = express.Router()


router.get("/", getWorkouts)
router.get("/:id", getWorkout)
router.post("/", creatWorkout)
router.patch("/:id", updateWorkout)
router.delete("/:id", deleteWorkout)//router.delete("/:fieldName/:fieldValue", deleteWorkout)

module.exports = router


