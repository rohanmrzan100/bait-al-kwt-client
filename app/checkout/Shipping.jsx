import React from "react";

const Shipping = () => {
  return (
    <div>
      <section className="bg-white py-8  my-8 antialiased  md:py-16">
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
              Order summary
            </h2>

            <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
              <h4 className="text-lg font-semibold text-gray-900 ">
                Billing & Delivery information
              </h4>

              <dl>
                <dt className="text-base font-medium text-gray-900 ">
                  Individual
                </dt>
                <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                  Bonnie Green - +1 234 567 890, San Francisco, California,
                  United States, 3454, Scott Street
                </dd>
              </dl>

              <button
                type="button"
                data-modal-target="billingInformationModal"
                data-modal-toggle="billingInformationModal"
                className="text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
              >
                Edit
              </button>
            </div>

            <div className="mt-6 sm:mt-8">
              <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                <table className="w-full text-left font-medium text-gray-900  md:table-fixed">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-10 h-10 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iMac 27”
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 ">
                        x1
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 ">
                        $1,499
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-10 h-10 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iPhone 14
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 ">
                        x2
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 ">
                        $1,998
                      </td>
                    </tr>
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
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        $6,592.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-500">
                        -$299.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        $99
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        $799
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-lg font-bold text-gray-900 ">
                      Total
                    </dt>
                    <dd className="text-lg font-bold text-gray-900 ">
                      $7,191.00
                    </dd>
                  </dl>
                </div>

                <div className="flex items-start sm:items-center">
                  <input
                    id="terms-checkbox-2"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    for="terms-checkbox-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {" "}
                    I agree with the{" "}
                    <a
                      href="#"
                      title=""
                      className="text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Terms and Conditions
                    </a>{" "}
                    of use of the Flowbite marketplace{" "}
                  </label>
                </div>

                <div className="gap-4 sm:flex sm:items-center">
                  <button
                    type="button"
                    className="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Return to Shopping
                  </button>

                  <button
                    type="submit"
                    className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0"
                  >
                    Send the order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      <div
        id="billingInformationModal"
        tabindex="-1"
        aria-hidden="true"
        className="antialiased fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-auto w-full max-h-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0"
      >
        <div className="relative max-h-auto w-full max-h-full max-w-lg p-4">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Billing Information
              </h3>
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="billingInformationModal"
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form className="p-4 md:p-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
                <div className="flex items-center gap-4 sm:col-span-2">
                  <div className="flex items-center">
                    <input
                      id="company_address_billing_modal"
                      data-collapse-toggle="company-info-container-modal"
                      aria-expanded="false"
                      type="checkbox"
                      value=""
                      name="address-type-modal"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label
                      for="company_address_billing_modal"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {" "}
                      Order as a company{" "}
                    </label>
                  </div>
                </div>

                <div
                  className="grid hidden grid-cols-2 gap-4 sm:col-span-2"
                  id="company-info-container-modal"
                >
                  <div>
                    <label
                      for="company_name"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Company name{" "}
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Flowbite LLC"
                    />
                  </div>

                  <div>
                    <label
                      for="vat_number"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      VAT number{" "}
                    </label>
                    <input
                      type="text"
                      id="vat_number"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="DE42313253"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mb-2 flex items-center gap-1">
                    <label
                      for="saved-address-modal"
                      className="block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Saved Address{" "}
                    </label>
                    <svg
                      data-tooltip-target="saved-address-modal-desc-2"
                      data-tooltip-trigger="hover"
                      className="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* <select
                    id="saved-address-modal"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  >
                    <option selected>Choose one of your saved address</option>
                    <option value="address-1">
                      San Francisco, California, United States, 3454, Scott
                      Street
                    </option>
                    <option value="address-2">
                      New York, United States, Broadway 10012
                    </option>
                  </select> */}
                  <div
                    id="saved-address-modal-desc-2"
                    role="tooltip"
                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  >
                    Choose one of your saved addresses
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                <div>
                  <label
                    for="first_name_billing_modal"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    {" "}
                    First Name*{" "}
                  </label>
                  <input
                    type="text"
                    id="first_name_billing_modal"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div>
                  <label
                    for="last_name_billing_modal"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    {" "}
                    Last Name*{" "}
                  </label>
                  <input
                    type="text"
                    id="last_name_billing_modal"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Enter your last name"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    for="phone-input_billing_modal"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    {" "}
                    Phone Number*{" "}
                  </label>
                  <div className="flex items-center">
                    <button
                      id="dropdown_phone_input__button_billing_modal"
                      data-dropdown-toggle="dropdown_phone_input_billing_modal"
                      className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700  dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      +1
                      <svg
                        className="-me-0.5 ms-2 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 9-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdown_phone_input_billing_modal"
                      className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown_phone_input__button_billing_modal"
                      >
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            <span className="inline-flex items-center">
                              United States (+1)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            <span className="inline-flex items-center">
                              United Kingdom (+44)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            <span className="inline-flex items-center">
                              Australia (+61)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            <span className="inline-flex items-center">
                              Germany (+49)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            <span className="inline-flex items-center">
                              France (+33)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            <span className="inline-flex items-center">
                              Germany (+49)
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="phone-input"
                        className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      for="select_country_input_billing_modal"
                      className="block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Country*{" "}
                    </label>
                  </div>
                  <select
                    id="select_country_input_billing_modal"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  >
                    <option selected>United States</option>
                    <option value="AS">Australia</option>
                    <option value="FR">France</option>
                    <option value="ES">Spain</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      for="select_city_input_billing_modal"
                      className="block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      City*{" "}
                    </label>
                  </div>
                  <select
                    id="select_city_input_billing_modal"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  >
                    <option selected>San Francisco</option>
                    <option value="NY">New York</option>
                    <option value="LA">Los Angeles</option>
                    <option value="CH">Chicago</option>
                    <option value="HU">Houston</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    for="address_billing_modal"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    {" "}
                    Shipping Address*{" "}
                  </label>
                  <textarea
                    id="address_billing_modal"
                    rows="4"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Enter here your address"
                  ></textarea>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
                <button
                  type="submit"
                  className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Save information
                </button>
                <button
                  type="button"
                  data-modal-toggle="billingInformationModal"
                  className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
