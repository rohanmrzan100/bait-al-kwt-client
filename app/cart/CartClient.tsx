"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";
import Button from "../components/Button/Button";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/FormatPrice";
import ItemContent from "./ItemContent";

const CartClient = () => {
  const router = useRouter();
  const { cartProduct, handleClearCart, totalPrice } = useCart();
  if (!cartProduct || cartProduct.length == 0) {
    return (
      <>
        <div className="text-2xl min-h-[50vh]">
          <div>Your Cart is Empty .....</div>
          <div className="flex flex-col items-center mt-40">
            <Link
              href={"/"}
              className="text-slate-500 flex items-center gap-1 mt-2"
            >
              <MdArrowBack />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className=" text-slate-800 ">
      <h1 className="text-2xl text-slate-800 text-center font-semibold">
        Shopping Cart
      </h1>
      <div
        className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8
      "
      >
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className=" justify-self-center">PRICE</div>
        <div className=" justify-self-center">QUANTITY</div>
        <div className=" justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProduct.map((item) => {
          return <ItemContent key={item.id} item={item} />;
        })}
      </div>
      <div className="border-t[1.5px] bg-slate-200 text-slate-800 py-4 flex justify-between gap-4">
        <div className="w-[90px] my-8">
          <Button
            label="Clear Cart"
            onClick={() => {
              handleClearCart();
            }}
            small
            outline
          />
        </div>
        <div className="text-sm flex flex-col gap-2 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span className="text-gold">{formatPrice(totalPrice)}</span>
          </div>

          <p className="text-slate-500">
            Taxes and shipping calculated at checkout{" "}
          </p>
          <Button
            label="Checkout"
            onClick={() => {
              router.push("/checkout");
            }}
          />
          <div className="flex flex-col items-center">
            <Link
              href={"/"}
              className="text-slate-500 flex items-center gap-1 mt-2"
            >
              <MdArrowBack />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
