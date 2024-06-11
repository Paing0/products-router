import { Link } from "react-router-dom"
const Error = () => {
  return (
    <>
      <h1>Page not found.</h1>
      <div className="text-center">
        <Link to={"/"}>
          <button>Go back to home</button>
        </Link>
      </div>
    </>
  )
}

export default Error
