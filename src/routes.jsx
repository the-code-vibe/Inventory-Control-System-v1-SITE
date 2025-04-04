import { createBrowserRouter } from "react-router-dom";

// Imports pages
import App from "./App";
import Login from "./pages/auth/Login";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
]);

export default router;
