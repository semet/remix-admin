export const Logo = () => {
  return (
    <div className="hidden h-[70px] items-center justify-center bg-black/15 md:flex">
      <img
        src="/images/logo-light.png"
        alt="Logo"
        className="hidden h-[17px] w-[100px] object-contain lg:block"
      />
      <img
        src="/images/logo-sm.png"
        alt="Logo"
        className="block h-[17px] w-[100px] object-contain lg:hidden"
      />
    </div>
  )
}
