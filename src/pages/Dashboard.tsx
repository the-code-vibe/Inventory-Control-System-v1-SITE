import { useEffect, useState } from "react"
import { getDashboardData } from "../services/dashboard"
import { Dashboard } from "@/dtos/dashboard.dto"
import { DashboardCards } from "../components/Dashboard/Painel"

function DashboardPage() {
  const [data, setData] = useState<Dashboard | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await getDashboardData()
        setData(response)
      } catch {
        setError("Falha ao carregar dados.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Carregando...</p>

  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <DashboardCards data={data} />
    </div>
  )
}

export default DashboardPage