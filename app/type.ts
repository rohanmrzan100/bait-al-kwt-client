import React from "react";
import { IconType } from "react-icons";

export interface ImageProps {
  colorCode: string;
  color: string;
  image: string;
}
export interface UnUploadedImageProps {
  colorCode: string;
  color: string;
  image: string | Blob;
}

export interface IProductProps {
  id: string;
  image: ImageProps[];
  price: number;
  name: string;
  category: string;
  description: string;
  inStock: boolean;
  review: Reviews[];
  createdAt: string;
}

export interface cartProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  selectedImage: ImageProps;
  quantity: number;
  price: number;
}

export interface setColorProps {
  selectedImage: ImageProps[];
  cartProduct: cartProduct;
  handleColorSelect: (value: ImageProps) => void;
}

export interface setQtyProps {
  cartCounter?: boolean;
  cartProduct: cartProduct;
  handleQtySelectIncrease: () => void;
  handleQtySelectDecrease: () => void;
}

export interface productImageProps {
  cartProduct: cartProduct;
  product: any;
  handleColorSelect: (value: ImageProps) => void;
}

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  Icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface Reviews {
  userId: string;
  productId: string;
  rating: number;
  comment: string;
}

export interface CartContextType {
  cartTotalQty: number;
  totalPrice: number;
  cartProduct: cartProduct[] | null;
  handleAddProductToCart: (product: cartProduct) => void;
  handleRemoveProductFromCart: (product: cartProduct) => void;
  handleCartQtyIncrease: (product: cartProduct) => void;
  handleCartQtyDecrease: (product: cartProduct) => void;
  handleClearCart: () => void;
}

export enum Role {
  Admin = "admin",
  User = "user",
}
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  hashedPassword: string | null;
  createdAt: Date;
  role: Role;
}

export interface Address {
  id: string;
  streetAddress: string;
  city: string;
  postalCode: number;

}
