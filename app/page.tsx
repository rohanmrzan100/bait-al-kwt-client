import Banner from "./components/Banner/Banner";
import BannerBottom from "./components/Banner/BannerBottom";
import Container from "./components/Container";
import Categories from "./components/HomePage/Categories";
import CategoryBlock from "./components/HomePage/CategoryBlock";
import { Categorys } from "./utils/Category";
export default function Home() {
  return (
    <div className="pb-8 pt-2">
      <Container>
        <Banner />

        <Categories />
        {Categorys.map((item, index) => {
          return <CategoryBlock category={item.label} key={index} />;
        })}
        {/* <HomeDisplay /> */}
        <BannerBottom />
      </Container>
    </div>
  );
}
