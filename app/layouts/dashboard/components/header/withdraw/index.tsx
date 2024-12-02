import { PiHandWithdraw } from 'react-icons/pi'

export const Withdraw = () => {
  return (
    <div className="group relative ml-2 hidden cursor-pointer items-center gap-2 rounded-sm bg-slate-100 px-4 py-1.5 hover:bg-slate-200 md:flex">
      <span className="text-xxs absolute -right-1.5 -top-1.5 h-5 w-5 content-center rounded-full bg-warning text-center font-semibold text-white shadow group-hover:scale-105">
        5
      </span>
      <PiHandWithdraw className="text-xl text-slate-500" />
      <span className="text-slate-500">WD</span>
    </div>
  )
}
