import { ReactNode } from 'react'

export type Variant = 'primary' | 'success' | 'error' | 'warning' | 'info'

export type Size = 'sm' | 'md' | 'lg'

export type TabData<Key extends string | number> = {
  head: {
    key: Key
    label: ReactNode
  }
  panel: {
    key: Key
    content: ReactNode
  }
}

export type TabProps<Key extends string | number> = {
  data: Array<TabData<Key>>
}
