import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useLayoutEffect,
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
  containerWidth: string
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowSize()

  const [desktopSidebarExpanded, setDesktopSidebarExpanded] =
    useState<boolean>(true)
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false)
  const [containerWidth, setContainerWidth] = useState<string>('100%')
  const toggleDesktopSidebar = () => {
    setDesktopSidebarExpanded((prev) => !prev)
  }

  const toggleMobileSidebar = () => {
    setShowMobileSidebar((prev) => !prev)
  }

  useLayoutEffect(() => {
    if (!width) {
      setContainerWidth('100%')
    }
    if (width && width < 767) {
      setContainerWidth('100%')
    } else {
      setContainerWidth(`calc(100% - ${desktopSidebarExpanded ? 250 : 70}px)`)
    }
  }, [width, desktopSidebarExpanded])
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
    windowWidth: width,
    containerWidth
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
