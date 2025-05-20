import { useEffect, useState } from "react"
import { getDashboardData } from "../services/dashboard"
import { Dashboard } from "@/dtos/dashboard.dto"
import { DashboardCards } from "../components/Dashboard/Painel"
import Icon from '../components/icons/Icon'
import { UseRecoveryData } from "../utils/RecoveryData"
import { useNavigate } from "react-router-dom"

interface MenuItem {
  label: string
  icon: string
  route?: string
  onlyAdmin?: boolean
  onlyUser?: boolean
}

const MENU_ITEMS: MenuItem[] = [
  { label: "Registrar compra", icon: "Dashboard-icon-adicionar", route: "/compras?new=true" },
  { label: "Nova categoria", icon: "Dashboard-icon-adicionar", route: "/categorias?new=true", onlyAdmin: true },
  { label: "Adicionar produto", icon: "Dashboard-icon-adicionar", route: "/produtos?new=true", onlyAdmin: true },
  { label: "Cadastrar fornecedor", icon: "Dashboard-icon-adicionar", route: "/fornecedores?new=true", onlyAdmin: true },
  { label: "Cadastrar Colaborador", icon: "Dashboard-icon-adicionar", route: "/colaboradores?new=true", onlyAdmin: true },
  { label: "Solicitar compra", icon: "Dashboard-icon-adicionar", route: "/compras/solicitar?new=true", onlyUser: true },
]

const MONTH_LABELS_PT = {
  Nov: "Novembro",
  Dec: "Dezembro",
  Jan: "Janeiro",
  Feb: "Fevereiro",
  Mar: "Março",
  Apr: "Abril",
  May: "Maio",
} as const

const MONTHS_ORDER = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"] as const
type MonthKey = typeof MONTHS_ORDER[number]

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

  const monthlyPurchases = data?.monthly_purchases ?? {} as Record<MonthKey, number>

  const meses = MONTHS_ORDER.map(key => ({
    monthKey: key,
    monthLabel: MONTH_LABELS_PT[key],
    value: monthlyPurchases[key] ?? 0,
  }))

  const maxValue = Math.max(...meses.map(m => m.value), 1)

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <DashboardCards data={data} />

      <hr />

      <div className="flex flex-col md:flex-row justify-between gap-[10px]">
        <div className="w-full md:w-2/3 p-4 flex flex-col gap-4 bg-white rounded-lg shadow-md">
          <header className="flex items-center gap-3">
            <h1 className="text-[#363434] text-2xl font-semibold leading-none">Compras por mês</h1>
            <span className="text-[#363434] text-lg font-semibold leading-none">(Últimos 6 meses)</span>
          </header>
          <hr />
          <section className="w-full flex gap-6 h-full items-stretch">
            <ul className="w-[70px] flex flex-col justify-between text-gray-700 font-medium h-full">
              {meses.map(({ monthLabel }) => (
                <li key={monthLabel} className="flex items-center h-full">{monthLabel}</li>
              ))}
            </ul>
            <ul className="flex flex-col justify-between flex-1 h-full">
              {meses.map(({ value, monthLabel }) => {
                const widthPercent = (value / maxValue) * 100
                return (
                  <li
                    key={monthLabel}
                    className="bg-blue-500 text-white rounded-md px-2 py-1 mb-1 whitespace-nowrap flex items-center"
                    style={{ width: `${widthPercent}%`, minWidth: '70px', height: '100%' }}
                  >
                    R$ {value.toFixed(2).replace('.', ',')}
                  </li>
                )
              })}
            </ul>
          </section>
        </div>

        <div className="max-w-[365px] w-full space-y-4">
          {visibleItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => item.route && navigate(item.route)}
              className="w-full px-4 py-3 flex items-center gap-5 bg-white rounded-lg cursor-pointer
                transition duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md"
            >
              <Icon name={item.icon} className="w-11 h-11 flex-shrink-0" />
              <span className="font-semibold text-lg leading-normal text-gray-800">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage