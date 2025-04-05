export interface Dashboard {
  purchases_total: number
  categories_total: number
  provider_total: number
  employees_total: number
  monthly_purchases: {
    [month: string]: number
  }
}