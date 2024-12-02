import { FC, PropsWithChildren } from 'react'

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="overflow-y-auto p-4 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-black/30">
      {children}
    </main>
  )
}
