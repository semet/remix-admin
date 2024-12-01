export const SidebarSkeleton = () => {
  return (
    <>
      {[...Array(12)].map((_, idx) => (
        <li
          key={idx}
          className="py-2"
        >
          <div className="flex items-center justify-center gap-2 lg:justify-start">
            <div className="h-5 w-5 animate-pulse rounded bg-slate-700"></div>
            <div className="hidden h-4 w-36 animate-pulse rounded bg-slate-700 lg:block"></div>
          </div>
        </li>
      ))}
    </>
  )
}
