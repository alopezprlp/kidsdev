import CatBanner from "./CategoryBanner";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <main className="container mx-auto px-28 py-8 mb-40 ">
      <Hero />
      <CatBanner />
    </main>
  );
};

export default HomePage;
