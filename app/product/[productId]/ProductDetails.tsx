"use client";

import { IProductProps, ImageProps, cartProduct } from "@/app/type";
import { formatPrice } from "@/app/utils/FormatPrice";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import SetColor from "./SetColor";
import SetQuantity from "./setQuantity";
import ProductImages from "./ProductImages";
import { useCart } from "@/app/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";

interface ProductDetailsProps {
  product: IProductProps;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  let productRating = 0;
  const [isProductInCart, setIsProductInCart] = useState(false);
  const { handleAddProductToCart, cartProduct, cartTotalQty } = useCart();
  if (product.review)
   { productRating =
      product.review.reduce((acc, item) => acc + item.rating, 0) /
      product.review.length;}
  const [cartProducts, setCartProducts] = useState<cartProduct>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    selectedImage: product.image[0],
    quantity: 1,
    price: product.price,
  });

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProduct) {
      const existingIndex = cartProduct.findIndex((item) => {
        return item.id === product.id;
      });

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProduct]);

  const handleColorSelect = (image: ImageProps) => {
    console.log(image);
    setCartProducts((prev) => {
      return { ...prev, selectedImage: image };
    });
  };

  function handleQtySelectIncrease() {
    if (cartProducts.quantity == 99) {
      return;
    }
    setCartProducts((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }

  function handleQtySelectdecrease() {
    if (cartProducts.quantity == 1) {
      return;
    }
    setCartProducts((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8">
      <div>
        <ProductImages
          cartProduct={cartProducts}
          product={product}
          handleColorSelect={handleColorSelect}
        />
      </div>
      <div>
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold">{product.name}</h2>
          <p className="text-3xl font-semibold text-gold">
            {formatPrice(product.price)}
          </p>
          <div className="flex justify-start items-center">
            <Rating value={productRating} readOnly />
            <p className="text-md"> ({product.review.length} reviews)</p>
          </div>
          <hr />
          <p className="text-base text-slate-700">{product.description}</p>

          {product.inStock ? (
            <p className="text-base text-green-600 font-medium">In Stock</p>
          ) : (
            <p className="text-base text-orange-600 font-medium">
              Out of Stock
            </p>
          )}
          <p className="font-medium text-lg">
            <span className="font-normal">Category :</span> {product.category}
          </p>
          {isProductInCart ? (
            <>
              <p className="mb-2 text-slate-500 flex items-center gap-1">
                <MdCheckCircle size={20} className="text-teal-400" />
                <span>Product Added to cart.</span>
              </p>
              <div className="max-w-[300px]">
                <Button
                  label="View Cart"
                  outline
                  onClick={() => {
                    router.push("/cart");
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <SetColor
                cartProduct={cartProducts}
                handleColorSelect={handleColorSelect}
                selectedImage={product.image}
              />
              <SetQuantity
                cartProduct={cartProducts}
                handleQtySelectIncrease={handleQtySelectIncrease}
                handleQtySelectDecrease={handleQtySelectdecrease}
              />
              <button
                className="w-52 py-4 duration-300 bg-blue-500 hover:bg-blue-600 text-white text-lg font-titleFont"
                onClick={() => handleAddProductToCart(cartProducts)}
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
