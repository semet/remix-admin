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
  desktopSidebarExpanded: boolean
  setDesktopSidebarExpanded: Dispatch<SetStateAction<boolean>>
  toggleDesktopSidebar: () => void
  showMobileSidebar: boolean
  setShowMobileSidebar: Dispatch<SetStateAction<boolean>>
  toggleMobileSidebar: () => void
  windowWidth: number
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowSize()

  const [desktopSidebarExpanded, setDesktopSidebarExpanded] =
    useState<boolean>(true)
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false)

  const toggleDesktopSidebar = () => {
    setDesktopSidebarExpanded((prev) => !prev)
  }

  const toggleMobileSidebar = () => {
    setShowMobileSidebar((prev) => !prev)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (width && width < 1024) {
      setDesktopSidebarExpanded(false)
    } else {
      setDesktopSidebarExpanded(true)
    }
  }, [width])

  const values = {
    desktopSidebarExpanded,
    setDesktopSidebarExpanded,
    toggleDesktopSidebar,
    showMobileSidebar,
    setShowMobileSidebar,
    toggleMobileSidebar,
    windowWidth: width
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
