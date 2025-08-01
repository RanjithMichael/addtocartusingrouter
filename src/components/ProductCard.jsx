import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { cartItems, addToCart } = useCart();
  const inCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-2" />
      <h2 className="text-lg font-bold mb-1">{product.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{product.description.slice(0, 100)}...</p>
      <p className="text-blue-600 font-semibold mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className={`w-full py-2 rounded ${inCart ? 'bg-red-500' : 'bg-green-500'} text-white`}
      >
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;