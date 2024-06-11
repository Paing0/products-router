import { Link } from "react-router-dom"

const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem doloremque impedit nisi necessitatibus ipsa vitae dolorem dolorum! Aspernatur qui tempore reprehenderit rem voluptatem fugiat blanditiis saepe aliquam. Modi, aperiam!",
  },
  {
    id: 2,
    title: "Mango",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem doloremque impedit nisi necessitatibus ipsa vitae dolorem dolorum! Aspernatur qui tempore reprehenderit rem voluptatem fugiat blanditiis saepe aliquam. Modi, aperiam!",
  },
  {
    id: 3,
    title: "Orange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem doloremque impedit nisi necessitatibus ipsa vitae dolorem dolorum! Aspernatur qui tempore reprehenderit rem voluptatem fugiat blanditiis saepe aliquam. Modi, aperiam!",
  },
]
const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <div className="flex items-center justify-center flex-col">
        {PRODUCTS.map((product) => (
          <Link
            to={`/product/${product.title}`}
            className="w-[40%] bg-[#edc7b7] rounded-lg my-3 px-5 cursor-pointer"
            key={product.id}
          >
            <h3 className="text-primary">{product.title}</h3>
            <p>{product.description}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Products
