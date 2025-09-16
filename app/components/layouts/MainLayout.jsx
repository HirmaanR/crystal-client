import Navbar from "../navbar/Navbar"

function MainLayout({ children }) {
  return (
    <div className="px-0 md:px-10 grid grid-cols-1 gap-10">
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  )
}
export default MainLayout
