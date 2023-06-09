import CatBanner from "./CategoryBanner";
import Hero from "./Hero";
import InstaKids from "./InstaKids";
import ProductPage from "./Product";

const HomePage = () => {
  return (
    <main className="container mx-auto px-28 py-8 mb-40 ">
      <Hero />
      <CatBanner />
      <ProductPage />
      <InstaKids/>
    </main>
  );
};

export default HomePage;
