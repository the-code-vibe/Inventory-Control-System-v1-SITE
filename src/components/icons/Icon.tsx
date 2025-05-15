type IconProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  name: string
}

export default function Icon({ name, ...props }: IconProps) {
  return <img src={`/icons/${name}.svg`} alt={name} {...props} />
}