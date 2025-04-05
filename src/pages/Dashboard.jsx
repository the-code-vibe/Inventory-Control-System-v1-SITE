import { useNavigate } from "react-router-dom"
import Title from "../components/Title"
import { useAppSelector } from "../hooks/useAppSelector"

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login", { replace: true })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <Title>Dashboard</Title>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Sair
        </button>
      </div>
    </div>
  )
}

export default Dashboard