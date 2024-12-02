import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import { useWindowSize } from 'usehooks-ts'

type LayoutContextType = {
  sidebarExpanded: boolean
  setSidebarExpanded: Dispatch<SetStateAction<boolean>>
  toggleSidebar: () => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowSize()

  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true)

  const toggleSidebar = () => {
    setSidebarExpanded((prev) => !prev)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (width && width < 1024) {
      setSidebarExpanded(false)
    } else {
      setSidebarExpanded(true)
    }
  }, [width])

  const values = {
    sidebarExpanded,
    setSidebarExpanded,
    toggleSidebar
  }

  return (
    <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>
  )
}

const useLayout = () => {
  const context = useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}

export { LayoutProvider, useLayout }
