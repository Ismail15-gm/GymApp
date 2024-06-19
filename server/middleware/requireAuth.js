const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const requireAuth = async (req, res, next) => {
  const { autorization } = req.headers
  if (!autorization) {
    return res.status(401).json({ error: "autorization token required" })
  }

  const token = autorization.split(" ")[1]
  try {
    const { _id } = jwt.verify(token, process.env.SECRET)
    req.user = await User.findOne({ _id })
    next()
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: "Request is not authorized" })
  }
}

module.exports = requireAuth
