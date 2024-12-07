import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function POS() {
  const { cart, addToCart, clearCart } = useCart();
  const { data: products, error } = useSWR(
    "http://localhost:8000/products",
    fetcher
  );
  const [total, setTotal] = useState(0);

  if (error) return <div>Error loading products.</div>;
  if (!products) return <div>Loading...</div>;

  const calculateTotal = () => {
    const totalPrice = cart
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
    setTotal(totalPrice);
  };

  const handleSale = async () => {
    try {
      const res = await fetch("http://localhost:8000/pos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((item) => ({
            product_id: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      if (res.ok) {
        alert("Sale processed successfully!");
        clearCart();
        setTotal(0);
      } else {
        throw new Error("Sale failed!");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 ">
      <h1 className="mb-4 text-3xl font-bold">POS System</h1>
      <div>
        <select
          className="p-2 mb-4 text-black border"
          onChange={(e) => {
            const selectedProduct = products.find(
              (product) => product.id === Number(e.target.value)
            );
            addToCart(selectedProduct, 1);
          }}
        >
          <option value="">Select Product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} - ${product.price}
            </option>
          ))}
        </select>
      </div>
      <table className="w-full mb-4 border border-collapse border-gray-200 table-auto">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">${item.price}</td>
              <td className="p-2 border">{item.quantity}</td>
              <td className="p-2 border">${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={calculateTotal}
          className="px-4 py-2 text-white bg-green-500 rounded"
        >
          Calculate Total
        </button>
        <span className="text-xl font-bold">Total: ${total}</span>
      </div>
      <button
        onClick={handleSale}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Process Sale
      </button>
    </div>
  );
}
