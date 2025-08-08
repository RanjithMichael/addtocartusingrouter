import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cart } = useCart()

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  )
}

export default Cart