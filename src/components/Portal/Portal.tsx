import ReactDOM from 'react-dom'

interface PortalProps {
  children: React.ReactNode
  id: string
}

function Portal({ children, id }: PortalProps) {
  return ReactDOM.createPortal(<div id={id}>{children}</div>, document.querySelector('body')!)
}

export default Portal
