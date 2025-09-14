import Navbar from "../navbar/Navbar"

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default MainLayout
