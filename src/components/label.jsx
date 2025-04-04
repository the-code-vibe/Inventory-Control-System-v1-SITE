function Label({ children, obrigatorio = false, className = "", ...rest }) {
    return (
      <label className={`text-[16px] font-semibold text-gray-700 pt-[6px] ${className}`} {...rest}>
        {children}
        {obrigatorio && <span className="text-red-500 ml-1">*</span>}
      </label>
    )
  }
  
  export default Label