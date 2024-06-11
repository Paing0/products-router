import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
  const { title } = useParams()

  const navigate = useNavigate()
  const navigatorHandler = () => {
    navigate("/products")
  }
  return (
    <>
      <div className="text-center">
        <h1>Product Details</h1>
        <h3 className="text-primary">Product Title - {title}</h3>
        <button onClick={navigatorHandler}>Go back to products</button>
      </div>
    </>
  )
}

export default ProductDetails
