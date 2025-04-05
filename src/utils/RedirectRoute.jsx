import { Navigate } from "react-router-dom"

const RedirectRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token")
  return <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
}

export default RedirectRoute