"use client";
import { useRouter } from "next/navigation";
import Banner from "./components/Banner/Banner";
import BannerBottom from "./components/Banner/BannerBottom";
import Container from "./components/Container";
import Categories from "./components/HomePage/Categories";
import CategoryBlock from "./components/HomePage/CategoryBlock";
import { Categorys } from "./utils/Category";

export default function Home() {
  const router = useRouter();
  return (
    <div className="pb-8 pt-2">
      <Container>
        <Banner />

        <Categories />
        {Categorys.map((item, index) => (
          <div key={index} className="flex flex-col items-start justify-center">
            <CategoryBlock category={item.label} />
            <div className="w-full text-center">
              <button
                className="button"
                onClick={() => {
                  if (item.label == "All") {
                    router.push("/shop");
                  } else {
                    router.push("/shop?category=" + item.label);
                  }
                }}
              >
                <div className="text">
                  <span>View</span>
                  <span>All</span>
                  <span>Items</span>
                </div>
                <div className="clone">
                  <span>View</span>
                  <span>All</span>
                  <span>Items</span>
                </div>
                <svg
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
        <BannerBottom />
      </Container>
    </div>
  );
}
