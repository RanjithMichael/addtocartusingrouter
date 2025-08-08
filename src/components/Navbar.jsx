import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cart } = useCart()

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">🛍️ ShopEasy</h1>
      <div className="space-x-4">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  )
}

export default Navbar