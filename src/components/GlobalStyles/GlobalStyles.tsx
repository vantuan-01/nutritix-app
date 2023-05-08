import './GlobalStyles.module.scss'

import { Fragment } from 'react'

interface GlobalStylesProps {
  children: React.ReactNode
}

function GlobalStyles({ children }: GlobalStylesProps) {
  return <>{children}</>
}

export default GlobalStyles

