import Navbar from "../navbar/Navbar"

function MainLayout({ children }) {
  return (
    <>
      <Navbar>
        {children}
      </Navbar>
    </>
  )
}
export default MainLayout
