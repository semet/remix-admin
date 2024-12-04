import { FC, PropsWithChildren } from 'react'

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="min-h-screen overflow-y-auto pb-16 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-black/30">
      {children}
    </main>
  )
}
