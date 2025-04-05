import api from "./api"
import { Dashboard } from "@/dtos/dashboard.dto"

export const getDashboardData = async (): Promise<Dashboard> => {
  const response = await api.get<Dashboard>("/stock/metrics")
  return response.data
}