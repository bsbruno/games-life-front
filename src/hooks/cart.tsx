import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import api from "../services/api";
import { formatValue } from "../utils/formatValue";

type GameProps = {
  id: string;
  name: string;
  price: string;
  slug: string;
  photos: [
    {
      url: string;
    }
  ];
};
export const initialState = {
  id: "",
  name: "",
  price: "",
  slug: "",
  photos: [
    {
      url: " ",
    },
  ],
};

type CartContext = {
  products: GameProps[];
  addToCart(item: GameProps): void;
  removeToCart(item: GameProps): void;
  isInCart: (slug: string) => boolean;
  total: number;
  /*   clearToCart(slug: string): void; */
};

export const CartContextDefaultValues = {
  products: [],
  addToCart(item: GameProps) {
    null;
  },
  removeToCart(item: GameProps) {
    null;
  },
  isInCart: (slug: string) => false,
  total: 0.0,
};

const CartContext = createContext<CartContext>(null);

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState<GameProps[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const storageProducts = window.localStorage.getItem("@GameLife:cart");
      if (storageProducts) {
        const productList: GameProps[] = JSON.parse(storageProducts);
        setProducts(productList);
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product: any) => {
      const { data } = await api.get(`/games/${product}`);

      setProducts([...products, data]);
      localStorage.setItem(
        "@GameLife:cart",
        JSON.stringify([...products, data])
      );
    },

    [products]
  );

  const total = products?.reduce((acc, p) => {
    return acc + Number(p.price);
  }, 0);

  const isInCart = (slug) =>
    slug ? products.some((game) => game.slug == slug) : false;

  const removeToCart = useCallback(
    async (product: any) => {
      const game = products.filter((p) => p.slug !== product.slug);
      game.splice(game.indexOf(product), 1);

      setProducts(game);
      window.localStorage.setItem("@GameLife:cart", JSON.stringify(products));
    },
    [products]
  );
  return (
    <CartContext.Provider
      value={{ addToCart, products, removeToCart, total: total || 0, isInCart }}
    >
      {children}{" "}
    </CartContext.Provider>
  );
};

function useCart(): CartContext {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return context;
}
export { CartProvider, useCart };
