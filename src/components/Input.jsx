import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

function Input({ type = "text", className = "", ...rest }) {
  const [visivel, setVisivel] = useState(false)
  const isPassword = type === "password"

  return (
    <div className="relative">
      <input
        type={isPassword && visivel ? "text" : type}
        className={`w-full h-9 border border-slate-400 rounded-md px-3 ${isPassword ? "pr-10" : ""} text-[14px] outline-none focus:ring-2 focus:ring-[#405FF2] ${className}`}
        {...rest}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setVisivel(!visivel)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500"
        >
          {visivel ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  )
}

export default Input