import { useCart } from '../context/CartContext'

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart()

  return (
    <div className="flex items-center justify-between border-b py-4">
      <img src={item.image} alt={item.title} className="h-16 w-16 object-contain mr-4" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-600">₹{(item.price * 85).toFixed(2)}</p>
      </div>
      <button
        className="px-3 py-1 bg-red-500 text-white rounded"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem