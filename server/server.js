const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const workoutsRoutes = require("./routes/workouts")
const userRoutes = require('./routes/user')

const app = express()

app.get("/", (_, res) => {
  res.json("hello Me")
})

mongoose
  .connect(process.env.MONGO_UI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Your are connected to Port " + process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err.message)
  })

//middle ware
app.use(express.json())

app.use((req, _, next) => {
  console.log(req.path, req.method)
  next()
})

app.use(cors())

app.use("/api/workouts", workoutsRoutes)

app.use('/api/user', userRoutes)
