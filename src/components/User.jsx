const User = ({ userId }) => {
  let userName = ""
  switch (userId) {
    case 1:
      userName = "User 1"
      break
    case 2:
      userName = "User 2"
      break
    case 3:
      userName = "User 3"
      break
    case 4:
      userName = "User 4"
      break
    case 5:
      userName = "User 5"
      break
    default:
      userName = "Unknown User"
      break
  }
  return (
    <p className="text-xl m-2.5">
      Post by <span className="font-bold">{userName}</span>
    </p>
  )
}

export default User
