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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
  )

  return (
    <div>
      <NavBar />
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
