const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// static signup method
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email })
  if (!email || !password) {
    throw new Error("all fields must be field")
  }

  if (exists) {
    throw Error("Email already in use")
  }
  if (!validator.isEmail(email)) {
    throw Error("invalid email")
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("you password is WEAK")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user
}

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("all fields must be field")
  }
  const user = await this.findOne({ email })
  if (!user) {
    throw new Error("no account under this email")
  }
  const match = await bcrypt.compare(password, user.password)
  if(!match){
    throw new Error("incorrect passord")
  }
  return user

}

module.exports = mongoose.model("User", userSchema)
