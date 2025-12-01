import { Hero } from "@/features/home/hero";
import { Categories } from "@/features/home/categories";
import { BlogGrid } from "@/features/home/blog-grid";
import { StoreSection } from "@/features/home/store-section";
import { Companies } from "@/features/home/companies";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BlogGrid />
      <StoreSection />
      <Companies />
    </>
  );
}
