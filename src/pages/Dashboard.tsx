import { useEffect, useState } from "react"
import { getDashboardData } from "../services/dashboard"
import { Dashboard } from "@/dtos/dashboard.dto"
import { DashboardCards } from "../components/Dashboard/Painel"
import Icon from '../components/icons/Icon'
import { UseRecoveryData } from "../utils/RecoveryData"
import { Navigate, useNavigate } from "react-router-dom"

interface MenuItem {
  label: string
  icon: string
  route?: string
  onlyAdmin?: boolean
  onlyUser?: boolean
}

const MENU_ITEMS: MenuItem[] = [
  {
    label: "Registrar compra",
    icon: "Dashboard-icon-adicionar",
    route: "/compras/registrar",
  },
  {
    label: "Nova categoria",
    icon: "Dashboard-icon-adicionar",
    route: "/categorias/nova",
    onlyAdmin: true,
  },
  {
    label: "Adicionar produto",
    icon: "Dashboard-icon-adicionar",
    route: "/produtos/novo",
    onlyAdmin: true,
  },
  {
    label: "Cadastrar fornecedor",
    icon: "Dashboard-icon-adicionar",
    route: "/fornecedores/novo",
    onlyAdmin: true,
  },
  {
    label: "Cadastrar Colaborador",
    icon: "Dashboard-icon-adicionar",
    route: "/colaboradores/novo",
    onlyAdmin: true,
  },
  {
    label: "Solicitar compra",
    icon: "Dashboard-icon-adicionar",
    route: "/compras/solicitar",
    onlyUser: true,
  },
]

function DashboardPage() {
  const [data, setData] = useState<Dashboard | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const userData = UseRecoveryData()
  const isAdmin = userData?.is_admin ?? null
  const navigate = useNavigate()

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

  const visibleItems = MENU_ITEMS.filter(item => {
    if (item.onlyAdmin) return isAdmin === true
    if (item.onlyUser) return isAdmin === false
    return true
  })

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-[1.2rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <DashboardCards data={data} />

      <hr />

      <div className="flex justify-between gap-[1.2rem]">
        <div className="w-full"></div>
        <div className="max-w-[365px] w-full space-y-4">
          {visibleItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => item.route && navigate(item.route)}
              className="w-full px-4 py-3 flex items-center gap-5 bg-white rounded-lg cursor-pointer 
               transition duration-300 ease-in-out
               hover:bg-gray-50 hover:shadow-md"
            >
              <Icon name={item.icon} className="w-11 h-11 flex-shrink-0" />
              <span className="font-semibold text-lg leading-normal text-gray-800">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
