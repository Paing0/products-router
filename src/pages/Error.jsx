import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  return (
    <>
      <h1>{error.status === 500 ? error.data.message : "Page not found"}</h1>
      <div className="text-center">
        <Link to={"/"}>
          <button>Go back to home</button>
        </Link>
      </div>
    </>
  )
}

export default Error
