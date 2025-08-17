import BlogGrid from "@/components/BlogGrid/BlogGrid";
import Categories from "@/components/Categories";
import Companies from "@/components/Companies";
import Slider from "@/components/Slider";
import StoreSection from "@/components/StoreSection";

export default function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <BlogGrid />
      <StoreSection />
      <Companies />
    </>
  );
}

