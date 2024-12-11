import { PiHandDeposit } from 'react-icons/pi'

export const Deposit = () => {
  return (
    <div className="group relative ml-2 hidden cursor-pointer items-center gap-2 rounded bg-slate-100 px-4 py-1.5 hover:bg-slate-200 md:flex">
      <span className="absolute -right-1.5 -top-1.5 h-5 w-5 content-center rounded-full bg-success text-center text-xxs font-semibold text-white shadow group-hover:scale-105">
        12
      </span>
      <PiHandDeposit className="text-xl text-slate-500" />
      <span className="text-slate-500">DP</span>
    </div>
  )
}
