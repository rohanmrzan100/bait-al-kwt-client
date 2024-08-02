"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";
import Button from "../components/Button/Button";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/FormatPrice";
import ItemContent from "./ItemContent";
import { FaCartShopping } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
const CartClient = () => {
  const router = useRouter();
  const { cartProduct, handleClearCart, totalPrice } = useCart();
  if (!cartProduct || cartProduct.length == 0) {
    return (
      <>
        <div className="text-2xl min-h-[50vh]">
          <div className="flex flex-col items-center ">
            <GiShoppingCart size={100} />
            <h1>Your cart is currently empty!</h1>
            <div className="mt-2">
              <p className="text-sm">
                Before you proceed to checkout,you must add some products to
                your shoping cart.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center my-12 ">
            {/* <Link
              href={"/"}
              className="text-slate-500 flex items-center gap-1 mt-2"
            >
              <MdArrowBack />
              <span>Start Shopping</span>
            </Link> */}
            <button className=" px-4 py-1 bg-slate-800 text-white  rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
               Return To Shop
            </button>
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
