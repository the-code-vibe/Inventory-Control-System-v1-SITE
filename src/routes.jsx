import { createBrowserRouter } from "react-router-dom"

import Login from "./pages/auth/Login"

import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Categories from "./pages/Categories"
import Providers from "./pages/Providers"
import Collaborators from "./pages/Collaborators"
import Settings from "./pages/Configurations"

import MainLayout from "./layout/MainLayout"

import PrivateRoute from "./utils/PrivateRoute"
import PublicRoute from "./utils/PublicRoute"
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
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "produtos", element: <Products /> },
      { path: "categorias", element: <Categories /> },
      { path: "fornecedores", element: <Providers /> },
      { path: "colaboradores", element: <Collaborators /> },
      { path: "configuracoes", element: <Settings /> }
    ]
  }
])

export default router