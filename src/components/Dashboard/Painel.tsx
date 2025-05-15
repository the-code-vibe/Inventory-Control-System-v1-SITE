import React, { FC, memo } from "react"
import Icon from '../icons/Icon'
import { Dashboard } from "@/dtos/dashboard.dto"

type IconName = 
  | "Dashboard-icon-carrinho" 
  | "Dashboard-icon-pasta" 
  | "Dashboard-icon-loja" 
  | "Dashboard-icon-caixa"

interface CardProps {
  iconName: IconName
  label: string
  value?: number | null
}

export const Card: FC<CardProps> = memo(({ iconName, label, value = 0 }) => (
  <div className="rounded-[12px] flex justify-between items-center p-6 bg-white w-full max-w-full min-w-0 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-4 min-w-0">
      <Icon name={iconName} className="w-11 h-11 flex-shrink-0" />
      <span className="text-xl font-semibold text-gray-500 whitespace-nowrap truncate min-w-0">{label}</span>
    </div>
    <div className="flex justify-center items-center text-right min-w-0">
      <span className="text-2xl font-bold text-gray-500">{value}</span>
    </div>
  </div>
))

interface DashboardCardsProps {
  data: Dashboard | null
}

export const DashboardCards: FC<DashboardCardsProps> = memo(({ data }) => (
  <div className="w-full grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
    <Card iconName="Dashboard-icon-carrinho" label="Compras" value={data?.purchases_total ?? 0} />
    <Card iconName="Dashboard-icon-pasta" label="Categorias" value={data?.categories_total ?? 0} />
    <Card iconName="Dashboard-icon-loja" label="Fornecedores" value={data?.provider_total ?? 0} />
    <Card iconName="Dashboard-icon-caixa" label="Colaboradores" value={data?.employees_total ?? 0} />
  </div>
))