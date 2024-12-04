import {
  Coins,
  CurrencySelector,
  Deposit,
  Notification,
  ToggleSidebar,
  UserMenu,
  Withdraw
} from '~/layouts/dashboard'

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex min-h-[70px] justify-between bg-white px-4 shadow">
      <div className="flex items-center gap-4">
        <ToggleSidebar />
        <Deposit />
        <Withdraw />
        <Coins />
        <CurrencySelector />
      </div>
      <div className="flex gap-4">
        <Notification />
        <UserMenu />
      </div>
    </header>
  )
}
