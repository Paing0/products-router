import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-end items-center gap-2.5 text-2xl">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
      </nav>
    </>
  )
}

export default Navbar
