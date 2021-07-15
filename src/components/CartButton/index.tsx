import React from "react";
import { useCart } from "../../hooks/cart";
import Button from "../Button/Button";
import { FiShoppingCart } from "react-icons/fi";

type CartButtonProps = {
  slug: string;
};

export default function CartButton() {
  const { addToCart, isInCart } = useCart();

  function handleAddToCart(game) {
    addToCart(game);
  }

  return (
    <Button
      size="small"
      color="secondary"
      onClick={() => handleAddToCart("asd")}
    >
      <FiShoppingCart />{" "}
    </Button>
  );
}
