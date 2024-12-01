import { Logo, SidebarContent } from '~/layouts/dashboard'

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 hidden h-screen w-full max-w-[70px] bg-primary text-white md:block lg:max-w-[250px]">
      <Logo />
      <SidebarContent />
    </aside>
  )
}
