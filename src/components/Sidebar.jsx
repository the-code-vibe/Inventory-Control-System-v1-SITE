import { NavLink, useNavigate } from "react-router-dom"
import { useAppSelector } from "@/hooks/useAppSelector"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"

import {
  LayoutDashboard,
  Package,
  Tags,
  Truck,
  Users,
  Settings,
  EllipsisVertical,
  LogOut,
  User,
} from "lucide-react"

const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { divider: true },
  { to: "/produtos", label: "Produtos", icon: Package },
  { to: "/categorias", label: "Categorias", icon: Tags },
  { to: "/fornecedores", label: "Fornecedores", icon: Truck },
  { to: "/colaboradores", label: "Colaboradores", icon: Users },
  { to: "/configuracoes", label: "Configurações", icon: Settings },
]

function Sidebar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user)
  const btnRef = useRef(null)

  const handleLogout = () => {
    localStorage.clear()
    setOpen(false)
    navigate("/login", { replace: true })
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (btnRef.current && !btnRef.current.contains(event.target)) {
        setTimeout(() => setOpen(false), 100) 
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 p-4 flex flex-col justify-between">
      <nav className="flex flex-col gap-[15px]">
        {links.map((item, index) =>
          item.divider ? (
            <hr key={`divider-${index}`} className="border-gray-200" />
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-[16px] font-medium transition ${
                  isActive
                    ? "bg-[var(--primary)] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          )
        )}
      </nav>

      <div className="relative">
        <div className="flex justify-between bg-[var(--primary)] py-[7px] px-[15px] rounded-[10px] items-center">
          <div className="flex justify-start gap-[10px] items-center py-[4px]">
            <figure className="w-[32px] h-[32px]">
            {user.avatar ? (
              <img
                className="rounded-[50%] w-full h-full object-cover"
                src={user.avatar}
                alt={`Avatar do usuário ${user.name}`}
                title={`Avatar do usuário ${user.name}`}
              />
            ) : (
              <div className="rounded-[50%] bg-white w-full h-full flex items-center justify-center">
                <User className="text-gray-500 ml-[1px]" size={22} />
              </div>
            )}
            </figure>
            <h1 className="text-white font-medium text-[16px] leading-[150%]">
              {user.name}
            </h1>
          </div>
          <div
            ref={btnRef}
            className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <EllipsisVertical size={24} className="text-white" />
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.1 }}
              className="absolute right-0 bottom-[60px] bg-white shadow-md rounded-md w-full z-50 border p-[5px]"
            >
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-4 py-2 text-[16px] font-bold text-[var(--primary-error)] transition"
              >
                <LogOut size={22} />
                Sair
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  )
}

export default Sidebar