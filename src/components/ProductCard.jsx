import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="h-40 mx-auto mb-2" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="mt-1 font-bold">₹{(product.price * 85).toFixed(2)}</p>
      <button
        className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
