import { PiCurrencyCircleDollar } from 'react-icons/pi'

export const Coins = () => {
  return (
    <div className="hidden cursor-pointer items-center gap-2 rounded-sm bg-slate-100 px-4 py-1.5 hover:bg-slate-200 sm:flex">
      <PiCurrencyCircleDollar className="text-2xl text-warning" />
      <span className="font-semibold text-slate-500">35,500</span>
    </div>
  )
}
