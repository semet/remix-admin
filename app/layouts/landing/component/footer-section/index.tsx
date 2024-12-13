export const Footer = () => {
  return (
    <footer className="mt-10 bg-primary-50">
      <div className="main-padding py-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">Best Regard</h1>
              <p className="text-sm text-slate-100">
                © {new Date().getFullYear()} Hamdani.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-xl font-bold text-white">Contact Me</h1>
              <p className="text-sm text-slate-100">
                Email:
                <a href="mailto:hamdanilombok@gmail.com">
                  hamdanilombok@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
