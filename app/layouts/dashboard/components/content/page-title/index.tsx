import { FC } from 'react'
import { Breadcrumb } from '~/layouts/dashboard'

type Props = {
  title: string
}

export const PageTitle: FC<Props> = ({ title }) => {
  return (
    <div className="flex justify-between bg-white px-4 py-3">
      <h1 className="text-base font-semibold uppercase text-slate-600">
        {title}
      </h1>
      <Breadcrumb />
    </div>
  )
}
