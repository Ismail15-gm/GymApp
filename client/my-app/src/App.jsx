import { useState } from "react"
import "./App.css"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  NavLink,
} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Login />} /> {/* Corrected path */}
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} /> {/* Corrected path */}
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
