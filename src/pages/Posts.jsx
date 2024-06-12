import { Link, json, useLoaderData } from "react-router-dom"
import User from "../components/User"

const Posts = () => {
  const POSTS = useLoaderData()
  return (
    <>
      <h1>Posts</h1>
      <div className="flex items-center justify-center flex-col">
        {POSTS.map((post) => (
          <Link
            to={`/post/${post.id}`}
            className="w-[60%] bg-[#edc7b7] rounded-lg my-3 px-5 cursor-pointer"
            key={post.id}
          >
            <p className="text-primary text-xl ">{post.title}</p>
            <User userId={post.userId} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Posts

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!response.ok) {
    throw json({ message: "Cannot get posts now." }, { status: 500 })
  } else {
    const posts = await response.json()
    return posts
  }
}
