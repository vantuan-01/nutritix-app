import './GlobalStyles.module.scss'

interface GlobalStylesProps {
  children: React.ReactNode
}

function GlobalStyles({ children }: GlobalStylesProps) {
  return <>{children}</>
}

export default GlobalStyles

