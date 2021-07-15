import React from "react";
import { CartProvider } from "./cart";
import { AuthProvider } from "./auth";
const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default AppProvider;
