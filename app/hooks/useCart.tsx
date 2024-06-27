import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartContextType, cartProduct } from "../type";
import { toast } from "react-toastify";

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartProduct, setcartProduct] = useState<cartProduct[]>([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");

    if (cartItems !== "null" && cartItems) {
      const cartProduct: cartProduct[] = JSON.parse(cartItems);
      setcartProduct(cartProduct);

      setCartTotalQty(cartProduct.length);
    }
  }, []);

  useEffect(() => {
    setCartTotalQty(cartProduct.length);
    const totalPrice = cartProduct.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartProduct]);

  const handleAddProductToCart = useCallback((product: cartProduct) => {
    setcartProduct((prev) => {
      const updatedCart = [...prev, product];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
    toast.success("Product added to cart!");
  }, []);

  const handleRemoveProductFromCart = useCallback((product: cartProduct) => {
    setcartProduct((prev) => {
      const filteredProducts = prev.filter((item) => item.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(filteredProducts));
      return filteredProducts;
    });
    toast.success("Product removed from cart!");
  }, []);

  const handleCartQtyIncrease = useCallback((product: cartProduct) => {
    if (product.quantity === 99) {
      return toast.error("Oops! Maximum reached");
    }

    setcartProduct((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleCartQtyDecrease = useCallback((product: cartProduct) => {
    if (product.quantity === 1) {
      return toast.error("Oops! Minimum reached");
    }

    setcartProduct((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleClearCart = useCallback(() => {
    setcartProduct([]);
    setCartTotalQty(0);
    localStorage.setItem("cartItems", JSON.stringify(null));
  }, [cartProduct]);

  const value = {
    cartTotalQty,

    totalPrice,
    cartProduct,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within CartContextProvider");
  }
  return context;
};
