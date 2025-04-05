import { Loader2 } from "lucide-react"

function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  loading = false,
  loadingText = "Processando...",
  className = "",
  ...rest
}) {
  const variants = {
    primary: "bg-[#405FF2] text-white",
    secondary: "bg-white text-[#405FF2] border border-[#405FF2]",
    danger: "bg-red-500 text-white",
    outline: "bg-transparent text-[#405FF2] border border-[#405FF2]",
  }

  const baseStyle = "rounded-[6px] px-4 py-2 text-sm font-medium transition duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...rest}
    >
      {loading ? (
        <span className="flex items-center gap-2 justify-center">
          <Loader2 className="animate-spin" size={16} />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
