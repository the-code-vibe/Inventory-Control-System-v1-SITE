import Sidebar from "@/components/Sidebar"
import { Outlet, useNavigate } from "react-router-dom"

function MainLayout() { 
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout