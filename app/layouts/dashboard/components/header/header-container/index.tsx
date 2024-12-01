import { ToggleSidebar } from '~/layouts/dashboard'

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex min-h-[70px] items-center justify-between bg-white px-4 shadow-md">
      <div>
        <ToggleSidebar />
      </div>
      {/* right */}
    </header>
  )
}
