import { useCart } from '../context/CartContext';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between border-b py-2">
      <div>
        <h3 className="font-bold">{item.title}</h3>
        <p>${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-gray-200">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-gray-200">+</button>
        <button onClick={() => removeFromCart(item.id)} className="px-2 py-1 bg-red-500 text-white">Remove</button>
      </div>
    </div>
  );
}

export default CartItem;