"use client";
import React from "react";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "../utils/FormatPrice";
import { BASE_URL } from "@/Constants";
import BillingModal from "./BillingModal";

const Shipping = () => {
  const { cartProduct, totalPrice } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handlePlaceOrder = async () => {
    // Create an array containing id and quantity of each product
    const orderItems = cartProduct.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    }));
    console.log(orderItems)

    // Object containing Order Data
    const orderData = {
      items: orderItems,
      totalPrice: totalPrice,
      deliveryCharge: 2,
      grandTotal: totalPrice + 2,
    };

    //for API Call for later

    // try {
     
    //   const response = await axios.post("", orderData);
    //   if (response.status === 200) {
    //     console.log("Order placed successfully");
    //   } else {
    //     console.error("Error placing the order");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <>
      <div>
        <section className="bg-white py-8  my-8 antialiased  md:py-16">
          <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
                Summary
              </h2>

              <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
                <h4 className="text-lg font-semibold text-gray-900 ">
                  Add Your Billing & Delivery Information
                </h4>
                <button
                  className="text-white bg-slate-800 hover:bg-slate-700 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 "
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                  }}
                >
                  Add Details
                </button>
              </div>

              <div className="mt-6 sm:mt-8">
                <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left font-medium text-gray-900  md:table-fixed">
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      {cartProduct.map((product) => (
                        <tr key={product.id}>
                          <td className="whitespace-nowrap py-4 md:w-[384px]">
                            <div className="flex items-center gap-4">
                              <Link
                                href={`product/${product.id}`}
                                className="flex items-center aspect-square w-10 h-10 shrink-0"
                              >
                                <img
                                  className="h-auto w-full max-h-full "
                                  src={BASE_URL + product.selectedImage.image}
                                  alt="imac image"
                                />
                              </Link>
                              <Link
                                className="hover:underline"
                                href={`product/${product.id}`}
                              >
                                {product.name}
                              </Link>
                            </div>
                          </td>

                          <td className="p-4 text-base font-normal text-gray-900">
                            x{product.quantity}
                          </td>

                          <td className="p-4 text-right text-base font-bold text-gray-900">
                            {formatPrice(product.price * product.quantity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 ">
                    Order summary
                  </h4>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Total price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 ">
                          KWD {totalPrice}
                        </dd>
                      </dl>

                      {/* <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-500">
                        -$299.00
                      </dd>
                    </dl> */}

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Delivery Charge
                        </dt>
                        <dd className="text-base font-medium text-gray-900 ">
                          KWD 2
                        </dd>
                      </dl>

                      {/* <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        $799
                      </dd>
                    </dl> */}
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-lg font-bold text-gray-900 ">
                        Total
                      </dt>
                      <dd className="text-lg font-bold text-gray-900 ">
                        KWD {totalPrice + 2}
                      </dd>
                    </dl>
                  </div>

                  <div className="flex items-start sm:items-center">
                    <input
                      id="terms-checkbox-2"
                      type="checkbox"
                      value=""
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 d"
                    />
                    <label
                      for="terms-checkbox-2"
                      className="ms-2 text-sm font-medium text-gray-900"
                    >
                      I agree with the{" "}
                      <a
                        href="#"
                        title=""
                        className="text-primary-700 underline hover:no-underline "
                      >
                        Terms and Conditions
                      </a>{" "}
                      of use of the Flowbite marketplace{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col">
              <button
                className="text-white bg-slate-800 hover:bg-slate-700 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center  mr-5 self-end"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </form>
        </section>
      </div>
      <BillingModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Shipping;
