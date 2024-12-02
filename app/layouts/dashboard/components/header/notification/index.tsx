import { IoMdNotificationsOutline } from 'react-icons/io'

export const Notification = () => {
  return (
    <div className="group relative hidden cursor-pointer place-self-center md:block">
      <span className="text-xxs absolute -right-1.5 -top-1.5 h-5 w-5 content-center rounded-full bg-danger text-center font-semibold text-white shadow group-hover:scale-105">
        12
      </span>
      <IoMdNotificationsOutline className="text-3xl text-slate-500 group-hover:text-slate-700" />
    </div>
  )
}
