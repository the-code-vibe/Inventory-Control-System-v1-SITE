import Title from "../components/Title"
import { useAppSelector } from "../hooks/useAppSelector"

function Dashboard() {

  const user = useAppSelector((state) => state.user)
  console.log(user)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Title>Dashboard</Title>
    </div>
  )
}

export default Dashboard