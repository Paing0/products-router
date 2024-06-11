import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center gap-2.5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </nav>
    </>
  )
}

export default Navbar
