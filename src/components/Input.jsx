import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

function Input({ type = "text", className = "", hasError = false, ...rest }) {
  const [visivel, setVisivel] = useState(false)
  const isPassword = type === "password"

  return (
    <div className="relative">
      <input
        type={isPassword && visivel ? "text" : type}
        className={`
          w-full h-9 rounded-md px-3 text-[14px] outline-none transition-all
          ${isPassword ? "pr-10" : ""}
          ${hasError ? "border border-red-500 focus:ring-red-500" : "border border-slate-400 focus:ring-1 focus:ring-[#405FF2]"}
          ${className}
        `}
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