import { FC, PropsWithChildren } from 'react'

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return <main className="overflow-y-auto p-4">{children}</main>
}
