type NavDropDownProps = {
  children: React.ReactNode
}

const NavDropDown = ({children}: NavDropDownProps) => {
  return (
    <div className="bg-white w-auto h-[36.25rem] px-20 py-8 flex text-lg">
      {children}
    </div>
  )
}
export default NavDropDown