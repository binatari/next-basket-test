import ProductsList from "@/components/list/productsList";
import Hero from "./components/hero";
import SectionHeader from "./components/sectionHeader";
import Services from "./components/sections/services";
import FeaturedPosts from "./components/sections/featuredPosts";
import About from "./components/sections/about";
import CTA from "./components/sections/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionHeader
        subTitle="Featured Products"
        title="BESTSELLER PRODUCTS"
        description="Problems trying to resolve the conflict between "
      />
      <ProductsList isPaginated />
      <Services/>
      <FeaturedPosts/>
      <About/>
      <CTA/>
    </main>
  );
}
