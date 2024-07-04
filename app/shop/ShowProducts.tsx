"use client";
import React from "react";
import Pagination from "../components/Pagination/Pagination";
import ProductCardSkeleton from "../components/ProductCard/ProductCardSkeleton";
import ProductCard from "../components/ProductCard/ProductCard";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/Constants";

import { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import Container from "../components/Container";
import { IProductProps } from "../type";

interface FilterState {
  color: string[];
  category: string[];
  //   size: string[];
}

const sortOptions = [
  // { name: "Most Popular",  current: true },
  // { name: "Best Rating", current: false },
  { name: "Newest", current: false },
  { name: "Price: Low to High", current: false },
  { name: "Price: High to Low", current: false },
];

const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "silver", label: "Silver", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "red", label: "Red", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "yellow", label: "Yellow", checked: false },
      { value: "gray", label: "Gray", checked: false },
      { value: "black", label: "Black", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All", checked: false },
      { value: "Trolley", label: "Trolley", checked: false },
      { value: "Cleaning Tool", label: "Cleaning Tool", checked: false },
      { value: "Trash Bin", label: "Trash Bin", checked: false },
      { value: "Dispensers", label: "Dispensers", checked: false },
      {
        value: "Cleaning Chemicals",
        label: "Cleaning Chemicals",
        checked: false,
      },
      {
        value: "Catering Consumables",
        label: "Catering Consumables",
        checked: false,
      },
    ],
  },
  //   {
  //     id: "size",
  //     name: "Size",
  //     options: [
  //       { value: "2l", label: "2L", checked: false },
  //       { value: "6l", label: "6L", checked: false },
  //       { value: "12l", label: "12L", checked: false },
  //       { value: "18l", label: "18L", checked: false },
  //       { value: "20l", label: "20L", checked: false },
  //       { value: "40l", label: "40L", checked: false },
  //     ],
  //   },
];

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

const ShowProducts = () => {
  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0].name);
  const [products, setProducts] = useState<IProductProps[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    color: [],
    category: [],
    // size: [],
  });

  const handleSortChange = (value: string): void => {
    setSelectedSort(value);
  };

  const handleFilterChange = (
    filterId: keyof FilterState,
    value: string
  ): void => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[filterId].includes(value)) {
        updatedFilters[filterId] = updatedFilters[filterId].filter(
          (v) => v !== value
        );
      } else {
        updatedFilters[filterId].push(value);
      }
      return updatedFilters;
    });
  };
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;
    async function getFilteredProduct(
      selectedSort: string,
      selectedFilters: FilterState
    ) {
      try {
        setIsLoading(true);
        const response = await axios.post(BASE_URL + "/api/product/filter", {
          sort: selectedSort,
          searchTerm: searchParams.get("q"),
          category: new Array(searchParams.get("category")),
          color: selectedFilters.color,
        });
        console.log(response);
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getFilteredProduct(selectedSort, selectedFilters);
  }, [selectedSort, selectedFilters, searchParams]);
  return (
    // <Container>
    <>
      <main className="w-full min-h-screen">
        <div className="flex items-center justify-between border-b border-slate-200 pt-6">
          <p>
            Home /<span className="text-gold "> Shop</span>{" "}
          </p>
          <div className="flex items-center ">
            <div className="px-8">
              <p className="text-md text-gray-700 font-bold">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">97</span> results
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p className="font-semibold">Sort By :</p>
              <Menu
                as="div"
                className="relative inline-block text-left text-slate-800 border-2 px-4 py-1 rounded-2xl border-blue-900"
              >
                <div className="flex items-center gap-2">
                  <MenuButton className="group inline-flex justify-center text-xl font-semibold text-slate-700 hover:text-slate-900">
                    {selectedSort}
                  </MenuButton>
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-xl font-semibold  text-slate-800 group-hover:text-slate-500"
                    aria-hidden="true"
                  />
                </div>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          {({ active }) => (
                            <a
                              href="#"
                              onClick={() => handleSortChange(option.name)}
                              className={classNames(
                                selectedSort === option.name
                                  ? "font-medium text-slate-900"
                                  : "text-slate-500",
                                active ? "bg-slate-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <hr className="h-px my-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div
          className="flex justify-between  gap-4 divide-x-2 divide-slate-800
        relative "
        >
          <section
            aria-labelledby="products-heading"
            className="text-xl pb-24 w-[15%] "
          >
            <h1 className="mb-4 text-xl font-bold text-slate-800">Filter</h1>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="grid grid-cols-1">
              {/* Filters */}
              <div className=" p-4 max-w-[200px]">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-slate-200 py-6 max-w-[200px]"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="flex w-full items-center justify-between py-3 text-sm text-slate-400 hover:text-slate-500">
                            <span className="font-medium text-slate-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  value={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={() =>
                                    handleFilterChange(
                                      section.id as keyof FilterState,
                                      option.value
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-slate-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>

              {/* Product grid */}
              <div className="lg:col-span-3">{/* Your content */}</div>
            </div>
          </section>
          <div className=" flex-1">
            {!isLoading ? (
              <div className=" ml-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 px-2">
                {products &&
                  products.map((product: IProductProps, index) => (
                    <ProductCard {...product} key={index} />
                  ))}
                {products && products.length < 1 && (
                  <h2 className="text-orange-600">No products founds !</h2>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 px-2">
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </div>
            )}
          </div>
        </div>
      </main>
      <div className=" flex justify-end">
        <Pagination />
      </div>
    </>
    // </Container>
  );
};

export default ShowProducts;
