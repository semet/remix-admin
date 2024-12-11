import { FC, PropsWithChildren } from 'react'

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <main className="min-h-screen">{children}</main>
}
