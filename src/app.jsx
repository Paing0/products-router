import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Main from "./layouts/Main"
import { Home, About, Posts, PostDetails, Error } from "./pages/index"
import { loader as postsLoader } from "./pages/Posts"
import { loader as postDetailsLoader } from "./pages/PostDetails"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/posts", element: <Posts />, loader: postsLoader },
        {
          path: "/post/:postId",
          element: <PostDetails />,
          loader: postDetailsLoader,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
