import { useLoaderData, useNavigate } from "react-router-dom"
import User from "../components/User"

const PostDetails = () => {
  const post = useLoaderData()
  const { title, body, userId } = post

  const navigate = useNavigate()
  const navigatorHandler = () => {
    navigate("/posts")
  }
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className="w-[50%]">{title}</h1>
        <User userId={userId} />
        <p className="text-xl w-[60%] ">{body}</p>
        <button onClick={navigatorHandler}>Go back to posts</button>
      </div>
    </>
  )
}

export default PostDetails

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  if (!response.ok) {
    throw json({ message: "Cannot found your post." }, { status: 404 })
  } else {
    const post = await response.json()
    console.log(post)
    return post
  }
}
