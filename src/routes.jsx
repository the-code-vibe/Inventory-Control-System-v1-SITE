import { createBrowserRouter } from "react-router-dom"

import App from "./App"
import Login from "./pages/auth/Login"
import Dashboard from "./pages/Dashboard"

import PrivateRoute from "./utils/PrivateRoute"
import PublicRoute from "./utils/PublicRoute"
// import OpenRoute from "./utils/OpenRoute"
import RedirectRoute from "./utils/RedirectRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectRoute />
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    )
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    )
  }
])

export default router