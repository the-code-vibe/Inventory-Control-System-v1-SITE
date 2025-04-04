function Title({ children, as: Tag = "h1", className = "" }) {
return (
    <Tag className={`text-[28px] font-medium font-sans text-gray-700 ${className}`}>
        {children}
    </Tag>
)
}

export default Title