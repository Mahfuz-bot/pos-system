import { CartProvider } from "../contexts/CartContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
