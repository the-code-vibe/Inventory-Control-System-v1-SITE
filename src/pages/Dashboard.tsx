import { useEffect, useState } from "react"
import { getDashboardData } from "../services/dashboard"
import { Dashboard } from "@/dtos/dashboard.dto"

function DashboardPage() {
  const [data, setData] = useState<Dashboard | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDashboardData()
        setData(response)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <pre className="bg-white p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  )
}

export default DashboardPage