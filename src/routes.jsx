import { createBrowserRouter } from "react-router-dom";

// Imports pages
import App from "./App";
import Login from "./pages/Login";
import PasswordRecovery from "./pages/passwordRecovery";
import PasswordReset from "./pages/PasswordReset";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/password-recovery", element: <PasswordRecovery /> },
  { path: "/password-reset", element: <PasswordReset /> },
]);

export default router;
